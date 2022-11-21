import React from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉 목록" data={FollowList} />
                <FollowList header="팔로워 목록" data={FollowList} />
            </AppLayout>;
        </>
    );
};

export default Profile;