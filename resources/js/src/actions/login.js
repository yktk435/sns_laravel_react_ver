export const inputUserId = (userId) => ({
    type: 'INPUT_USERID',
    payload: {
        userId
    }
})
export const inputPass = (pass) => ({
    type: 'INPUT_PASS',
    payload: {
        pass
    }
})

export const pushLoginButton = (error) => ({
    type: 'PUSH_LOGIN_BUTTON',
    payload: {
        error,
    }
})


export const inputMail = mail => ({
    type: 'INPUT_MAIL',
    payload: {
      mail
    }
  })
  
export const inputUserName = userName => ({
    type: 'INPUT_USER_NAME',
    payload: {
      userName
    }  
})
