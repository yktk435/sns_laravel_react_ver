// src/actions/Ranking.js
import { replace } from 'react-router-redux';
import qs from 'qs';
/**********************************************/
// プロフィールでのユーザ情報取得
/**********************************************/
const getUserInfoInPrrofileAction = (response, error) => ({
  type: 'GET_USERINFO_IN_PROFILE',
  payload: { response, error }
})

export const getUserInfoInPrrofile = (userId) => {
  return async (dispatch, getState) => {
    const option = {
      method: 'get',
      headers: {
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }
    // ログインしていなければloginにリダイレクトの処理を書く
    try {
      const responce = await fetch('http://localhost:8000/api/member/' + userId + '/edit', option);
      const data = await responce.json();

      if ('error' in data) throw data
      // dispatch(replace('/home'))
      dispatch(getUserInfoInPrrofileAction(data, null,));
    } catch (err) {
      dispatch(getUserInfoInPrrofileAction(null, err));
    }
  };
}

/**********************************************/
// タイムライン取得 自分とフォローしているアカウントの記事取得
/**********************************************/

const receiveTimeLine = (responce, error) => ({
  type: 'RECEIVE_TIMELINE',
  payload: {
    responce,
    error
  }
})


export const getTimeLine = () => {
  return async (dispatch, getState) => {
    const option = {
      method: 'get',
      headers: {
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }
    try {
      const responce = await fetch('http://localhost:8000/api/article/show/edit', option)
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(receiveTimeLine(data, null));
    } catch (err) {
      dispatch(receiveTimeLine(null, err));
    }
  }
}

/**********************************************/
// フォロー/フォロワー習得
/**********************************************/
const receiveFriendsData = (responce, error) => ({
  type: 'RECEIVE_FRIENDS_DATA',
  payload: {
    responce,
    error
  }
})

export const getFriends = (userId) => {
  return async (dispatch, getState) => {
    const option = {
      method: 'get',
      headers: {
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }

    try {
      const responce = await fetch('http://localhost:8000/api/friend?userId=' + userId, option)
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(receiveFriendsData(data, null));
    } catch (err) {
      dispatch(receiveFriendsData(null, err));
    }
  }
}
// ログインしているユーザのフォロー/フォロワー取得

const receiveMyFriendsData = (responce, error) => ({
  type: 'RECEIVE_MY_FRIENDS_DATA',
  payload: {
    responce,
    error
  }
})

export const getMyFriends = (userId) => {
  return async (dispatch, getState) => {
    const option = {
      method: 'get',
      headers: {
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }

    try {
      const responce = await fetch('http://localhost:8000/api/friend?userId=' + userId, option)
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(receiveMyFriendsData(data, null));
    } catch (err) {
      dispatch(receiveMyFriendsData(null, err));
    }
  }
}
/**********************************************/
// フォロー/フォロワー習得 ここまで
/**********************************************/

/**********************************************/
// フォロー/フォロー解除
/**********************************************/

const followingInfoUpdate = (responce, error) => ({
  type: "FOLLOWING_INFO_UPDATE",
  payload: {
    responce,
    error
  }
})

export const followOr = (e, memberId) => {
  return async (dispatch, getState) => {
    const option = {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: JSON.stringify({ targetMemberId: memberId })
    }

    try {
      const responce = await fetch('http://localhost:8000/api/friend/' + e, option)
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(followingInfoUpdate(data, null));

      const option2 = {
        method: 'get',
        headers: {
          'access_token': getAccesstoken(),
        },
      }

      // const responce2 = await fetch('http://localhost:8000/api/friend?userId=', option2)

      // const data2 = await responce2.json();

      // if ('error' in data2) throw data2
      // dispatch(receiveFriendsData(data2, null));


    } catch (err) {
      dispatch(followingInfoUpdate(null, err));
    }
  }
}


/**********************************************/
// フォロー/フォロー解除
/**********************************************/


const getUserInfoAction = (response, error) => ({
  type: 'GET_USERINFO',
  payload: { response, error },
});


const loginError = (errorObj, error) => ({
  type: 'LOGIN_ERROR',
  payload: { errorObj, error },
})
const loginErrorWithToken = (errorObj, error) => ({
  type: 'LOGIN_ERROR_WEITH_TOKEN',
  payload: { errorObj, error },
})
const logoutAction = () => ({
  type: 'LOGOUT',

})

const receivePostData = (responce, error) => ({
  type: 'RECEIVE_POST_DATA',
  payload: {
    responce,
    error
  }
})

const receiveArticles = (responce, error) => ({
  type: 'RECEIVE_ARTICLES',
  payload: {
    responce,
    error
  }
})

const createAccountButtonError = error => ({
  type: 'CREATE_ACCOUNT_ERROR',
  payload: { error },
});

// 設定 Action

export const saveChange = (s) => ({
  type: 'SAVE_CHANGE'
})

export const changeInput = (id, input) => ({
  type: 'CHANGE_INPUT',
  payload: {
    id, input
  }
})

const changeUserInfoError = (error) => ({
  type: 'CHANGE_USER_INFO_ERROR',
  payload: {
    error
  }
})

// 設定Action ここまで

// 検索

const startSearch = () => ({
  type: 'START_SEARCH'
})
export const inputKeyWord = (keyword) => ({
  type: 'INPUT_KEYWORD',
  payload: {
    keyword
  }
})
const searchRes = (responce, error) => ({
  type: 'SEARCH_RESULT',
  payload: {
    responce,
    error
  }
})
/**********************************************/
// 検索
/**********************************************/

export const search = (keyword) => {
  return async (dispatch, getState) => {

    const option = {
      method: 'get',
      headers: {
        'access_token': getAccesstoken(),
        'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }

    const queryString = qs.stringify({
      keyword,
    });
    // dispatch(startRequest(category)); // categoryIdからcategoryに変更
    try {
      const responce = await fetch('http://localhost:8000/api/member?keyword=' + encodeURI(keyword), option)
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(searchRes(data, null));
    } catch (err) {
      dispatch(searchRes(null, err));
    }
  }
}
/**********************************************/
// 設定
/**********************************************/

export const saveChanges = (postData, token) => {
  return async (dispatch, getState) => {

    const option = {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
        'access_token': getAccesstoken(),
        'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: JSON.stringify({ input: postData.input })
    }
    // dispatch(startRequest(category)); // categoryIdからcategoryに変更
    try {
      const responce = await fetch('http://localhost:8000/api/member/' + postData.id, option);
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(getUserInfoAction(data, null));
    } catch (err) {
      dispatch(changeUserInfoError(err));
    }
  };
};

/**********************************************/
// アカウント作成
/**********************************************/
export const pushCreateAccountButton = (data) => {
  // const { userId, pass } = data
  return async (dispatch, getState) => {
    const option = {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: JSON.stringify(data)
    }
    try {
      const responce = await fetch('http://localhost:8000/api/member', option);
      const data = await responce.json();

      if ('error' in data) throw data
      // document.cookie = 'access_token=' + data.accessToken
      localStorage.setItem("access_token", data.accessToken);
      dispatch(getUserInfoAction(data, null,));
      dispatch(replace('/home'))

    } catch (err) {
      dispatch(createAccountButtonError(err));
    }
  }
}

/**********************************************/
// 記事関係
/**********************************************/
export const post = (requestData) => {
  return async (dispatch, getState) => {

    let array = Array.from(document.querySelectorAll("#filesend"))
    const imageFile = array.find(i => i.files.length == 1) ? array.find(i => i.files.length == 1).files[0] : null


    const formData = new FormData();
    formData.append('text', requestData.text);
    formData.append('imageFile', imageFile);
    const option = {
      method: 'post',
      headers: {
        // 'Content-Type': 'application/json',
        'access_token': getAccesstoken(),
        'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: formData
    }
    // dispatch(startRequest(category)); // categoryIdからcategoryに変更
    try {
      const responce = await fetch('http://localhost:8000/api/article', option);
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(receivePostData(data, null));
    } catch (err) {
      dispatch(receivePostData(null, err));
    }
  };
};

const receivePostedRepData = (response, error) => ({
  type: 'RECEIVE_POSTED_REP_DATA',
  payload: {
    response,
    error
  }
})

export const postRep = (repArticleId, content) => {
  return async (dispatch, getState) => {
    let array = Array.from(document.querySelectorAll("#filesend"))
    const imageFile = array.find(i => i.files.length == 1) ? array.find(i => i.files.length == 1).files[0] : null

    const formData = new FormData();
    formData.append('content', content);
    formData.append('articleId', repArticleId);
    formData.append('imageFile', imageFile);

    const option = {
      method: 'post',
      headers: {
        // 'Content-Type': 'application/json',
        'access_token': getAccesstoken(),
        'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: formData
    }
    try {
      const response = await fetch('http://localhost:8000/api/comment', option);
      const data = await response.json();

      if ('error' in data) throw data
      dispatch(receivePostedRepData(data, null));
    } catch (err) {
      dispatch(receivePostedRepData(null, err));
    }

  }
}

// 記事を取得したいuserId
export const getArticles = (userId) => {
  return async (dispatch, getState) => {
    const option = {
      headers: {
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }
    try {
      const responce = await fetch('http://localhost:8000/api/article?userId=' + userId, option);
      const data = await responce.json();
      if ('error' in data) throw data
      dispatch(receiveArticles(data, null));
    } catch (err) {
      dispatch(receiveArticles(null, err));
    }
  }
}
/**********************************************/
// ユーザ情報取得
/**********************************************/

export const startLogin = (ipassData) => {


  return async (dispatch, getState) => {
    const option = {
      method: 'post',
      headers: {
        'Content-Type': 'applicaxtion/json',
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: JSON.stringify(ipassData)
    }

    // ログインしていなければloginにリダイレクトの処理を書く
    try {

      const responce = await fetch('http://localhost:8000/api/login', option);
      const data = await responce.json();


      if ('error' in data) throw data
      localStorage.setItem("access_token", data.accessToken);
      dispatch(replace('/home'))
      dispatch(getUserInfoAction(data, null,));
    } catch (err) {

      dispatch(loginError(err));
      dispatch(replace('/login'))

    }
  };
}
// アクセストークンを持っているならそれでログイン
export const startLoginWithToken = () => {
  return async (dispatch, getState) => {
    const option = {
      method: 'get',
      headers: {
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',

      },
    }

    // ログインしていなければloginにリダイレクトの処理を書く
    try {

      const responce = await fetch('http://localhost:8000/api/login', option);
      const data = await responce.json();

      if ('error' in data) throw data
      localStorage.setItem("access_token", data.accessToken);
      dispatch(getUserInfoAction(data, null,));

    } catch (err) {
      dispatch(loginErrorWithToken(err));
      dispatch(replace('/login'))

    }
  };
}


export const logout = () => {
  return (dispatch, getState) => {
    // document.cookie = 'access_token=;'
    localStorage.removeItem("access_token");
    dispatch(logoutAction())
    dispatch(replace('/login'))
  }
}

/*****************************/
// 関数
/*****************************/
const getAccesstoken = () => {

  return localStorage.getItem('access_token');

}
/*****************************/
// 他ユーザ情報取得
/*****************************/
const getOtherUserInfoAction = (response, error) => ({
  type: 'GET_OTHER_USERINFO',
  payload: { response, error },
});

export const getOtherUserInfo = (userId) => {
  return async (dispatch, getState) => {
    const option = {
      method: 'get',
      headers: {
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }
    // ログインしていなければloginにリダイレクトの処理を書く
    try {
      const responce = await fetch('http://localhost:8000/api/member/get_other_user/edit', option);
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(getOtherUserInfoAction(data, null,));
    } catch (err) {
      dispatch(getOtherUserInfoAction(null, err));
    }
  };
}

// プロフィール編集

export const inputUserName = (userName) => ({
  type: 'INPUT_USERNAME_BY_EDIT',
  payload: {
    userName
  }
})



/**********************************************/
// 記事情報取得 
/**********************************************/
const getArticleInfoAction = (response, error) => ({
  type: 'GET_ARTICLEINFO',
  payload: { response, error },
});

export const getArticleInfo = (articleId) => {
  return async (dispatch, getState) => {
    const option = {
      headers: {
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }
    // ログインしていなければloginにリダイレクトの処理を書く
    try {
      const responce = await fetch('http://localhost:8000/api/article/' + articleId, option);
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(getArticleInfoAction(data, null,));
    } catch (err) {
      dispatch(getArticleInfoAction(null, err));
    }
  };
}


/**********************************************/
// トグルアクション
/**********************************************/
export const menuToggle = (toggle) => ({
  type: 'MENU_TOGGLE',
  payload: {
    toggle
  }
})
export const menuToggle2 = (toggle) => ({
  type: 'MENU_TOGGLE2',
  payload: {
    toggle
  }
})
export const commentToggle = (toggle) => ({
  type: 'COMMENT_TOGGLE',
  payload: {
    toggle
  }
})

export const repInfo = (articleId) => ({
  type: 'REP_INFO',
  payload: {
    articleId
  }
})
// いいね
export const goodToggleAction = (response, error) => ({
  type: 'GOOD_TOGGLE',
  payload: {
    response,
    error
  }
})

export const goodToggle = (articleId) => {
  return async (dispatch, getState) => {
    const option = {
      headers: {
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }
    // ログインしていなければloginにリダイレクトの処理を書く
    try {
      const responce = await fetch('http://localhost:8000/api/good/' + articleId + '/edit', option);
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(goodToggleAction(data, null,));
    } catch (err) {
      dispatch(goodToggleAction(null, err));
    }
  };
}

/**********************************************/
// DM関連
/**********************************************/
const getDmAction = (response, error) => ({
  type: 'GET_DM',
  payload: { response, error },
});

export const getDm = () => {
  return async (dispatch, getState) => {
    const option = {
      headers: {
        'access_token': getAccesstoken(),
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
    }
    // ログインしていなければloginにリダイレクトの処理を書く
    try {
      const responce = await fetch('http://localhost:8000/api/message', option);
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(getDmAction(data, null,));
    } catch (err) {
      dispatch(getDmAction(null, err));
    }
  };
}

// DM送信

const postDmAction = (response, error) => ({
  type: "RECEIVE_POST_DM",
  payload: {
    response,
    error
  }
})

export const postDm = (data) => {
  return async (dispatch, getState) => {

    
    const imageFile = document.querySelector("#filesend-dm").files[0]

    const formData = new FormData();
    formData.append('text', data.text);
    formData.append('targetId', data.targetId);
    formData.append('imageFile', imageFile);
    const option = {
      method: 'post',
      headers: {
        // 'Content-Type': 'application/json',
        'access_token': getAccesstoken(),
        'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: formData
    }
    // dispatch(startRequest(category)); // categoryIdからcategoryに変更
    try {
      const responce = await fetch('http://localhost:8000/api/message', option);
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(postDmAction(data, null));
    } catch (err) {
      dispatch(postDmAction(null, err));
    }
  };
};
const profileChangeAction = (response, error) => ({
  type: "PROFILE_CHANGE",
  payload: {
    response,
    error
  }
})


// アイコン、ヘッダー名前、変更
export const profileChange = (data) => {
  return async (dispatch, getState) => {

    
    const icon = document.querySelector("#filesend-new-icon").files[0]
    const header = document.querySelector("#filesend-new-header").files[0]

    const formData = new FormData();
    formData.append('input', data.input);
    formData.append('icon', icon);
    formData.append('header', header);
    const option = {
      method: 'post',
      headers: {
        // 'Content-Type': 'application/json',
        'access_token': getAccesstoken(),
        'X-HTTP-Method-Override': 'PUT'
        // 'X-CSRF-TOKEN': '5xFoCpfLihSVCf6gU8mY0Ko1n0HVYHbclMQFPSXj',
      },
      body: formData
    }
    // dispatch(startRequest(category)); // categoryIdからcategoryに変更
    try {
      const responce = await fetch('http://localhost:8000/api/member/profilechange/', option);
      const data = await responce.json();

      if ('error' in data) throw data
      dispatch(profileChangeAction(data, null));
    } catch (err) {
      dispatch(profileChangeAction(null, err));
    }
  };
};
