import React, { useEffect } from "react";
import AppLayout from "../components/AppLayout";
import Head from "next/head";
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router'
import { LOAD_FOLLOWERS_REQUEST, LOAD_FOLLOWINGS_REQUEST } from '../reducers/user';

const Profile = () => {
    const dispatch = useDispatch();

    const { me } = useSelector((state: any) => state.user);

    useEffect(() => {
        dispatch({
            type: LOAD_FOLLOWERS_REQUEST,
        });
        dispatch({
            type: LOAD_FOLLOWINGS_REQUEST,
        })
    }, [])

    // 로그인 안한채로 프로필 페이지 가면 리턴
    useEffect(() => {
        if (!(me && me.id)) {
            Router.push('/');
        }
    }, [me && me.id]);

    if (!me) {
        return null;
    }
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>프로필 | NodeBird</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="팔로잉" data={me.Followings} />
                <FollowList header="팔로워" data={me.Followers} />
            </AppLayout>;
        </>
    );
};

export default Profile;