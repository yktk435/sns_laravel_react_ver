// src/containers/Ranking.js
import { connect } from 'react-redux';
import {Change} from '../components/rightarea/parts'
import * as fetch from '../actions/fetch';

const mapStateToProps = (state, ownProps) => {
  return ({
    change: {
      id:state.change.id,
      input:state.change.input,
    },
    error:state.change.error
    
    
  })
};

const mapDispatchToProps = dispatch => ({
  changeInput (id,input) {
    dispatch(fetch.changeInput(id, input))
  },
  saveChange(change){
    dispatch(fetch.saveChanges(change))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Change);