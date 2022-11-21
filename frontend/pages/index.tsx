// Next.js는 import React from 'react' 구문이 필요없음

import { useSelector } from 'react-redux';
import AppLayout from "../components/AppLayout";
import PostCard from '../components/PostCard';
import PostForm from '../components/PostForm';

const Home = () => {
  const { isLoggedIn } = useSelector((state: any) => state.user);
  const { mainPosts } = useSelector((state: any) => state.post);
  return (
    // 다른 컴포넌트로 감싸줄 경우 다른 컴포넌트 사용 가능
    <AppLayout>
      {isLoggedIn && <PostForm />}
      {mainPosts.map((post: any) => <PostCard key={post.id} post={post} />)}
    </AppLayout>
  );
};

export default Home;
