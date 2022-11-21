type mainPost = {
    mainPosts: object[],
    imagePaths: object[],
    postAdded: boolean,
}

export const initialState: mainPost = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'TaeIl'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 개정판이 나왔군요~',
        }, {
            User: {
                nickname: 'hero',
            },
            content: '얼른 사고싶어요~',
        }]
    }],
    imagePaths: [],
    postAdded: false,
}
// 변수로 지정해주면 편하다
// as const를 지정하면 타입이 아니라 실제 값을 가리키게 됨
const ADD_POST = 'ADD_POST' as const;
export const addPost = {
    type: ADD_POST,
}
const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: 'Tae-',
    },
    Images: [],
    Comments: [],
};

const reducer = (state: mainPost = initialState, action: any) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                // 앞에서 dummyPost추가해야 맨 위
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
}

export default reducer;