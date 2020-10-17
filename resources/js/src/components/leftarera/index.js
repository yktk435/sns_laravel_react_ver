import React from 'react';
import { Link } from 'react-router-dom';

import EventListener from 'react-event-listener'

// 画像
import siteicon from '../images/siteicon.png'
import home from '../images/home.png'
import search from '../images/search.png'
import notification from '../images/notification.png'
import dm from '../images/dm.png'
import profile from '../images/profile.png'
import setting from '../images/setting.png'
import cathand2 from '../images/cathand2.png'

class LeftArea extends React.Component {
    componentWillMount() {
        this.props.windowSizeChange(window.innerWidth)

        this.props.clickMenuItem(this.props.path);

    }
    render() {
        return (
            <header>
                <EventListener target="window" onResize={(e) => this.props.windowSizeChange(e.target.innerWidth)} />
                <div className="main left border" style={{ overflow: "auto", height: "100vh", width: this.props.leftAreaWidth }}>
                    <div className="div-outside-image site-image">
                        <Link to="home"><a className="icon-link icon-to-center-for-a" href="" aria-label="サイトアイコン">
                            <img className="image-icon icon-to-center-for-img site-image-icon" src={siteicon} alt="サイトアイコン" />
                        </a></Link>
                    </div>
                    <div>
                        <IconParts styleObj={this.props.style[0]} clickMenuItem={this.props.clickMenuItem} displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="home" to="home" alt="ホームアイコン" innerstr="ホーム" image={home} />
                        <IconParts clickMenuItem={this.props.clickMenuItem} displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="search" to="search" alt="検索アイコン" innerstr="検索" image={search} />
                        <IconParts styleObj={this.props.style[1]} clickMenuItem={this.props.clickMenuItem} displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="notification" to="notification" alt="通知アイコン" innerstr="通知" image={notification} />
                        <IconParts styleObj={this.props.style[2]} clickMenuItem={this.props.clickMenuItem} displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="dm" to="dm" alt="メッセージアイコン" innerstr="メッセージ" image={dm} />
                        <IconParts styleObj={this.props.style[3]} clickMenuItem={this.props.clickMenuItem} displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="profile" to="profile" alt="プロフィールアイコン" innerstr="プロフィール" image={profile} />
                        <IconParts styleObj={this.props.style[4]} clickMenuItem={this.props.clickMenuItem} displayString={this.props.displayString} classNameString={this.props.classNameString} menuname="setting" to="setting" alt="設定アイコン" innerstr="設定" image={setting} />
                        <div class="div-outside-image icon-container" style={{ width: "70%", marginBottom: "140px" }}>
                            <a class="a-to-block post-icon" href="" style={{ borderRadius: "100px", position: "relative" }}>
                                <div class="block-to-center">
                                    <img class="image-icon" src={cathand2} alt="投稿開始ボタン" />
                                </div>
                            </a>
                        </div>
                        <LogoutIcon logout={this.props.logout} userName={this.props.userInfo.user.userName} userId={this.props.userInfo.user.userId} iconUrl={this.props.userInfo.user.iconUrl} clickMenuItem={this.props.clickMenuItem} displayString={this.props.displayString} classNameString={this.props.classNameString} />
                    </div>

                </div>
            </header>
        )
    }

}
const IconParts = (props) => {
    // console.log(props)
    return (
        <div className={props.classNameString} >
            <Link id={props.to} class="link-mark" to={props.to}><a className="spreaded-icon-a" style={props.styleObj} onClick={(e) => {

                props.clickMenuItem(e.target.closest(".link-mark").id)
                console.log(e.target.closest(".link-mark").id)
            }}>
                <div style={{ float: "left" }}>
                    <img className="img-size" src={props.image} alt={props.alt} />
                </div>
                <div className="icon-discription spreaded-icon-name" style={{ display: props.displayString }}>{props.innerstr}</div>
            </a></Link>

        </div>
    )
}

const LogoutIcon = (props) => {
    return (
        <div class={props.classNameString} style={{ position: "relative" }}  onClick={()=>props.logout()}>
            <a class="logout">
                <div style={{ float: "left" }}>
                    <img class="img-size" src={props.iconUrl} alt="ユーザ名" />
                </div>
                <div class="icon-discription spreaded-icon-name" style={{ display: props.displayString, fontSize: "15px" }}>{props.userName}</div>
                <div class="icon-discription spreaded-icon-name" style={{ display: props.displayString, fontSize: "15px", color: "rgb(136, 153, 166)" }}>{props.userId}</div>
            </a>
        </div>
    )
}

export default LeftArea;