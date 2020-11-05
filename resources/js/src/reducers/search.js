// 初期状態
const initialState = {
    // ホーム画面で投稿するときの投稿するデータの形
    
    error:false,
};

export default (state = initialState, action) => {
    switch (action.type) {

        case 'INPUT_KEYWORD':
            return {
                keyword:action.payload.keyword
            }
            case 'SEARCH_RESULT':
            return action.payload.error
                ? {
                    responce:action.payload.responce,
                    error: true,
                }
                :{
                    articles: action.payload.responce.articles,
                    members: action.payload.responce.members,
                    error:false,
                }
                
        
        default:
            return state;
    }
}
