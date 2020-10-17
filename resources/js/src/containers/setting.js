// src/containers/Ranking.js
import { connect } from 'react-redux';
import Setting from '../components/centerarea/setting/setting'
import * as actions from '../actions/fetch'
import * as home from '../actions/home'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      userName: state.userInfo.user.userName,
      userId: state.userInfo.user.userId,
      iconUrl: state.userInfo.user.iconUrl,
      headerUrl: state.userInfo.user.headerUrl,
      accessToken: state.userInfo.user.accessToken,
      error: false,
    }
  )
};

export default connect(mapStateToProps)(Setting);