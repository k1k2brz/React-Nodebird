// *은 제너레이터
// yield는 중단점 next()는 다음 넘어감
// const gen = function*() {
// while (true) {
//     yield '무한';
//  } < yield가 중단점이라 무한으로 안돌고 유효한 코드가 됨
// }

import axios from 'axios'
import { all, fork } from 'redux-saga/effects'

import postSaga from './post'
import userSaga from './user'

axios.defaults.baseURL = 'http://localhost:3065';

export default function* rootSaga() {
    // all은 배열안에 든 걸 한번에 실행해준다.
    yield all([
        // user와 post로 분리
        fork(postSaga),
        fork(userSaga),
    ])
}