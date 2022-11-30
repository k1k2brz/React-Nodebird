// hashtag/[tag].tsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import { END } from 'redux-saga';

import axios from 'axios';
import { LOAD_HASHTAG_POSTS_REQUEST } from '../../reducers/post';
import PostCard from '../../components/PostCard';
import wrapper from '../../store/configureStore';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import AppLayout from '../../components/AppLayout';
import { GetServerSideProps } from 'next';

const Hashtag = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    // tag 구조분해
    const { tag } = router.query;
    const { mainPosts, hasMorePosts, loadPostsLoading } = useSelector((state: any) => state.post);

    useEffect(() => {
        const onScroll = () => {
            if (window.pageYOffset + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
                if (hasMorePosts && !loadPostsLoading) {
                    dispatch({
                        type: LOAD_HASHTAG_POSTS_REQUEST,
                        lastId: mainPosts[mainPosts.length - 1] && mainPosts[mainPosts.length - 1].id,
                        data: tag,
                    });
                }
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, [mainPosts.length, hasMorePosts, tag, loadPostsLoading]);

    return (
        <AppLayout>
            {mainPosts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </AppLayout>
    );
};


export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store): any => async ({ req, params }) => {
    console.log(store, req)
    const cookie = req ? req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch({
        type: LOAD_HASHTAG_POSTS_REQUEST,
        data: params.tag,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
})

export default Hashtag;