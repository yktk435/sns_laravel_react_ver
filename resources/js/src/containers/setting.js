// src/containers/Ranking.js
import { connect } from 'react-redux';
import Setting from '../components/centerarea/setting/setting'
import * as actions from '../actions/fetch'
import * as setting from '../actions/setting'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      userName: state.userInfo.user.userName,
      userId: state.userInfo.user.userId,
      iconUrl: state.userInfo.user.iconUrl,
      headerUrl: state.userInfo.user.headerUrl,
      accessToken: state.userInfo.user.accessToken,
      style: state.setting.style,
      menuMode:state.setting.menuMode,
      error: false,
    }
  )
};
const mapDispatchToProps = dispatch => ({
  clickMenuItem(e) {
      dispatch(setting.clickMenuItem(e))
  },
})
export default connect(mapStateToProps, mapDispatchToProps)(Setting);