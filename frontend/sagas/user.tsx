import { all, fork, delay, put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import {
    LOG_IN_SUCCESS, LOG_OUT_SUCCESS, LOG_IN_FAILURE,
    LOG_IN_REQUEST, LOG_OUT_FAILURE, LOG_OUT_REQUEST,
    SIGN_UP_REQUEST, SIGN_UP_FAILURE, SIGN_UP_SUCCESS,
} from '../reducers/user';

// login 할때 받아와야 하는 data
function logInAPI(data) {
    // API는 제너레이터가 아님 주의할 것 
    return axios.post('/api/login', data)
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

        // const result = yield call(logInAPI, action.data)
        yield delay(1000); // 서버가 아직 없기 때문에
        // call(logInAPI, action.data)처럼 작성해야 테스트하기 쉽다.
        yield put({
            type: LOG_IN_SUCCESS,
            data: action.data,
        })
    } catch (err) {
        //성공은 result.data 실패는 err.response.data에 담긴다
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        })
    }
}

function logOutAPI() {
    return axios.post('/api/logout')
}

function* logOut() {
    try {
        // const result = yield call(logOutAPI)
        yield delay(1000);
        yield put({
            type: LOG_OUT_SUCCESS,
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        })
    }
}

function signUpAPI() {
    return axios.post('/api/signUp')
}

function* signUp() {
    try {
        // const result = yield call(signUpAPI)
        yield delay(1000);
        yield put({
            type: SIGN_UP_SUCCESS,
            // data: result.data
        })
    } catch (err) {
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        })
    }
}


// 한 번 밖에 받지 않는다 (1번 받고나면 이벤트 리스너 사라짐)
// 1. takeEvery를 사용하거나 (while문 대체) 2. while로 감싸서 무한으로 실행되게 해준다. (잘 안씀)
function* watchLogIn() {
    // LOG_IN이란 액션이 실행될 때 까지 기다리겠다.
    // 어차피 Login이 request 되는 순간에 실행되니까
    yield takeEvery(LOG_IN_REQUEST, logIn);
    // 만약 takeLatest를 사용하면 2회 이상 연속으로 눌렀을 때 마지막꺼만 실행 (마우스 고장 등으로)
    // 그러나 프론트에서만 마지막꺼 사용하는거고 백엔드에서는 두번 요청 보냄 (서버에는 두번 저장된다)
    // throttle로 시간제한을 둬서 제한시간 이내 여러번 클릭시 한번만 요청하게 함

    // 첫번째꺼만 실행하는 방법도 있음 takeReading?
}
function* watchLogOut() {
    yield takeEvery(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
    yield takeEvery(SIGN_UP_REQUEST, signUp);
}


export default function* userSaga() {
    yield all([
        fork(watchLogIn),
        fork(watchLogOut),
        fork(watchSignUp),
    ])
}
