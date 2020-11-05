// src/containers/Ranking.js
import { connect } from 'react-redux';
import Profile from '../components/centerarea/profile/profile'
import * as fetch from '../actions/fetch'
import * as profile from '../actions/profile'
import { withRouter } from 'react-router'
import { goBack } from 'react-router-redux'
const mapStateToProps = (state, ownProps) => {
    return (
        {
            userInfo: state.userInfo,
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
            // loocation受け取り
            location: state.router.location,
            router: state.router,
            followingMode: state.profile.followingMode,
            otherUserId:
                ownProps.match
                    ? ownProps.match.params.userId
                    : null,
            // フォロワー数
            followerLength: state.profile.followerUsers.length,
            // フォロー数
            followLength: state.profile.followUsers.length,
            followUsers: state.profile.followUsers,
            followerUsers: state.profile.followerUsers,
            followingStyle: state.profile.followingStyle,
            // フォロワーかフォロー中のどっちを見ているか
            followerMode: state.profile.followerMode,

            // 記事
            articles: state.profile.userInfo.articles,
            // そのアカウント情報
            member: state.profile.userInfo.member,
            goodArticleIds: state.profile.userInfo.goodArticleIds,
            commentArticleIds: state.profile.userInfo.commentArticleIds,
            photoArticleIds: state.profile.userInfo.photoArticleIds,
        }
    )
};
const mapDispatchToProps = dispatch => ({
    clickMenuItemInFollowing(menuMode) {
        dispatch(profile.clickMenuItemInFollowing(menuMode))
    },
    clickMenuItem(e) {
        dispatch(profile.clickMenuItem(e))
    },
    getArticles(userId) {
        dispatch(fetch.getArticles(userId))
    },
    getFriends(userId) {
        dispatch(fetch.getFriends(userId))
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
    followOr(e, memberId) {
        dispatch(fetch.followOr(e, memberId))
    },
    getUserInfoInPrrofile(userId) {
        dispatch(fetch.getUserInfoInPrrofile(userId))
    },
    goBack() {
        dispatch(goBack())
    },
    menuToggle() {
        dispatch(fetch.menuToggle())
    },
    commentToggle() {
        dispatch(fetch.commentToggle())
    },
    getArticleInfo(articleId) {
        dispatch(fetch.getArticleInfo(articleId))
    }
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Profile));