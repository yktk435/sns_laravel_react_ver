// 初期状態
const initialState = {
    // categoryId: undefined,
    // categoryIdからcategoryに変更
    userId: '',
    pass: '',
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        // リクエスト開始時に状態をリセット
        case 'INPUT_USERID':
            return {
                ...state,
                userId: action.payload.userId,
            };

        case 'INPUT_PASS':
            return {
                ...state,
                pass: action.payload.pass,
            }
            
        case 'INPUT_USER_NAME':
            return {
                ...state,
                userName: action.payload.userName,
            }
            
        case 'INPUT_MAIL':
            return {
                ...state,
                mail: action.payload.mail,
            }
            
        case 'LOGIN_ERROR':
            return {
                ...state,
                errorObj: action.payload.errorObj
            }
            
            case 'CREATE_ACCOUNT_ERROR':
                return {
                    ...state,
                    error: action.payload.error.error
                }
            
        case 'GET_USERINFO':
            return {
                ...state,
                error: false
            }
    
        default:
            return state;
    }
}
