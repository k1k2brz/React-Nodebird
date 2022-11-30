import React from 'react';
import { useSelector } from 'react-redux';
import Head from 'next/head';
import { END } from 'redux-saga';

import { Avatar, Card } from 'antd';
import AppLayout from '../components/AppLayout';
import wrapper from '../store/configureStore';
import { LOAD_USER_REQUEST } from '../reducers/user';

const Profile = () => {
    const { userInfo } = useSelector((state: any) => state.user);

    return (
        <AppLayout>
            <Head>
                <title>내 정보 | NodeBird</title>
            </Head>
            {userInfo
                ? (
                    <Card
                        actions={[
                            <div key="twit">
                                짹짹
                                <br />
                                {userInfo.Posts}
                            </div>,
                            <div key="following">
                                팔로잉
                                <br />
                                {userInfo.Followings}
                            </div>,
                            <div key="follower">
                                팔로워
                                <br />
                                {userInfo.Followers}
                            </div>,
                        ]}
                    >
                        <Card.Meta
                            avatar={<Avatar>{userInfo.nickname[0]}</Avatar>}
                            title={userInfo.nickname}
                            description="노드버드 매니아"
                        />
                    </Card>
                )
                : null}
        </AppLayout>
    );
};

// 언제 접속해서 데이터가 바뀔 일이 없다면 - getStaticProps (블로그 글 같은)
// build를 할 때 그 때 미리 SSR해서 HTML로 만들어 사람들이 방문하면 HTML을 제공한다.
export const getStaticProps = wrapper.getStaticProps((store): any => async ({ req }) => {
    console.log('getStaticProps');
    store.dispatch({
        type: LOAD_USER_REQUEST,
        data: 1,
    });
    store.dispatch(END);
    await store.sagaTask.toPromise();
    // 실행된 결과 HYDRATE로 보낸다 (reducer index)
})

export default Profile;