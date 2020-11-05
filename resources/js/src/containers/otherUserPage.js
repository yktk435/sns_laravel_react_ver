// src/containers/Ranking.js
import { connect } from 'react-redux';
import OtherUserPage from '../components/centerarea/profile/otherUserPage'
import * as fetch from '../actions/fetch'
import * as profile from '../actions/profile'

const mapStateToProps = (state, ownProps) => {
    return (
        {
            userName: state.userInfo.otherUser.userName,
            userId: state.userInfo.otherUser.userId,
            iconUrl: state.userInfo.otherUser.iconUrl,
            headerUrl: state.userInfo.otherUser.headerUrl,
            accessToken: state.userInfo.otherUser.accessToken,
            style: state.profile.style,
            // 投稿、返信、写真、グッドのどれを見ているか
            menuMode: state.profile.menuMode,
            // 投稿
            postObj: state.userInfo.otherUser.postObj,
            // 返信
            // 写真
            picObj: state.profile.picObj,
            // ぐっと
            goodObj: state.profile.goodObj,
        }
    )
};
const mapDispatchToProps = dispatch => ({
    clickMenuItem(e) {
        dispatch(profile.clickMenuItem(e))
    },
    getArticles(userId) {
        dispatch(fetch.getArticles(userId))
    },
    getFriends(userId) {
        dispatch(fetch.getFriends(userId))
    },
    getOtherUserInfo(userId) {
        dispatch(fetch.getOtherUserInfo(userId))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(OtherUserPage);