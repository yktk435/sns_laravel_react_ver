// src/containers/Ranking.js
import { connect } from 'react-redux';
import CenterArea from '../components/centerarea'
import * as fetch from '../actions/fetch'

const mapStateToProps = (state, ownProps) => {
  let pathname = state.router.location.pathname
  let menuname=''
  if ( pathname.match(/home/)) {
    //strにhogeを含む場合の処理
    menuname = "ホーム"
    
  }
  else if ( pathname.match(/notification/)) {
    //strにhogeを含む場合の処理
    menuname = "通知"
    
  }
  else if ( pathname.match(/dm/)) {
    //strにhogeを含む場合の処理
    menuname = "メッセージ"
    
  }
  else if ( pathname.match(/profile/) || pathname.match(/following/)) {
    //strにhogeを含む場合の処理
    menuname = "プロフィール"
    
  }
  else if ( pathname.match(/setting/)) {
    //strにhogeを含む場合の処理
    menuname = "設定"
    
  }
  
  return ({
    myUserId: state.userInfo.user.userId,
    menuName: menuname,
    routing:ownProps.location
  })
};

const mapDispatchToProps = dispatch => ({
  
  getArticles(userId) {
    dispatch(fetch.getArticles(userId))
  },
  getMyFriends(userId) {
    dispatch(fetch.getMyFriends(userId))
},
})

export default connect(mapStateToProps,mapDispatchToProps)(CenterArea);
