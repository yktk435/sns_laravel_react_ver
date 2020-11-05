import React from 'react'
import { Link } from 'react-router-dom'

import good from '../../images/good.png'
import rep from '../../images/rep.png'
import retweet from '../../images/retweet.png'
import Profile from '../../centerarea/profile/profile'
import { Switch, Route } from 'react-router-dom';
import Following from '../../centerarea/profile/following'
import MyProfile from '../../centerarea/profile/MyProfile'
class OtherUserPage extends Profile {
    componentWillMount() {
        let userId = this.props.match.params.userId
        // このときにユーザ情報を取得

        this.props.getArticles(userId)
        this.props.getFriends(userId)
        this.props.getOtherUserInfo(userId)
    }
    render() {
        return (
            <Switch>
                {(() => {
                    if (this.props.followingMode) {
                        return (<Following {...this.props} />)
                    } else {
                        return (<MyProfile {...this.props} />)
                    }
                })()}
            </Switch>

        )
    }
}

export default OtherUserPage