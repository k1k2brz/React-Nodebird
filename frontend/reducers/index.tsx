import { HYDRATE } from 'next-redux-wrapper'

import user from './user';
import post from './post';
import { combineReducers } from '@reduxjs/toolkit';

// const initialState = {
//     name: 'taeil',
//     age: 30,
//     password: 'babo'
// }

// // 매번 새로 data를 만들 수 없기 때문에 동적으로 (action creator)
// const changeNickname = (data) => {
//     return {
//         type: 'CHANGE_NICKNAME',
//         data,
//     }
// }
// changeNickname('lee');

// store.dispatch(changeNickname('nene'))


// (이전상태, 액션) => 다음상태
// combineReducers로 user, post 합쳐준다
const rootReducer = combineReducers({
    // hydrate를 넣기 위해 index reducer 추가 (서버사이드 렌더링을 위해서)
    index: (state: Object = {}, action) => {
        switch (action.type) {
            case HYDRATE:
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post,
})

export default rootReducer;