// src/containers/Ranking.js
import { connect } from 'react-redux';
import AccountMenuTable from '../components/rightarea/accountMenuTable'

const mapStateToProps = (state, ownProps) => {
  return (
    {
      userId: state.userInfo.user.userId,
      mail: state.userInfo.user.mail,
    }
  )
};


export default connect(mapStateToProps)(AccountMenuTable);
