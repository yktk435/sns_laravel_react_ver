// src/containers/Ranking.js
import { connect } from 'react-redux';
import { Article } from '../components/otherPage'
import * as fetch from '../actions/fetch';
import * as home from '../actions/home'
import { goBack } from 'react-router-redux'


const mapStateToProps = (state, ownProps) => ({
    ...state,


});

const mapDispatchToProps = dispatch => {
    return ({
        goBack() {
            dispatch(goBack())
        },
        getArticleInfo(articleId) {
            dispatch(fetch.getArticleInfo(articleId))
        },
        commentToggle() {
            dispatch(fetch.commentToggle())
        },
        

    })
};

export default connect(mapStateToProps, mapDispatchToProps)(Article);