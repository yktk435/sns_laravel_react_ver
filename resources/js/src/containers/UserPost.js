import { connect } from 'react-redux';
import UserPost from '../components/centerarea/profile/UserPost'
import * as fetch from '../actions/fetch'

const mapStateToProps = (state, ownProps) => ({
    goodArticleIds: state.userInfo.user.goodArticleIds,
    commentArticleIds: state.userInfo.user.commentArticleIds,
    photoArticleIds: state.userInfo.user.photoArticleIds,
    commentInfo: state.profile.userInfo.commentArticleIds,
    location:state.router.location,
    
})
const mapDispatchToProps = dispatch => ({
    commentToggle() {
        dispatch(fetch.commentToggle())
    },
    getArticleInfo(articleId) {
        dispatch(fetch.getArticleInfo(articleId))
    },
    goodToggle(articleId) {
        dispatch(fetch.goodToggle(articleId))
    }
})
export default connect(mapStateToProps,mapDispatchToProps)(UserPost)