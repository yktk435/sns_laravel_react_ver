// src/containers/Ranking.js
import { connect } from 'react-redux';
import CreateAccount from '../components/createAccount'
import * as fetch from '../actions/fetch'
import * as login from '../actions/login';



const mapStateToProps = (state, ownProps) => {
    return (
        {
            userName: state.login.userName,
            mail: state.login.mail,
            userId: state.login.userId,
            pass: state.login.pass,
            error:state.login.error
        }
    )
};
const mapDispatchToProps = dispatch => ({
    inputUserName(userName) {
        dispatch(login.inputUserName(userName))
    },
    inputMail(mail) {
        dispatch(login.inputMail(mail))
    },
    inputUserId(userId) {
        dispatch(login.inputUserId(userId))
    },
    inputPass(pass) {
        dispatch(login.inputPass(pass))
    },
    pushCreateAccountButton(data) {
        dispatch(fetch.pushCreateAccountButton(data))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateAccount);