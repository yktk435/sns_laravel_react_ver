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

export const profileOrFollowing = menuMode => (
    {
        type: 'PROF_OR_FOLLOW',
        payload: {
            followingMode: menuMode == 'following' ? true : false
        }
    })

export const clickMenuItemInFollowing = menuMode => {
    let filter = {
        WebkitFilter: "invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)"
    }
    let followingStyle = [{}, {},]
    if (menuMode == "follower") {
        followingStyle[0] = filter
    } else {
        followingStyle[1] = filter
    }
    return ({
        type: 'CLICK_MENU_ITEM_IN_FOLLOWING',
        payload: {
            followingStyle,
            followerMode: menuMode == "follower" ? true : false,
        }
    })
}

export const iconImage = imageUrl => ({
    type:"ICON_IMAGE",
    payload:{imageUrl}
})
export const headerImage = imageUrl => ({
    type:"HEADER_IMAGE",
    payload:{imageUrl}
})

