// 初期状態
const initialState = {
    leftAreaWidth: {},
    rightAreaWidth: {},
};
export default (state = initialState, action) => {
    switch (action.type) {
        // リクエスト開始時に状態をリセット
        case 'WINDOW_SIZE_CHANGE':
            return {
                // categoryを状態に保持
                leftAreaWidth: action.payload.leftAreaWidth,
                rightAreaWidth: action.payload.rightAreaWidth,
            };

        default:
            return state;
    }
}
