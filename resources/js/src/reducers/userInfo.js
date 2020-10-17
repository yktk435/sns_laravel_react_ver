const initialState = {
    user: {
        userName: undefined,
        userId: undefined,
        iconUrl: undefined,
        headerUrl: undefined,
        accessToken: undefined,
        response: undefined,
        error: false,
        auth: false,
    },
    otherUser: {
        userName: undefined,
        userId: undefined,
        iconUrl: undefined,
        headerUrl: undefined,
        accessToken: undefined,
        response: undefined,
        error: false
    }

};


export default (state = initialState, action) => {


    switch (action.type) {
        case 'GET_USERINFO':
            console.log(action.payload)
            return action.payload.error
                ? {
                    ...state,
                    user: { error: true, auth: false }
                }
                : {
                    // 通信エラーエラーがないなら
                    // API側のキーにの撮ってすべて展開
                    ...state,
                    user: {
                        ...action.payload.response,
                        error: false,
                        auth: true,
                    },
                };
            break;
        case 'GET_OTHER_USERINFO':
            return action.payload.error
                ? {
                    ...state,
                    otherUser: { error: true }
                }
                : {
                    // 通信エラーエラーがないなら
                    // API側のキーにの撮ってすべて展開
                    ...state,
                    otherUser: {
                        ...action.payload.response,
                        error: false,
                    },
                };
            break;
        case 'LOGIN_ERROR':
            return {
                ...state,
                user: {
                    ...state.user,
                    errorObj:action.payload.errorObj,
                    error: true
                }
            }
            break;
        case 'LOGIN_ERROR_EITH_TOKEN':
            return {
                ...state,
                user: {
                    ...state.user,
                    errorObj:action.payload.errorObj,
                    
                }
            }
            break;
        case 'LOGOUT':
            return {
                user: {
                auth:false   
                }
            }
            break;
        default:
            return state;
    }
}
