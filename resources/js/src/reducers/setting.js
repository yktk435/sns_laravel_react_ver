let filter = {
    backgroundColor: "rgba(90, 230, 255, 0.068)"
}
// 初期状態
const initialState = {
    // ホーム画面で投稿するときの投稿するデータの形
    style: [filter, {}, {},],
    menuMode:'アカウント'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case 'CLICK_MENU_ITEM_BY_SETTING':
            return {
                style: { ...action.payload.style },
                menuMode:action.payload.menuMode,
            };
        
        default:
            return state;
    }
}
