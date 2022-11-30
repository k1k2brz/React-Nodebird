// Next.js는 import React from 'react' 구문이 필요없음
import axios from 'axios';
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { END } from 'redux-saga';

import AppLayout from "../components/AppLayout";
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';
import { LOAD_POSTS_REQUEST } from '../reducers/post';
import { LOAD_MY_INFO_REQUEST } from '../reducers/user';
import wrapper from '../store/configureStore';

const Home = () => {
  const dispatch = useDispatch();
  const { me } = useSelector((state: any) => state.user);
  const { mainPosts, hasMorePosts, loadPostsLoading, retweetError } = useSelector((state: any) => state.post);
  console.log(mainPosts)

  // 리렌더링 에러로 상위에 올린 것
  useEffect(() => {
    if (retweetError) {
      alert(retweetError)
    }
  }, [retweetError])

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_POSTS_REQUEST,
  //   });
  // }, []);

  // useEffect(() => {
  //   dispatch({
  //     type: LOAD_USER_REQUEST,
  //   })
  // }, [])

  useEffect(() => {
    function onScroll() {
      // scrollY: 얼마나 내렸는지, clientHeight: 화면 보이는 길이, scrollHeight: 총 길이
      // scrollY + clientHeight해서 끝까지 내렸는지 확인 가능
      if (window.scrollY + document.documentElement.clientHeight > document.documentElement.scrollHeight - 300) {
        // 로딩중에도 실행 안되게 막아준다. (Throttle만으로는 request여러번 가는 것 까지 못 막기 때문)
        // 만약 모바일로 수천번 무한스크롤 게시글을 로딩한다면 메모리가 터져버릴 수 있기 때문에
        // react-virtualized를 사용하면 좋다. (구현해볼것)
        if (hasMorePosts && !loadPostsLoading) {
          // 마지막 게시글의 id // &&와 같음
          // 주소창 쿼리 스트링이 없을 경우 대비
          const lastId = mainPosts[mainPosts.length - 1]?.id;
          dispatch({
            type: LOAD_POSTS_REQUEST,
            lastId,
          });
        }
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [mainPosts, hasMorePosts, loadPostsLoading]);

  return (
    // 다른 컴포넌트로 감싸줄 경우 다른 컴포넌트 사용 가능
    <AppLayout>
      {me && <PostForm />}
      {mainPosts.map((post: any) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
};

// Next js - SSR
// HOME 보다 먼저 실행된다.
// 서버쪽에서 작동되는 코드
// 접속할 때 마다 상황에 따라 화면이 바껴야하면 getServerSideProps
// 방문할 때 SSR한다
export const getServerSideProps = wrapper.getServerSideProps((store): any => async ({ req }) => {
  console.log('getServerSideProps start');
  console.log(req.headers);
  // 서버쪽으로 쿠키 전달하는 과정 (쿠키가 없으면 인식 못함)
  const cookie = req ? req.headers.cookie : '';
  axios.defaults.headers.Cookie = '';
  // 다른 사람이 내 페이지에서 로그인 했을 때 내 쿠키때문에 내 아이디로 로그인 되는 현상 방지 (쿠키공유 방지)
  if (req && cookie) {
    axios.defaults.headers.Cookie = cookie;
  }
  store.dispatch({
    type: LOAD_MY_INFO_REQUEST,
  });
  store.dispatch({
    type: LOAD_POSTS_REQUEST,
  });
  // Next - redux 사용방법 (공식문서)
  store.dispatch(END);
  console.log('getServerSideProps end');
  await store.sagaTask.toPromise(); // store에 sagaTask
  // 실행된 결과 HYDRATE로 보낸다 (reducer index)
})

export default Home;
