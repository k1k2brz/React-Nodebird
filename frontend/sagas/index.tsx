// *은 제너레이터
// yield는 중단점 next()는 다음 넘어감
// const gen = function*() {
// while (true) {
//     yield '무한';
//  } < yield가 중단점이라 무한으로 안돌고 유효한 코드가 됨
// }

import { all, fork } from 'redux-saga/effects'
import axios from 'axios'

import postSaga from './post'
import userSaga from './user'

axios.defaults.baseURL = 'http://localhost:3065';
/** 쿠키를 같이 전달 해준다 (도메인이 다르면 쿠키도 전달이 안되니까 backend의 cors와 여기)
     saga에서 보내는 axios는 withCredentials: true로 쿠키전달 허용을 공통적으로 들어가게 해줌 */
axios.defaults.withCredentials = true;

export default function* rootSaga() {
    // all은 배열안에 든 걸 한번에 실행해준다.
    yield all([
        // user와 post로 분리
        fork(postSaga),
        fork(userSaga),
    ])
}