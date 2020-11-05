// src/containers/Ranking.js
import { connect } from 'react-redux';
import MyProfile from '../components/centerarea/profile/MyProfile';
import * as actions from '../actions/login';
import * as fetch from '../actions/fetch';
import { withRouter } from 'react-router' 
import * as profile from '../actions/profile'


const mapStateToProps = (state, ownProps) => ({
    userName: state.userInfo.user.userName,
    userId: state.userInfo.user.userId,
    iconUrl: state.userInfo.user.iconUrl,
    headerUrl: state.userInfo.user.headerUrl,
    accessToken: state.userInfo.user.accessToken,
    style: state.profile.style,
    // 投稿、返信、写真、グッドのどれを見ているか
    menuMode: state.profile.menuMode,
    // 投稿
    articles: state.articles.user,
    // 返信
    // 写真
    picObj: state.profile.picObj,
    // ぐっと
    goodObj: state.profile.goodObj,
    location: ownProps.location,
    followingMode: state.profile.followingMode,
    // フォロワー数
    followerLength:state.profile.followerUsers.length,
    // フォロー数
    followLength:state.profile.followUsers.length

});

const mapDispatchToProps = dispatch => ({
    inputUserId(userId) {
        dispatch(actions.inputUserId(userId))
    },
    inputPass(pass) {
        dispatch(actions.inputPass(pass))
    },
    startLogin(ipassData) {
        dispatch(fetch.startLogin(ipassData))
    },
    clickMenuItem(menuMode) {
        dispatch(profile.clickMenuItem(menuMode))
    },
    profileOrFollowing(menuMode) {
        dispatch(profile.profileOrFollowing(menuMode))
    },
    
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyProfile));