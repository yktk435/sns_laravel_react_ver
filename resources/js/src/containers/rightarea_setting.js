// src/containers/Ranking.js
import { connect } from 'react-redux';
import {RightAreaSetting} from '../components/rightarea/setting'
import * as actions from '../actions/windowSizeChange';



const mapStateToProps = (state, ownProps) => {
  
  return ({
    menuMode:state.setting.menuMode,
    rightAreaWidth: state.windowSizeChange.rightAreaWidth.rightAreaWidth,
    display: state.windowSizeChange.rightAreaWidth.display,
    
  })
};

const mapDispatchToProps = dispatch => ({
  windowSizeChange (width) {
    dispatch(actions.windowSizeChange(width));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(RightAreaSetting);