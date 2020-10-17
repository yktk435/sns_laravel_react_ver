export const clickMenuItem = menuMode => {
    let filter = {
        WebkitFilter: "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)"
    }
    let style = [{}, {}, {}, {},]
    switch (menuMode) {
        case "post":
            style[0] = filter
            break;
        case "rep":
            style[1] = filter
            break;
        case "pic":
            style[2] = filter
            break;
        case "good":
            style[3] = filter
            break;
    }
    return ({
        type: 'CLICK_MENU_ITEM',
        payload: {
            style,
            menuMode,
        }
    })
}

