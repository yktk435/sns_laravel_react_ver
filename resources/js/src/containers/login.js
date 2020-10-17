// src/containers/Ranking.js
import { connect } from 'react-redux';
import Login from '../components/login';
import * as actions from '../actions/login';
import * as fetch from '../actions/fetch';

const mapStateToProps = (state, ownProps) => ({
    userId: state.login.userId,
    pass: state.login.pass,
    error:state.userInfo.user.error
});

const mapDispatchToProps = dispatch => ({
    inputUserName(userId) {
        dispatch(actions.inputUserName(userId))
    },
    inputPass(pass) {
        dispatch(actions.inputPass(pass))
    },
    startLogin(ipassData) {
        dispatch(fetch.startLogin(ipassData))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
