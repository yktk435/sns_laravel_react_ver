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
import CreateAccount from './components/createAccount'
class App extends Component {
  componentWillMount() {

    // this.props.getUserInfo()

    let token;
    document.cookie.split(';').forEach(item => {
      token = item.match(/access_token=(.*)/)

    })

    if (token == null) {
      // クッキーにアクセストークンがないならログインにリダイレクト

    } else {
      // クッキーにアクセストークンがあるならそれを使ってログイン
      token = token[1];
      console.log(token)
      // dispatch
      this.props.startLoginWithToken(token)
    }
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
      </div>
    )
    if (!this.props.userInfo.user.auth) this.comp = (
      
      <Switch>
        <Route path="/login" component={Login}/>
        <Route path="/create"  component={CreateAccount}/>
      </Switch>
      
    )
    return (
      <div>   {this.comp}</div>
      
      // <div style={{backgroundColor:"red"}}>
      //   <CreateAccount/>
      // </div>
      



      // <Switch>
      //   <Route path="/login" exact component={Login} />
      //   {this.comp}
      // </Switch>
    )
  };
}


export default App;
