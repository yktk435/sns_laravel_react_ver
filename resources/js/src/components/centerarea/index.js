import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from '../../containers/home'
// import { Switch, Route, Redirect } from 'react-router-dom';
import Notification from './notification/notification'
import Dm from './dm/dm'
import Profile from '../../containers/profile'
import Setting from '../../containers/setting'
import OtherUserPage from '../../containers/otherUserPage'


class CenterArea extends React.Component {
    
    render() {
        const { menuName } = this.props;
        return (
            <div className="main center border" style={{ width: "560px", height: "100vh" ,overflow:"auto"}}>

                {/* メニュー名 */}
                <div className="menu-name-parent" aria-label="メニュー名">
                    <div className="menu-name" aria-label="メニュー名">{menuName}</div>
                </div>
                {/* メイン */}
                {/* ここにメニュー特有のページ */}
                <Switch>
                    
                    <Route path="/home" component={Home}/>
                    <Route path="/notification" component={Notification} />
                    <Route path="/dm" component={Dm} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/setting" component={Setting} />
                    <Route path="/user/:userId" component={OtherUserPage} />
                    <Route
                        path="/"
                        render={() => <Redirect to="/home" />}
                    />
                </Switch>


            </div>
        )
    }

}

export default CenterArea