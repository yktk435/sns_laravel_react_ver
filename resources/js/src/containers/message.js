// src/containers/Ranking.js
import { connect } from 'react-redux';
import MessageArea from '../components/rightarea/message'
import * as actions from '../actions/windowSizeChange';
import * as home from '../actions/home'
import * as fetch from '../actions/fetch'


const mapStateToProps = (state, ownProps) => {

    return ({
        display: state.windowSizeChange.rightAreaWidth.display,
        messages: state.userInfo.dm.messages,
        members: state.userInfo.dm.members,
        myUserId: state.userInfo.user.userId,
        imageUrl: state.home.imageUrl,
        text:state.home.text

    })
};

const mapDispatchToProps = dispatch => ({
    imageChoce(imageUrl) {
        dispatch(home.imageChoce(imageUrl))
    },
    imageClear() {
        dispatch(home.imageClear())
    },
    inputPostText(text) {
        dispatch(home.inputPostText(text))
    },
    postDm(data) {
        dispatch(fetch.postDm(data))
    },
    clearTextBox() {
        dispatch(home.clearTextBox())
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(MessageArea);