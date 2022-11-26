// redux-thunk (한번에 dispatch를 여러번 할 수 있게 해준다) 여기선 안씀

import produce from 'immer';

export const initialState = {
    followLoading: false, // 팔로우 시도중
    followDone: false,
    followError: null,
    unfollowLoading: false, // 언팔로우 시도중
    unfollowDone: false,
    unfollowError: null,
    logInLoading: false, // 로그인 시도중
    logInDone: false,
    logInError: null,
    logOutLoading: false, // 로그아웃 시도중
    logOutDone: false,
    logOutError: null,
    signUpLoading: false, // 회원가입 시도중
    signUpDone: false,
    signUpError: null,
    changeNicknameLoading: false, // 닉네임 변경 시도중
    changeNicknameDone: false,
    changeNicknameError: null,
    me: null,
    signUpData: {},
    loginData: {},
};

// 다른 파일에서도 써야하니까 export
export const LOG_IN_REQUEST = 'LOG_IN_REQUEST' as const;
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS' as const;
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE' as const;

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST' as const;
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS' as const;
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE' as const;

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST' as const;
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS' as const;
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE' as const;

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST' as const;
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS' as const;
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE' as const;

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST' as const;
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS' as const;
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE' as const;

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST' as const;
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS' as const;
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE' as const;

// user reducer 상태를 바꿀 수 있는 action
export const ADD_POST_TO_ME = 'ADD_POST_TO_ME' as const;
export const REMOVE_POST_OF_ME = 'REMOVE_POST_OF_ME' as const;

// Sequelize에서 합쳐준다
// 중복되는 더미데이터 함수로 묶음
const dummyUser = (data) => ({
    ...data,
    nickname: 'Violet',
    id: 1,
    Posts: [{ id: 1 }],
    Followings: [{ nickname: 'dummy1' }, { nickname: 'dummy2' }, { nickname: 'dummy333' }],
    Followers: [{ nickname: 'dummy1' }, { nickname: 'dummy2' }, { nickname: 'dummy333' }],
})

export const loginRequestAction = (data) => ({
    type: LOG_IN_REQUEST,
    data,
});

export const logoutRequestAction = () => ({
    type: LOG_OUT_REQUEST,
});

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case FOLLOW_REQUEST:
            draft.followLoading = true;
            draft.followError = null;
            draft.followDone = false;
            break;
        case FOLLOW_SUCCESS:
            draft.followLoading = false;
            draft.me.Followings.push({ id: action.data });
            draft.followDone = true;
            break;
        case FOLLOW_FAILURE:
            draft.followLoading = false;
            draft.followError = action.error;
            break;
        case UNFOLLOW_REQUEST:
            draft.unfollowLoading = true;
            draft.unfollowError = null;
            draft.unfollowDone = false;
            break;
        case UNFOLLOW_SUCCESS:
            draft.unfollowLoading = false;
            draft.me.Followings = draft.me.Followings.filter((v) => v.id !== action.data);
            draft.unfollowDone = true;
            break;
        case UNFOLLOW_FAILURE:
            draft.unfollowLoading = false;
            draft.unfollowError = action.error;
            break;
        case LOG_IN_REQUEST:
            draft.logInLoading = true;
            draft.logInError = null;
            draft.logInDone = false;
            break;
        case LOG_IN_SUCCESS:
            draft.logInLoading = false;
            draft.me = dummyUser(action.data);
            draft.logInDone = true;
            break;
        case LOG_IN_FAILURE:
            draft.logInLoading = false;
            draft.logInError = action.error;
            break;
        case LOG_OUT_REQUEST:
            draft.logOutLoading = true;
            draft.logOutError = null;
            draft.logOutDone = false;
            break;
        case LOG_OUT_SUCCESS:
            draft.logOutLoading = false;
            draft.logOutDone = true;
            draft.me = null;
            break;
        case LOG_OUT_FAILURE:
            draft.logOutLoading = false;
            draft.logOutError = action.error;
            break;
        case SIGN_UP_REQUEST:
            draft.signUpLoading = true;
            draft.signUpError = null;
            draft.signUpDone = false;
            break;
        case SIGN_UP_SUCCESS:
            draft.signUpLoading = false;
            draft.signUpDone = true;
            break;
        case SIGN_UP_FAILURE:
            draft.signUpLoading = false;
            draft.signUpError = action.error;
            break;
        case CHANGE_NICKNAME_REQUEST:
            draft.changeNicknameLoading = true;
            draft.changeNicknameError = null;
            draft.changeNicknameDone = false;
            break;
        case CHANGE_NICKNAME_SUCCESS:
            draft.changeNicknameLoading = false;
            draft.changeNicknameDone = true;
            break;
        case CHANGE_NICKNAME_FAILURE:
            draft.changeNicknameLoading = false;
            draft.changeNicknameError = action.error;
            break;
        case ADD_POST_TO_ME:
            draft.me.Posts.unshift({ id: action.data });
            break;
        // immer 적용 이전
        // return {
        //   ...state,
        //   me: {
        //     ...state.me,
        //     Posts: [{ id: action.data }, ...state.me.Posts],
        //   },
        // };
        case REMOVE_POST_OF_ME:
            draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
            break;
        // return {
        //   ...state,
        //   me: {
        //     ...state.me,
        //     Posts: state.me.Posts.filter((v) => v.id !== action.data),
        //   },
        // };
        default:
            break;
    }
});

export default reducer;