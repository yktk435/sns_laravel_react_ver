// src/App.js
import React, { Component } from 'react';
// import { Switch, Route, Redirect } from 'react-router-dom';
// import Ranking from './containers/Ranking';
import LeftArea from './containers/leftarea'
import RightArea from './containers/rightarea'
import CenterArea from './containers/centerarea'
import Login from './containers/login'
import { Switch, Route, Redirect } from 'react-router-dom';
import './index.css'
import CreateAccount from './containers/createAccount'

import { ProfileEditPage } from './components/otherPage'
import { PostPage } from './components/otherPage'
import { CommentPage } from './components/otherPage'
// import CreateAccount from './components/createAccount'
class App extends Component {
  componentWillMount() {

    this.props.startLoginWithToken()
  }

  render() {
    this.comp = (
      <div>
        {/* アイコン系(左側) */}
        <LeftArea />
        {/* タイムライン系(真ん中) */}
        <CenterArea />
        {/* 右側 */}
        <RightArea />

        {/* プロフィール編集画面 */}
        <ProfileEditPage {...this.props} />
        {/* 投稿ページ */}
        <PostPage {...this.props} />
        {/* 返信ページ */}
        <CommentPage {...this.props} />
      </div>
    )

    if (this.props.userInfo.user.dataGet) {

      if (!this.props.userInfo.user.auth) {
        this.comp = (
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/create" component={CreateAccount} />
            <Route
              path="/"
              render={() => <Redirect to="/login" />}
            />
          </Switch>

        )
      }
    } else {
      return (<div>読込中</div>)
    }
    return (
      <div>   {this.comp}</div>
    )


  };
}


export default App;
