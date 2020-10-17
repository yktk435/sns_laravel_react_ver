const initialState = {
    data: {},
    error:false,
}
export default (state = initialState, action) => {
    switch (action.type) {
      // リクエスト開始時に状態をリセット
      case 'START_REQUEST_F':
        return {
          state          
        };
  
      // データ受信
      case 'RECEIVE_DATA_F':
        return action.payload.error
          ? { ...state, error: true }
          : {
              ...state,
              data: action.payload.response
            };
  
      default:
        return state;
    }
  }
  