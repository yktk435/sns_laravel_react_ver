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
        case 'INPUT_USERNAME':
            return {
                ...state,
                userId: action.payload.userId,                
            };

        case 'INPUT_PASS':
            return {
                ...state,
                pass: action.payload.pass,                
            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                errorObj:action.payload.errorObj
            }

        default:
            return state;
    }
}
