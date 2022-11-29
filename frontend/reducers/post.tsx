import produce from 'immer';
// import shortId from 'shortid';
// import { faker } from '@faker-js/faker';

export type mainPost = {
    mainPosts: any,
    imagePaths: object[],
    likePostLoading: boolean,
    likePostDone: boolean,
    likePostError: boolean,
    unlikePostLoading: boolean,
    unlikePostDone: boolean,
    unlikePostError: boolean,
    addPostLoading: boolean,
    addPostDone: boolean,
    addPostError: boolean,
    addCommentLoading: boolean,
    addCommentDone: boolean,
    addCommentError: boolean,
    hasMorePosts: boolean,
    loadPostsLoading: boolean,
    loadPostsDone: boolean,
    loadPostsError: boolean,
    removePostLoading: boolean,
    removePostDone: boolean,
    removePostError: boolean,
    uploadImagesLoading: boolean,
    uploadImagesDone: boolean,
    uploadImagesError: boolean,
    retweetLoading: boolean,
    retweetDone: boolean,
    retweetError: boolean,
}

export const initialState: mainPost = {
    //     {
    //     id: 1,
    //     User: {
    //         id: 1,
    //         nickname: 'TaeIl'
    //     },
    //     content: '첫 번째 게시글 #해시태그 #익스프레스',
    //     Images: [{
    //         id: shortId.generate(),
    //         src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
    //     }, {
    //         id: shortId.generate(),
    //         src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
    //     }, {
    //         id: shortId.generate(),
    //         src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
    //     }],
    //     // 대문자는 서버에서 주는 애들
    //     Comments: [{
    //         id: shortId.generate(),
    //         User: {
    //             id: shortId.generate(),
    //             nickname: 'nero',
    //         },
    //         content: '우와 개정판이 나왔군요~',
    //     }, {
    //         id: shortId.generate(),
    //         User: {
    //             id: shortId.generate(),
    //             nickname: 'hero',
    //         },
    //         content: '얼른 사고싶어요~',
    //     }]
    // }
    mainPosts: [],
    imagePaths: [],
    hasMorePosts: true, // infinite scroll
    likePostLoading: false,
    likePostDone: false,
    likePostError: null,
    unlikePostLoading: false,
    unlikePostDone: false,
    unlikePostError: null,
    loadPostsLoading: false,
    loadPostsDone: false,
    loadPostsError: null,
    addPostLoading: false,
    addPostDone: false,
    addPostError: null,
    removePostLoading: false,
    removePostDone: false,
    removePostError: null,
    addCommentLoading: false,
    addCommentDone: false,
    addCommentError: null,
    uploadImagesLoading: false,
    uploadImagesDone: false,
    uploadImagesError: null,
    retweetLoading: false,
    retweetDone: false,
    retweetError: null,
}

// infinite scrolling
// export const generateDummyPost = (number) => Array(number).fill(undefined).map(() => ({
//     id: shortId.generate(),
//     User: {
//         id: shortId.generate(),
//         nickname: faker.internet.userName(),
//     },
//     content: faker.lorem.paragraph(),
//     Images: [{
//         src: faker.image.image(),
//     }],
//     Comments: [{
//         User: {
//             id: shortId.generate(),
//             nickname: faker.internet.userName(),
//         },
//         content: faker.lorem.sentence(),
//     }],
// }));


// 변수로 지정해주면 편하다
// as const를 지정하면 타입이 아니라 실제 값을 가리키게 됨

// 화면 로딩하면
export const UPLOAD_IMAGES_REQUEST = 'UPLOAD_IMAGES_REQUEST' as const;
export const UPLOAD_IMAGES_SUCCESS = 'UPLOAD_IMAGES_SUCCESS' as const;
export const UPLOAD_IMAGES_FAILURE = 'UPLOAD_IMAGES_FAILURE' as const;

export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST' as const;
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS' as const;
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE' as const;

export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST' as const;
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS' as const;
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE' as const;

export const LOAD_POSTS_REQUEST = 'LOAD_POSTS_REQUEST' as const;
export const LOAD_POSTS_SUCCESS = 'LOAD_POSTS_SUCCESS' as const;
export const LOAD_POSTS_FAILURE = 'LOAD_POSTS_FAILURE' as const;

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST' as const;
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS' as const;
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE' as const;

export const REMOVE_POST_REQUEST = 'REMOVE_POST_REQUEST' as const;
export const REMOVE_POST_SUCCESS = 'REMOVE_POST_SUCCESS' as const;
export const REMOVE_POST_FAILURE = 'REMOVE_POST_FAILURE' as const;

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST' as const;
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS' as const;
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE' as const;

export const RETWEET_REQUEST = 'RETWEET_REQUEST' as const;
export const RETWEET_SUCCESS = 'RETWEET_SUCCESS' as const;
export const RETWEET_FAILURE = 'RETWEET_FAILURE' as const;

// 동기 액션은 하나만 만들면 된다
export const REMOVE_IMAGE = 'REMOVE_IMAGE' as const;

export const addPost = (data) => ({
    type: ADD_POST_REQUEST,
    data,
})

// 동적 액션 크리에이터
export const addComment = (data) => ({
    type: ADD_COMMENT_REQUEST,
    data,
})

// const dummyPost = (data) => ({
//     // shortId를 넣으면 더미데이터 Encountered two children with the same key에러는 해결이 되지만
//     // Failed prop type에러가 뜬다. 나중에 실제 데이터 넣어서 해결해야 할 듯
//     id: data.id,
//     // 게시글
//     content: data.content,
//     User: {
//         id: 1,
//         nickname: 'Violet',
//     },
//     Images: [],
//     Comments: [],
// });

// const dummyComment = (data) => ({ // 더미 코멘트
//     id: shortId.generate(),
//     content: data,
//     User: {
//         id: 1,
//         nickname: 'Violet',
//     },
// });

// 이전 상태를 액션을 통해 다음 상태로 만들어내는 함수(불변성은 지키면서)
const reducer = (state: mainPost = initialState, action: any) => {
    // 불변성을 지키면서 코드 작성하는게 어려우니까 도와주는 라이브러리 immer
    // immer 사용
    return produce(state, (draft) => {
        switch (action.type) {
            case RETWEET_REQUEST:
                draft.retweetLoading = true;
                draft.retweetDone = false;
                draft.retweetError = null;
                break;
            case RETWEET_SUCCESS:
                draft.retweetLoading = false;
                draft.retweetDone = true;
                break;
            case RETWEET_FAILURE:
                draft.retweetLoading = false;
                draft.retweetError = action.error;
                break;
            default:
                break;
            // 서버에서 이미지를 지우고 싶으면 비동기로 만들어줘야 한다.
            // 서버에서 이미지를 안지우는 이유는 머신러닝 등을 위해 데이터 수집을 할 수도 있어서
            case REMOVE_IMAGE:
                draft.imagePaths = draft.imagePaths.filter((v, i) => i !== action.data)
                break;
            case UPLOAD_IMAGES_REQUEST:
                draft.uploadImagesLoading = true;
                draft.uploadImagesDone = false;
                draft.uploadImagesError = null;
                break;
            case UPLOAD_IMAGES_SUCCESS: {
                // 데이터들 여기 저장
                draft.imagePaths = action.data;
                draft.uploadImagesLoading = false;
                draft.uploadImagesDone = true;
                break;
            }
            case UPLOAD_IMAGES_FAILURE:
                draft.uploadImagesLoading = false;
                draft.uploadImagesError = action.error;
                break;
            case LIKE_POST_REQUEST:
                draft.likePostLoading = true;
                draft.likePostDone = false;
                draft.likePostError = null;
                break;
            case LIKE_POST_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Likers.push({ id: action.data.UserId });
                draft.likePostLoading = false;
                draft.likePostDone = true;
                break;
            }
            case LIKE_POST_FAILURE:
                draft.likePostLoading = false;
                draft.likePostError = action.error;
                break;
            case UNLIKE_POST_REQUEST:
                draft.unlikePostLoading = true;
                draft.unlikePostDone = false;
                draft.unlikePostError = null;
                break;
            case UNLIKE_POST_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Likers = post.Likers.filter((v) => v.id !== action.data.UserId);
                draft.unlikePostLoading = false;
                draft.unlikePostDone = true;
                break;
            }
            case UNLIKE_POST_FAILURE:
                draft.unlikePostLoading = false;
                draft.unlikePostError = action.error;
                break;
            case LOAD_POSTS_REQUEST:
                draft.loadPostsLoading = true;
                draft.loadPostsDone = false;
                draft.loadPostsError = null;
                break;
            case LOAD_POSTS_SUCCESS:
                draft.loadPostsLoading = false;
                draft.loadPostsDone = true;
                // 로딩이 밑에 무한로딩이 추가되어야 하니까 action.data를 뒤에 추가
                draft.mainPosts = draft.mainPosts.concat(action.data);
                draft.hasMorePosts = action.data.length === 10;
                break;
            case LOAD_POSTS_FAILURE:
                draft.loadPostsLoading = false;
                draft.loadPostsError = action.error;
                break;
            case ADD_POST_REQUEST:
                draft.addPostLoading = true;
                draft.addPostDone = false;
                draft.addPostError = null;
                break;
            case ADD_POST_SUCCESS:
                draft.addPostLoading = false;
                draft.addPostDone = true;
                draft.mainPosts.unshift(action.data);
                draft.imagePaths = [];
                break;
            // return {
            //     ...state,
            // 맨 앞에 dummyPost추가해야 맨 위에 게시글 올라간다.
            // sagas의 post에서 넘어온 게시글 action.data
            // mainPosts: [dummyPost(action.data), ...state.mainPosts],
            //     addPostLoading: true,
            //     addPostDone: true,
            // }
            case ADD_POST_FAILURE:
                draft.addPostLoading = false;
                draft.addPostError = action.error;
                break;
            case REMOVE_POST_REQUEST:
                draft.removePostLoading = true;
                draft.removePostDone = false;
                draft.removePostError = null;
                break;
            case REMOVE_POST_SUCCESS:
                draft.removePostLoading = false;
                draft.removePostDone = true;
                // 앞에서 dummyPost추가해야 맨 위
                // sagas의 post에서 넘어온 게시글 action.data
                draft.mainPosts = draft.mainPosts.filter((v) => v.id !== action.data.PostId);
                break;
            case REMOVE_POST_FAILURE:
                draft.removePostLoading = false;
                draft.removePostError = action.error;
                break;
            case ADD_COMMENT_REQUEST:
                draft.addCommentLoading = true;
                draft.addCommentDone = false;
                draft.addCommentError = null;
                break;
            case ADD_COMMENT_SUCCESS: {
                const post = draft.mainPosts.find((v) => v.id === action.data.PostId);
                post.Comments.unshift(action.data);
                draft.addCommentLoading = false;
                draft.addCommentDone = true;
                break;
                // action.data.content, postId, userId가 action.data에 들어있는 상태
                // 불변성을 지키는 코드 (immer 라이브러리 사용하면 더 간단하게 가능)
                // const postIndex = state.mainPosts.findIndex((v) => v.id === action.data.postId);
                // const post = { ...state.mainPosts[postIndex] };
                // post.Comments = [dummyComment(action.data.content), ...post.Comments]
                // const mainPosts = [...state.mainPosts];
                // mainPosts[postIndex] = post;
                // return {
                //     ...state,
                //     // 앞에서 dummyPost추가해야 맨 위
                //     mainPosts: [dummyPost, ...state.mainPosts],
                //     addCommentLoading: true,
                //     addCommentDone: true,
                // }
            }
            case ADD_COMMENT_FAILURE:
                draft.addCommentLoading = false;
                draft.addCommentError = action.error;
                break;
        }
    });
}

export default reducer;