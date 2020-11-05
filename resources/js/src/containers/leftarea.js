// src/containers/Ranking.js
import { connect } from 'react-redux';
import LeftArea from '../components/leftarera';
import * as actions from '../actions/windowSizeChange';
import * as leftarea from '../actions/leftarea';
import * as fetch from '../actions/fetch'

const mapStateToProps = (state, ownProps) => ({
    ...state,
    path:state.router.location.pathname.replace('/',''),
    leftAreaWidth: state.windowSizeChange.leftAreaWidth.leftAreaWidth,
    classNameString: state.windowSizeChange.leftAreaWidth.classNameString,
    displayString: state.windowSizeChange.leftAreaWidth.displayString,
    style: state.leftarea.style,
    userId:state.userInfo.user.userId
});

const mapDispatchToProps = dispatch => ({
  windowSizeChange (width) {
    dispatch(actions.windowSizeChange(width));
    },
    clickMenuItem(e) {
        dispatch(leftarea.clickMenuItem(e))
    },
    logout() {
        dispatch(fetch.logout())
    },
    menuToggle2() {
        dispatch(fetch.menuToggle2())
      },
});

export default connect(mapStateToProps, mapDispatchToProps)(LeftArea);
