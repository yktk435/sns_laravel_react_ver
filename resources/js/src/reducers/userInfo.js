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
        dataGet: false,
        followUsers: [],
        followerUsers: [],
        member: [],
        articles: [],
        goodArticleIds: [],
        commentArticleIds: [],
        photoArticleIds: [],
    },
    // otherUser: {
    //     userName: undefined,
    //     userId: undefined,
    //     iconUrl: undefined,
    //     headerUrl: undefined,
    //     accessToken: undefined,
    //     response: undefined,
    //     error: false
    // },
    inputUserNameByEdit: '',
    display: 'none',
    displayPostPage: 'none',
    commentDisplay: 'none',
    dm: {
        messages: [],
        members: [],
    },

};


export default (state = initialState, action) => {


    switch (action.type) {
        case 'GET_USERINFO':
            return action.payload.error
                ? {
                    ...state,
                    user: {
                        ...state.user,
                        error: true,
                        auth: false,
                        dataGet: false
                    }
                }
                : {
                    ...state,
                    user: {
                        ...state.user,
                        ...action.payload.response,
                        error: false,
                        auth: true,
                        dataGet: true
                    },
                };

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
                        dataGet: true
                    },
                };

        case 'LOGIN_ERROR':
            return {
                ...state,
                user: {
                    ...state.user,
                    errorObj: action.payload.errorObj,
                    error: true,
                    dataGet: true
                }
            }

        case 'LOGIN_ERROR_WEITH_TOKEN':
            return {
                ...state,
                user: {
                    ...state.user,
                    errorObj: action.payload.errorObj,
                    dataGet: true
                }
            }

        case 'LOGOUT':
            return {
                user: {
                    auth: false,
                    dataGet: true
                }
            }
        case 'RECEIVE_MY_FRIENDS_DATA':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error
                }
                : {
                    ...state,
                    user: {
                        ...state.user,
                        followUsers: action.payload.responce.follow,
                        followerUsers: action.payload.responce.follower,
                    }

                }
        case 'FOLLOWING_INFO_UPDATE':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error
                }
                : {
                    ...state,
                    user: {
                        ...state.user,
                        followUsers: action.payload.responce.myFriends.follow,
                        followerUsers: action.payload.responce.myFriends.follower,
                    }

                }
        case 'INPUT_USERNAME_BY_EDIT':
            return {
                ...state,
                inputUserNameByEdit: action.payload.userName
            }
        case 'MENU_TOGGLE':
            return state.display == 'none'
                ? {
                    ...state,
                    display: 'block'
                }
                : {
                    ...state,
                    display: 'none'
                }
        case 'MENU_TOGGLE2':
            return state.displayPostPage == 'none'
                ? {
                    ...state,
                    displayPostPage: 'block'
                }
                : {
                    ...state,
                    displayPostPage: 'none'
                }
        case 'COMMENT_TOGGLE':
            return state.commentDisplay == 'none'
                ? {
                    ...state,
                    commentDisplay: 'block'
                }
                : {
                    ...state,
                    commentDisplay: 'none'
                }
        case 'GOOD_TOGGLE':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error
                }
                : {
                    ...state,
                    user: {
                        ...state.user,
                        goodArticleIds: action.payload.response
                    }

                }
        case 'RECEIVE_POST_DATA':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error,
                }
                : {
                    ...state,
                    user: {
                        ...state.user,
                        ...action.payload.responce
                    }
                }
        case 'GET_DM':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error,
                }
                : {
                    ...state,
                    dm: action.payload.response
                }
        case 'RECEIVE_POST_DM':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error,
                }
                : {
                    ...state,
                    dm: action.payload.response
                }
        case 'PROFILE_CHANGE':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error,
                }
                : {
                    ...state,
                    user: {
                        ...state.user,
                        userName: action.payload.response.name,
                        userId: action.payload.response.user_id,
                        iconUrl: action.payload.response.icon,
                        headerUrl: action.payload.response.header,
                        member: action.payload.response
                    }

                }
        default:
            return state;
    }
}
