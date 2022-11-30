import { all, fork, put, takeLatest, throttle, call } from 'redux-saga/effects';
// import shortId from 'shortid';
import axios from 'axios';
import {
    ADD_COMMENT_FAILURE, ADD_COMMENT_REQUEST, ADD_COMMENT_SUCCESS,
    ADD_POST_FAILURE, ADD_POST_REQUEST, ADD_POST_SUCCESS,
    LIKE_POST_FAILURE, LIKE_POST_REQUEST, LIKE_POST_SUCCESS,
    LOAD_HASHTAG_POSTS_FAILURE, LOAD_HASHTAG_POSTS_REQUEST, LOAD_HASHTAG_POSTS_SUCCESS,
    LOAD_POSTS_FAILURE, LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS,
    LOAD_POST_FAILURE, LOAD_POST_REQUEST, LOAD_POST_SUCCESS,
    LOAD_USER_POSTS_FAILURE, LOAD_USER_POSTS_REQUEST, LOAD_USER_POSTS_SUCCESS,
    REMOVE_POST_FAILURE, REMOVE_POST_REQUEST, REMOVE_POST_SUCCESS,
    RETWEET_FAILURE, RETWEET_REQUEST, RETWEET_SUCCESS,
    UNLIKE_POST_FAILURE, UNLIKE_POST_REQUEST, UNLIKE_POST_SUCCESS,
    UPLOAD_IMAGES_FAILURE, UPLOAD_IMAGES_REQUEST, UPLOAD_IMAGES_SUCCESS,
} from '../reducers/post';
import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from '../reducers/user';

function retweetAPI(data) {
    // formData는 { data }이런식으로 감싸버리면 json이 되니까 {}적지 말 것
    return axios.post(`/post/${data}/retweet`);
}

function* retweet(action) {
    try {
        const result = yield call(retweetAPI, action.data);
        yield put({
            type: RETWEET_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: RETWEET_FAILURE,
            error: err.response.data,
        });
    }
}

function uploadImagesAPI(data) {
    // formData는 { data }이런식으로 감싸버리면 json이 되니까 {}적지 말 것
    return axios.post('/post/images', data);
}

function* uploadImages(action) {
    try {
        const result = yield call(uploadImagesAPI, action.data);
        yield put({
            type: UPLOAD_IMAGES_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UPLOAD_IMAGES_FAILURE,
            error: err.response.data,
        });
    }
}

function likePostAPI(data) {
    // data가 ${}안에 들어가기 때문에 굳이 안넣어도 됨
    return axios.patch(`/post/${data}/like`);
}

function* likePost(action) {
    try {
        const result = yield call(likePostAPI, action.data);
        yield put({
            type: LIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LIKE_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function unlikePostAPI(data) {
    return axios.delete(`/post/${data}/like`);
}

function* unlikePost(action) {
    try {
        const result = yield call(unlikePostAPI, action.data);
        yield put({
            type: UNLIKE_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: UNLIKE_POST_FAILURE,
            error: err.response.data,
        });
    }
}

function loadPostAPI(data) {
    return axios.get(`/post/${data}`);
}

function* loadPost(action) {
    try {
        const result = yield call(loadPostAPI, action.data);
        yield put({
            type: LOAD_POST_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POST_FAILURE,
            data: err.response.data,
        });
    }
}

function loadHashtagPostsAPI(data, lastId) {
    // encodeURIComponent - 주소창에 한글 들어가서 에러나는거 방지
    // 나중에 decodeURIComponent 하면 원래대로 돌아온다.
    console.log(data, lastId)
    return axios.get(`/hashtag/${encodeURIComponent(data)}?lastId=${lastId || 0}`);
}

function* loadHashtagPosts(action) {
    try {
        const result = yield call(loadHashtagPostsAPI, action.data, action.lastId);
        yield put({
            type: LOAD_HASHTAG_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_HASHTAG_POSTS_FAILURE,
            data: err.response.data,
        });
    }
}

function loadUserPostsAPI(data, lastId) {
    return axios.get(`/user/${data}/posts?lastId=${lastId || 0}`)
}

function* loadUserPosts(action) {
    try {
        const result = yield call(loadUserPostsAPI, action.data, action.lastId)
        yield put({
            type: LOAD_USER_POSTS_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_USER_POSTS_FAILURE,
            error: err.response.data,
        })
    }
}

function loadPostsAPI(lastId) {
    // get의 두번째 자리는 withcredentials
    // GET 쿼리 스트링으로 주소에 데이터 포함시키는 방법 (주소 캐싱)
    // 주소창 쿼리 스트링이 없으면 0
    return axios.get(`/posts?lastId=${lastId || 0}`)
}

function* loadPosts(action) {
    try {
        const result = yield call(loadPostsAPI, action.lastId)
        // yield delay(1000);
        // const id = shortId.generate();
        yield put({
            type: LOAD_POSTS_SUCCESS,
            data: result.data,
            // data: generateDummyPost(10), // reducer에서 만든 함수
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOAD_POSTS_FAILURE,
            error: err.response.data,
        })
    }
}

function addPostAPI(data) {
    // 2번째 자리에 req.body.content로 받을 수 있도록 { content: data }처럼 이름을 붙여줄 수 있다.
    return axios.post('/post', data)
}

function* addPost(action) {
    try {
        const result = yield call(addPostAPI, action.data)
        yield put({
            type: ADD_POST_SUCCESS,
            data: result.data,
            // action.data에 작성한 글이 들어있음 (더미데이터)
            // data: {
            //     id,
            //     content: action.data,
            // }
        });
        yield put({
            type: ADD_POST_TO_ME,
            data: result.data.id,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function removePostAPI(data) {
    // delete는 2번째 자리에 data 못 넣는다
    return axios.delete(`/post/${data}`);
}

function* removePost(action) {
    try {
        const result = yield call(removePostAPI, action.data)
        // POST reducer 상태랑 user reducer상태랑 동시에 바꿀 수 없기 때문에 action이 2개가 나온다.
        yield put({
            type: REMOVE_POST_SUCCESS,
            // action.data에 작성한 글이 들어있음
            data: result.data,
        });
        yield put({
            type: REMOVE_POST_OF_ME,
            data: action.data,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type: REMOVE_POST_FAILURE,
            error: err.response.data,
        })
    }
}

function addCommentAPI(data) {
    /** 쿠키를 같이 전달 해준다 (도메인이 다르면 쿠키도 전달이 안되니까 backend의 cors와 여기)
     withCredentials: true로 쿠키전달 허용
     */
    return axios.post(`/post/${data.postId}/comment`, data) // POST /post/1/comment
}

function* addComment(action) {
    try {
        const result = yield call(addCommentAPI, action.data)
        yield put({
            type: ADD_COMMENT_SUCCESS,
            data: result.data
        })
    } catch (err) {
        console.error(err);
        yield put({
            type: ADD_COMMENT_FAILURE,
            error: err.response.data,
        })
    }
}


function* watchRetweet() {
    yield takeLatest(RETWEET_REQUEST, retweet);
}

function* watchUploadImages() {
    yield takeLatest(UPLOAD_IMAGES_REQUEST, uploadImages);
}

function* watchLikePost() {
    yield takeLatest(LIKE_POST_REQUEST, likePost);
}

function* watchUnlikePost() {
    yield takeLatest(UNLIKE_POST_REQUEST, unlikePost);
}

function* watchLoadPost() {
    yield takeLatest(LOAD_POST_REQUEST, loadPost);
}

function* watchLoadHashtagPosts() {
    yield throttle(3000, LOAD_HASHTAG_POSTS_REQUEST, loadHashtagPosts);
}

function* watchLoadUserPosts() {
    yield throttle(3000, LOAD_USER_POSTS_REQUEST, loadUserPosts);
}

function* watchLoadPosts() {
    // 무한 스크롤 이벤 대량 발생 방지
    yield throttle(3000, LOAD_POSTS_REQUEST, loadPosts);
}

function* watchAddPost() {
    yield takeLatest(ADD_POST_REQUEST, addPost);
}

// function* watchUpdatePost() {
//     yield takeLatest(UPDATE_POST_REQUEST, updatePost);
//   }

function* watchRemovePost() {
    yield takeLatest(REMOVE_POST_REQUEST, removePost);
}

function* watchAddComment() {
    yield takeLatest(ADD_COMMENT_REQUEST, addComment);
}

export default function* postSaga() {
    yield all([
        fork(watchRetweet),
        fork(watchUploadImages),
        fork(watchLikePost),
        fork(watchUnlikePost),
        fork(watchAddPost),
        fork(watchLoadPost),
        fork(watchLoadUserPosts),
        fork(watchLoadHashtagPosts),
        fork(watchLoadPosts),
        // fork(watchUpdatePost),
        fork(watchRemovePost),
        fork(watchAddComment),
    ]);
}
