export const clickMenuItem = e => {
    let filter = {
        WebkitFilter: "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)"
    }
    let style = [{}, {}, {}, {}, {}]
    switch (e) {
        case "home":
            style[0] = filter
            break;
        case "notification":
            style[1] = filter
            break;
        case "dm":
            style[2] = filter
            break;
        case "profile":
            style[3] = filter
            break;
        case "setting":
            style[4] = filter
            break;
    }
    return ({
        type: 'CLICK_LEFTAREA_MENU_ITEM',
        payload: {
            style,
        }
    })
}

