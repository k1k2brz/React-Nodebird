import { all, fork, delay, put, takeEvery, takeLatest, throttle } from 'redux-saga/effects';
import shortId from 'shortid';
import axios from 'axios';
import {
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS, generateDummyPost, LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function loadPostsAPI(data) {
    return axios.get('/api/post', data)
}

function* loadPosts(action) {
    try {
        // const result = yield call(loadPostsAPI, action.data)
        yield delay(1000);
        const id = shortId.generate();
        yield put({
            type: LOAD_POSTS_SUCCESS,
            // action.data에 작성한 글이 들어있음
            data: generateDummyPost(10), // reducer에서 만든 함수
        });
    } catch (err) {
        yield put({
            type: LOAD_POSTS_FAILURE,
            data: err.response.data,
        })
    }
}

function addPostAPI(data) {
    return axios.post('/api/post', data)
}

function* addPost(action) {
    try {
        // const result = yield call(addPostAPI, action.data)
        yield delay(1000);
        const id = shortId.generate();
        yield put({
            type: ADD_POST_SUCCESS,
            // action.data에 작성한 글이 들어있음
            data: {
                id,
                content: action.data,
            }
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: id,
        })
    } catch (err) {
        yield put({
            type: ADD_POST_FAILURE,
            data: err.response.data,
        })
    }
}

function removePostAPI(data) {
    return axios.delete('/api/post', data)
}

function* removePost(action) {
    try {
        // const result = yield call(removePostAPI, action.data)
        yield delay(1000);
        const id = shortId.generate();
        // POST reducer 상태랑 user reducer상태랑 동시에 바꿀 수 없기 때문에 action이 2개가 나온다.
        yield put({
            type: REMOVE_POST_SUCCESS,
            // action.data에 작성한 글이 들어있음
            data: {
                id,
                content: action.data,
            }
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: id,
        })
    } catch (err) {
        yield put({
            type: REMOVE_POST_FAILURE,
            data: err.response.data,
        })
    }
}

function addCommentAPI(data) {
    // return axios.post(`/api/post/${data.postId}/comment`, data)
}

function* addComment(action) {
    try {
        // const result = yield call(addCommentAPI, action.data)
        yield delay(1000);
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: action.data
        })
    } catch (err) {
        yield put({
            type: ADD_COMMENT_FAILURE,
            data: err.response.data,
        })
    }
}

function* watchLoadPosts() {
    // 무한스크롤 이벤트 대량발생 방지
    yield throttle(2000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchAddPost),
        fork(watchLoadPosts),
        fork(watchRemovePost),
        fork(watchAddComment),
    ])
}
