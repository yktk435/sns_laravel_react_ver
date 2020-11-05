// src/containers/Ranking.js
import { connect } from 'react-redux';
import Dm from '../components/centerarea/dm/dm'
import * as fetch from '../actions/fetch';



const mapStateToProps = (state, ownProps) => {
  
  return ({
      dm: state.userInfo.dm,
      myMemberId:state.userInfo.user.member.id
      
  })
};

const mapDispatchToProps = dispatch => ({
  getDm() {
    dispatch(fetch.getDm());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Dm);