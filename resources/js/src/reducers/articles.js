// 初期状態
const initialState = {
    user: [{
        articleId: undefined,
        memberId: undefined,
        content: undefined,
    }],
    otherUser: [{
        articleId: undefined,
        memberId: undefined,
        content: undefined,
    }]

};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'RECEIVE_POST_DATA':
            return action.payload.error
                ? {
                    ...state,
                    errorMessage: action.payload.error,
                    error: true
                }
                : {
                    ...state,
                    user: state.user.concat({
                        ...action.payload.responce
                    }),
                    error: false,
                }
                ;
            break;
        case 'RECEIVE_ARTICLES':
            return action.payload.error
            ? {
                ...state,
                errorMessage: action.payload.error,
                error: true
            }
            : {
                ...state,
                user: state.user.concat(
                    action.payload.responce
                ),
                error: false,
            }
            break;
        case 'LOGOUT':
            return {
                 ...initialState
            }
            break
        default:
            return state;
    }
}
