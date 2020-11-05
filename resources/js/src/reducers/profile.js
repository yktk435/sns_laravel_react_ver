let filter = {
    WebkitFilter: "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)"
}
// 初期状態
const initialState = {
    userInfo: {
        articles: [],
        member: [],
        commentInfo: []
    },
    style: [filter, {}, {},],
    menuMode: 'post',
    response: undefined,
    error: false,
    followingMode: false,
    followerMode: true,
    followingStyle: [filter, {}],
    followerUsers: [],
    followUsers: [],
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK_MENU_ITEM':
            return {
                ...state,
                style: { ...action.payload.style },
                menuMode: action.payload.menuMode,
            };
        case 'PROF_OR_FOLLOW':
            return {
                ...state,
                followingMode: action.payload.followingMode
            }
        case 'CLICK_MENU_ITEM_IN_FOLLOWING':
            return {
                ...state,
                followingStyle: action.payload.followingStyle,
                followerMode: action.payload.followerMode,
            }
        case 'RECEIVE_FRIENDS_DATA':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error
                }
                : {
                    ...state,
                    followUsers: action.payload.responce.follow,
                    followerUsers: action.payload.responce.follower,
                }
        // case 'FOLLOWING_INFO_UPDATE':
        //     return action.payload.error
        //         ? {
        //             ...state,
        //             error: true,
        //             errorMessage: action.payload.error
        //         }
        //         : {
        //             ...state,
        //             followUsers: action.payload.responce.targetsFriends.follow,
        //             followerUsers: action.payload.responce.targetsFriends.follower,
        //         }
        case 'GET_USERINFO_IN_PROFILE':
            return action.payload.error
                ? {
                    ...state,
                    error: true,
                    errorMessage: action.payload.error,

                }
                : {
                    ...state,
                    userInfo: { ...action.payload.response },
                    followingMode: false
                }
        case 'RECEIVE_POST_DATA':

            if (state.userInfo.member.id == action.payload.responce.member.id) {
                return action.payload.error
                    ? {
                        ...state,
                        error: true,
                        errorMessage: action.payload.error,
                    }
                    : {
                        ...state,
                        userInfo: {
                            ...state.userInfo,
                            ...action.payload.responce
                        }
                    }
            }
        case 'ICON_IMAGE':
            return {
                ...state,
                iconImageUrl: action.payload.imageUrl
            }
        case 'HEADER_IMAGE':
            return {
                ...state,
                headerImageUrl: action.payload.imageUrl
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
                    userInfo: {
                        ...state.userInfo,
                        member:action.payload.response
                    }

                }
        default:
            return state;
    }
}
