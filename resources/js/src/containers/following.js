// src/containers/Ranking.js
import { connect } from 'react-redux';
import Following from '../components/centerarea/profile/following'
import * as fetch from '../actions/fetch'
import * as profile from '../actions/profile'

const mapStateToProps = (state, ownProps) => {
    return (
        {
            userName: state.userInfo.user.userName,
            userId: state.userInfo.user.userId,
            iconUrl: state.userInfo.user.iconUrl,
            headerUrl: state.userInfo.user.headerUrl,
            accessToken: state.userInfo.user.accessToken,
            style: state.profile.style,
            // フォロワーかフォロー中のどっちを見ているか
            followerMode: state.profile.followerMode,
            // 
            followingStyle: state.profile.followingStyle,
            followUsers:state.profile.followUsers,
            followerUsers:state.profile.followerUsers,
            
        }
    )
};
const mapDispatchToProps = dispatch => ({
    clickMenuItemInFollowing(menuMode) {
        dispatch(profile.clickMenuItemInFollowing(menuMode))
    },
    getArticles(token) {
        dispatch(fetch.getArticles(token))
    },
    profileOrFollowing(menuMode) {
        dispatch(profile.profileOrFollowing(menuMode))
    },
    getFriends() {
        dispatch(fetch.getFriends())
    },
    followOr(e,memberId) {
        dispatch(fetch.followOr(e,memberId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Following);