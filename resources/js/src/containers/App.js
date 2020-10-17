// src/containers/Ranking.js
import { connect } from 'react-redux';
import App from '../App';
import * as fetches from '../actions/fetch';



const mapStateToProps = (state, ownProps) => ({
  ...state,
  
});

const mapDispatchToProps = dispatch => {
  return ({
    getUserInfo () {
    dispatch(fetches.getUserInfo());
    },
    startLoginWithToken (token) {
      dispatch(fetches.startLoginWithToken(token));
    },
})};

export default connect(mapStateToProps, mapDispatchToProps)(App);
