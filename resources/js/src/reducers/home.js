// 初期状態
const initialState = {
    // ホーム画面で投稿するときの投稿するデータの形
    text: '',
    response: '',
    error: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_POST_TEXT':
            return {
                ...state,
                text: action.payload.text
            };
        case 'CLEAR_TEXT':
            // 投稿ボタンを押したら文字を消す
            return {
                text: undefined,
                imageFile: undefined,
                imageUrl:undefined
            }
            break;
        case 'IMAGE_CHOICE':
            return {
                ...state,
                imageUrl: action.payload.imageUrl,
            }
            break;
        case 'IMAGE_CLEAR':
            return {
                ...state,
                imageUrl: undefined,
            }
            break;
        default:
            return state;
    }
}
