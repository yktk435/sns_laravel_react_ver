// src/containers/Ranking.js
import { connect } from 'react-redux';
import RightArea from '../components/rightarea'
import * as actions from '../actions/windowSizeChange';


const mapStateToProps = (state, ownProps) => {
  let pathname = state.router.location.pathname.replace('/', '')
  return ({
    menuName: pathname,
    rightAreaWidth: state.windowSizeChange.rightAreaWidth.rightAreaWidth,
    display: state.windowSizeChange.rightAreaWidth.display,
    setting: {menuMode:state.setting.menuMode}
  })
};

const mapDispatchToProps = dispatch => ({
  windowSizeChange (width) {
    dispatch(actions.windowSizeChange(width));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RightArea);
