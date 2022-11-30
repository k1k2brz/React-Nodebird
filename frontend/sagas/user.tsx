import { all, fork, delay, put, takeEvery, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_SUCCESS, LOG_OUT_SUCCESS, LOG_IN_FAILURE,
    LOG_IN_REQUEST, LOG_OUT_FAILURE, LOG_OUT_REQUEST,
    SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS,
    FOLLOW_REQUEST, UNFOLLOW_REQUEST, FOLLOW_SUCCESS,
    FOLLOW_FAILURE, UNFOLLOW_SUCCESS, UNFOLLOW_FAILURE,
    LOAD_USER_REQUEST, LOAD_USER_SUCCESS, LOAD_USER_FAILURE,
    CHANGE_NICKNAME_REQUEST, CHANGE_NICKNAME_FAILURE, CHANGE_NICKNAME_SUCCESS,
    LOAD_FOLLOWINGS_SUCCESS, LOAD_FOLLOWINGS_FAILURE, LOAD_FOLLOWERS_SUCCESS,
    LOAD_FOLLOWERS_FAILURE,
    REMOVE_FOLLOWER_SUCCESS,
    REMOVE_FOLLOWER_FAILURE,
    REMOVE_FOLLOWER_REQUEST,
    LOAD_FOLLOWERS_REQUEST,
    LOAD_FOLLOWINGS_REQUEST,
    LOAD_MY_INFO_REQUEST,
    LOAD_MY_INFO_SUCCESS,
    LOAD_MY_INFO_FAILURE,
} from '../reducers/user';

// SAGA를 통해 백엔드 (port 3065에 요청)
// axios보낼 https주소 saga폴더 index에 중복되는 부분 변수로 묶어줌
// withCredentials 공통설정 해줘서 자동으로 들어감

function removeFollowerAPI(data) {
    return axios.delete(`/user/follower/${data}`);
}

function* removeFollower(action) {
    try {
        const result = yield call(removeFollowerAPI, action.data);
        yield put({
            type: REMOVE_FOLLOWER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_FOLLOWER_FAILURE,
            error: err.response.data,
        });
    }
}

function loadFollowersAPI(data) {
    return axios.get('/user/followers', data);
}

function* loadFollowers(action) {
    try {
        const result = yield call(loadFollowersAPI, action.data);
        yield put({
            type: LOAD_FOLLOWERS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWERS_FAILURE,
            error: err.response.data,
        });
    }
}

function loadFollowingsAPI(data) {
    return axios.get('/user/followings', data);
}

function* loadFollowings(action) {
    try {
        const result = yield call(loadFollowingsAPI, action.data);
        yield put({
            type: LOAD_FOLLOWINGS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_FOLLOWINGS_FAILURE,
            error: err.response.data,
        });
    }
}

function followAPI(data) {
    return axios.patch(`/user/${data}/follow`)
}

function* follow(action) {
    try {
        const result = yield call(followAPI, action.data)
        // yield delay(1000); 더미데이터용
        yield put({
            type: FOLLOW_SUCCESS,
            data: result.data
        })
    } catch (err) {
        yield put({
            type: FOLLOW_FAILURE,
            error: err.response.data,
        })
    }
}

function unfollowAPI(data) {
    return axios.delete(`/user/${data}/follow`)
}

function* unfollow(action) {
    try {
        const result = yield call(unfollowAPI, action.data)
        yield put({
            type: UNFOLLOW_SUCCESS,
            data: result.data
        })
    } catch (err) {
        yield put({
            type: UNFOLLOW_FAILURE,
            error: err.response.data,
        })
    }
}

function changeNicknameAPI(data) {
    return axios.patch('/user/nickname', { nickname: data });
};

function* changeNickname(action) {
    try {
        const result = yield call(changeNicknameAPI, action.data);
        console.log(result)
        yield put({
            type: CHANGE_NICKNAME_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: CHANGE_NICKNAME_FAILURE,
            error: err.response.data,
        });
    }
}

function loadUserAPI(data) {
    return axios.get(`/user/${data}`);
};

function* loadUser(action) {
    try {
        const result = yield call(loadUserAPI, action.data);
        console.log(result)
        yield put({
            type: LOAD_USER_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_USER_FAILURE,
            error: err.response.data,
        });
    }
}

function loadMyInfoAPI() {
    return axios.get('/user');
};

function* loadMyInfo() {
    try {
        const result = yield call(loadMyInfoAPI);
        console.log(result)
        yield put({
            type: LOAD_MY_INFO_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_MY_INFO_FAILURE,
            error: err.response.data,
        });
    }
}

// login 할때 받아와야 하는 data
function logInAPI(data) {
    // API는 제너레이터가 아님 주의할 것 
    return axios.post('/user/login', data)
}

// call을 사용하면 이렇게 펼쳐서 적어줘야 함
// logInAPI(action.data);
// call(logInAPI, action.data);

// action.type 하면 Login request가 나오고 action.data하면 로그인 데이터가 들어있음
function* logIn(action) {
    // 요청의 결과를 받는다.
    try {
        // fork는 비동기 함수호출 (결과값 상관없이 바로 실행)
        // call은 동기 함수호출 (결과값 받아올 때 까지 기다림 (ex)then(() => )를 받아오듯)

        const result = yield call(logInAPI, action.data)
        // yield delay(1000); // 서버가 아직 없기 때문에
        // call(logInAPI, action.data)처럼 작성해야 테스트하기 쉽다.
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
            // data: action.data, 더미용
        });
    } catch (err) {
        //성공은 result.data 실패는 err.response.data에 담긴다
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function logOutAPI() {
    return axios.post('/user/logout')
}

function* logOut() {
    try {
        yield call(logOutAPI)
        // yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function signUpAPI(data) {
    // data는 email, password, nickname (signUp에서 넘어옴)
    return axios.post('/user', data);
}

function* signUp(action) {
    try {
        // action.data 넣어주면 signUpAPI에서 data받기 가능
        const result = yield call(signUpAPI, action.data)
        console.log(result)
        // yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchRemoveFollower() {
    yield takeLatest(REMOVE_FOLLOWER_REQUEST, removeFollower);
}

function* watchLoadFollowers() {
    yield takeLatest(LOAD_FOLLOWERS_REQUEST, loadFollowers);
}

function* watchLoadFollowings() {
    yield takeLatest(LOAD_FOLLOWINGS_REQUEST, loadFollowings);
}
function* watchChangeNickname() {
    yield takeLatest(CHANGE_NICKNAME_REQUEST, changeNickname);
}
function* watchLoadUser() {
    yield takeLatest(LOAD_USER_REQUEST, loadUser);
}
function* watchLoadMyInfo() {
    yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}
function* watchFollow() {
    yield takeLatest(FOLLOW_REQUEST, follow);
}
function* watchUnfollow() {
    yield takeLatest(UNFOLLOW_REQUEST, unfollow);
}
// 한 번 밖에 받지 않는다 (1번 받고나면 이벤트 리스너 사라짐)
// 1. takeEvery를 사용하거나 (while문 대체) 2. while로 감싸서 무한으로 실행되게 해준다. (잘 안씀)
function* watchLogIn() {
    // LOG_IN이란 액션이 실행될 때 까지 기다리겠다.
    // 어차피 Login이 request 되는 순간에 실행되니까
    yield takeLatest(LOG_IN_REQUEST, logIn);
    // 만약 takeLatest를 사용하면 2회 이상 연속으로 눌렀을 때 마지막꺼만 실행 (마우스 고장 등으로)
    // 그러나 프론트에서만 마지막꺼 사용하는거고 백엔드에서는 두번 요청 보냄 (서버에는 두번 저장된다)
    // throttle로 시간제한을 둬서 제한시간 이내 여러번 클릭시 한번만 요청하게 함

    // 첫번째꺼만 실행하는 방법도 있음 takeReading?
}
function* watchLogOut() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}


export default function* userSaga() {
    yield all([
        fork(watchRemoveFollower),
        fork(watchLoadFollowers),
        fork(watchLoadFollowings),
        fork(watchChangeNickname),
        fork(watchLoadUser),
        fork(watchLoadMyInfo),
        fork(watchFollow),
        fork(watchUnfollow),
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}
