// src/containers/Ranking.js
import { connect } from 'react-redux';
import CenterArea from '../components/centerarea'


const mapStateToProps = (state, ownProps) => {
  let pathname = state.router.location.pathname.replace('/', '')
  let menuname=''
  switch (pathname) {
    case 'home':
      menuname = "ホーム"
      break;
    case 'notification':
      menuname = "通知"
      break;
    case 'dm':
      menuname = "メッセージ"
      break;
    case 'profile':
      menuname = "プロフィール"
      break;
    case 'setting':
      menuname = "設定"
      break;

  }
  return ({
    menuName: menuname
  })
};


export default connect(mapStateToProps)(CenterArea);
