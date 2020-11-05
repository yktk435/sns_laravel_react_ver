export const clickMenuItem = e => {
    
    let filter = {
        WebkitFilter: "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)"
    }
    let style = [{}, {}, {}, {}, {}]

    if (e.match(/home/)) {
        style[0] = filter
    } else if (e.match(/notification/)) { 
        style[1] = filter
    }else if (e.match(/dm/)) { 
        style[2] = filter
    }else if (e.match(/profile/)) { 
        style[3] = filter
    }else if (e.match(/setting/)) { 
        style[4] = filter
    }
    
    return ({
        type: 'CLICK_LEFTAREA_MENU_ITEM',
        payload: {
            style,
        }
    })
}

