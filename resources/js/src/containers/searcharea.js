// src/containers/Ranking.js
import { connect } from 'react-redux';
import SearchArea from '../components/rightarea/searcharea';
import * as fetches from '../actions/fetch';

const mapStateToProps = (state, ownProps) => ({
  keyword:state.search.keyword,
});

const mapDispatchToProps = dispatch => {
  return ({
    
    search (keyword) {
      dispatch(fetches.search(keyword));
    },
    inputKeyWord (keyword) {
      dispatch(fetches.inputKeyWord(keyword));
    },
})};

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);