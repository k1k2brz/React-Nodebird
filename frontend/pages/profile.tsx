import React, { useEffect, useState, useCallback } from "react";
import Head from "next/head";
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'
import axios from 'axios';
import { END } from 'redux-saga';
// swr 서버사이드렌더링 가능
import useSWR from 'swr';

import AppLayout from "../components/AppLayout";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST, LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const fetcher = (url) => axios.get(url, { withCredentials: true }).then((result) => result.data)

const Profile = () => {

    const { me } = useSelector((state: any) => state.user);
    const [followersLimit, setFollowersLimit] = useState(3);
    const [followingsLimit, setFollowingsLimit] = useState(3);

    // Redux의 loadfollower 액션들 안만들고 이거만 쓰면 끝
    // 데이터도 없고 에러도 없으면 로딩
    const { data: followersData, error: followerError } = useSWR(
        `http://localhost:3065/user/followers?limit=${followersLimit}`, fetcher
    );
    const { data: followingsData, error: followingError } = useSWR(
        `http://localhost:3065/user/followings?limit=${followingsLimit}`, fetcher
    );

    // SWR로 대체
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch({
    //         type: LOAD_FOLLOWERS_REQUEST,
    //     });
    //     dispatch({
    //         type: LOAD_FOLLOWINGS_REQUEST,
    //     })
    // }, [])

    // 로그인 안한채로 프로필 페이지 가면 리턴
    useEffect(() => {
        if (!(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);

    // 기존 보다 3씩 추가
    const loadMoreFollowers = useCallback(() => {
        setFollowersLimit((prev) => prev + 3);
    }, [])

    const loadMoreFollowings = useCallback(() => {
        setFollowingsLimit((prev) => prev + 3);
    }, [])

    if (!me) {
        return '내 정보 로딩중....';
    }

    if (followerError || followingError) {
        console.error(followerError || followingError)
        return <div>팔로잉/팔로워 로딩 중 에러가 발생합니다.</div>
    }

    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉"
                    data={followingsData}
                    onClickMore={loadMoreFollowings}
                    loading={!followingsData && !followingError}
                />
                <FollowList header="팔로워"
                    data={followersData}
                    onClickMore={loadMoreFollowers}
                    loading={!followersData && !followerError}
                />
            </AppLayout>;
        </>
    );
};

export const getServerSideProps = wrapper.getServerSideProps((store): any => async ({ req }) => {
    console.log('getServerSideProps start')
    console.log(req.headers)
    const cookie = req ? req.headers.cookie : '';
    axios.defaults.headers.Cookie = '';
    if (req && cookie) {
        axios.defaults.headers.Cookie = cookie;
    }
    store.dispatch({
        type: LOAD_MY_INFO_REQUEST,
    });
    store.dispatch(END);
    console.log('getServerSideProps end')
    await store.sagaTask.toPromise();
})

export default Profile;