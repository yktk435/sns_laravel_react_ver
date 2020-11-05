// 初期状態
const initialState = {
    // ホーム画面で投稿するときの投稿するデータの形
    userId: '',
    pass: '',
    mail: '',
    error:false,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'CHNAGE_USER_ID':
            return {
                userId: action.payload.userId
            }
            
        case 'SAVE_USER_ID':
            return {

            }
            
        case 'CHNAGE_MAIL':
            return {
                mail: action.payload.mail
            }
            
        case 'SAVE_MAIL':
            return {

            }
            
        case 'CHNAGE_PASS':
            return {
                pass: action.payload.pass
            }
            
        case 'SAVE_PASS':
            return {

            }

            
        case 'CHANGE_INPUT':
            return {
                id: action.payload.id,
                input: action.payload.input,
            }

            
        case 'CHANGE_USER_INFO_ERROR':
            return {
                error: true
            }
            

        default:
            return state;
    }
}
