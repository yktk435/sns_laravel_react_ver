// src/containers/Ranking.js
import { connect } from 'react-redux';
import App from '../App';
import * as fetch from '../actions/fetch';
import * as home from '../actions/home'
import * as profile from '../actions/profile'


const mapStateToProps = (state, ownProps) => ({
  ...state,


});

const mapDispatchToProps = dispatch => {
  return ({
    // getUserInfo () {
    // dispatch(fetch.getUserInfo());
    // },
    startLoginWithToken(token) {
      dispatch(fetch.startLoginWithToken(token));
    },
    saveChanges(data) {
      dispatch(fetch.saveChanges(data))
    },
    inputUserName(userName) {
      dispatch(fetch.inputUserName(userName))
    },
    menuToggle() {
      dispatch(fetch.menuToggle())
    },
    menuToggle2() {
      dispatch(fetch.menuToggle2())
    },
    commentToggle() {
      dispatch(fetch.commentToggle())
    },
    inputPostText(text) {
      dispatch(home.inputPostText(text))
    },
    clearTextBox() {
      dispatch(home.clearTextBox())
    },
    post(requestData, token) {
      dispatch(fetch.post(requestData, token));
    },
    imageChoce(imageUrl) {
      dispatch(home.imageChoce(imageUrl))
    },
    imageClear() {
      dispatch(home.imageClear())
    },
    getArticleInfo(articleId) {
      dispatch(fetch.getArticleInfo(articleId))
    },
    postRep(repArticleId, content) {
      dispatch(fetch.postRep(repArticleId, content))
    },
    iconImage(imageUrl) {
      dispatch(profile.iconImage(imageUrl))
    },
    headerImage(imageUrl) {
      dispatch(profile.headerImage(imageUrl))
    },
    profileChange(data) {
      dispatch(fetch.profileChange(data))
    },
    
  })
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
