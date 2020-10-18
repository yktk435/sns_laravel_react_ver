export const clickMenuItem = menuMode => {
    let filter = {
        backgroundColor: "rgba(90, 230, 255, 0.068)"
    }
    let style = [{}, {}, {},]
    switch (menuMode) {
        case "アカウント":
            style[0] = filter
            break;
        case "セキュリティ":
            style[1] = filter
            break;
        case "通知":
            style[2] = filter
            break;
    }
    return ({
    type: 'CLICK_MENU_ITEM_BY_SETTING',
        payload: {
            style,
            menuMode,
        
    }
})}

export const clearTextBox = () => ({
    type: 'CLEAR_TEXT',
    payload: { text:'' },
});
  

export const imageChoce = (imageUrl) => ({
    type: 'IMAGE_CHOICE',
    payload: { imageUrl },
});
  

export const imageClear = (imageUrl) => ({
    type: 'IMAGE_CLEAR',
    payload: { imageUrl },
});
  

  