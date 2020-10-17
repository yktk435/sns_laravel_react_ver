// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
// 削除: import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'; // 追加
import createBrowserHistory from 'history/createBrowserHistory'; // 追加
import App from './containers/App';
// 削除: import * as reducers from './reducers';
import createStore from './createStore'; // 追加

// historyのインスタンスを生成
const history = createBrowserHistory();

// Storeの生成
const store = createStore(history);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
