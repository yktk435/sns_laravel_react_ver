// src/containers/Ranking.js
import { connect } from 'react-redux';
import Home from '../components/centerarea/home/home'
import * as home from '../actions/home'
import * as fetch from '../actions/fetch'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      userName: state.userInfo.user.userName,
      userId: state.userInfo.user.userId,
      iconUrl: state.userInfo.user.iconUrl,
      headerUrl: state.userInfo.user.headerUrl,
      accessToken: state.userInfo.user.accessToken,
      error: false,
      requestData: {
        text: state.home.text,
        imageFile:state.home.imageFile,
      },
      text: state.home.text,

      imageUrl: state.home.imageUrl,
      timeLineInfo: state.home.timeLineInfo,
      dataGet: state.userInfo.user.dataGet,
    }
  )
};
const mapDispatchToProps = dispatch => ({

  post(requestData,token) {
    dispatch(fetch.post(requestData,token));
  },
  inputPostText(text) {
    dispatch(home.inputPostText(text))
  },
  clearTextBox() {
    dispatch(home.clearTextBox())
  },
  imageChoce(imageUrl) {
    dispatch(home.imageChoce(imageUrl))
  },
  imageClear() {
    dispatch(home.imageClear())
  },
  getTimeLine() {
    dispatch(fetch.getTimeLine())
  },
  commentToggle() {
    dispatch(fetch.commentToggle())
  },
  repInfo(articleId) {
    dispatch(fetch.repInfo(articleId))
  },
  getArticleInfo(articleId) {
    dispatch(fetch.getArticleInfo(articleId))
  },
  
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
