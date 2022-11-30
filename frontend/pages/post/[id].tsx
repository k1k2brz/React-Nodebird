// post/[id]
// [id].tsx [id]는 바뀔 자리 (다이나믹 라우팅)

import axios from 'axios';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';
import AppLayout from '../../components/AppLayout';
import PostCard from '../../components/PostCard';
import { LOAD_POST_REQUEST } from '../../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../../reducers/user';
import wrapper from '../../store/configureStore';
import { GetServerSideProps } from 'next';

const Post = () => {
    const router = useRouter();
    // 뒤에 숫자 바뀌도록 구조분해 동적 라우팅
    const { id } = router.query;
    // 좀 더 정확히 알고싶으면 SQL Like query 검색

    const { singlePost } = useSelector((state: any) => state.post);

    // fallback : True시 에러 안나게
    // if (router.isFallback) {
    //     return <div>로딩중...</div>
    // }

    return (
        <AppLayout>
            <Head>
                <title>
                    {singlePost.User.nickname}
                    님의 글
                </title>
                <meta name="description" content={singlePost.content} />
                <meta property="og:title" content={`${singlePost.User.nickname}님의 게시글`} />
                <meta property="og:description" content={singlePost.content} />
                {/* 이미지가 없는 게시글 공유하면 favicon이 화면에 뜨게 */}
                {/* 이미지가 있으면 첫번째 이미지가 뜨게 */}
                <meta property="og:image" content={singlePost.Images[0] ? singlePost.Images[0].src : 'https://nodebird.com/favicon.ico'} />
                <meta property="og:url" content={`https://nodebird.com/post/${id}`} />
            </Head>
            <PostCard post={singlePost} />
        </AppLayout>
    );
};

// 다이나믹 라우팅일 때 getStaticProps를 쓰면 무조건 getStaticPaths가 있어야한다.
// export async function getStaticPaths() {
// const await = axios.get('/post/list')
//   return {
//     paths: [
//       { params: { id: '1' } },
//       { params: { id: '2' } },
//       { params: { id: '3' } },
//     ],
//      false하면 위에 적혀있지 않은 페이지 전부 에러 true하면 SSR안됨
//     fallback: true,
//   };
// }

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
        type: LOAD_POST_REQUEST,
        data: params.id,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
})

export default Post;