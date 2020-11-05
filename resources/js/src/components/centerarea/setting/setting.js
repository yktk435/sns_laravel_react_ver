import React from 'react'
import right from '../../images/right.png'
import {Link} from 'react-router-dom'
class Setting extends React.Component{
    componentWillMount() {
        
    }
    render() {
        const { userId } = this.props
        const {id,name,user_id,}=this.props.member
        return (
            <div className="main-container" style={{ overflow: "auto" }}>
                <React.Fragment>
                    {/*  <!-- ユーザID --> */}
                    <div class="setting-outer" style={{ height: "30px" }}>
                        <div class="setting-menu-inner">@{user_id}</div>
                    </div>
                    {/* アカウント */}
                    <CenterItem id="account" itemName="アカウント" imageUrl={right}  divstyle={this.props.style[0]} clickMenuItem={this.props.clickMenuItem}/>
                    <CenterItem id="security" itemName="セキュリティ" imageUrl={right}  divstyle={this.props.style[1]} clickMenuItem={this.props.clickMenuItem}/>
                    <CenterItem id="notification" itemName="通知" imageUrl={right}  divstyle={this.props.style[2]} clickMenuItem={this.props.clickMenuItem}/>
                </React.Fragment>
            </div>
        )    
    }

    
}
const CenterItem = (props) => {
    return (
        <Link to={"/setting/"+props.id}><div id={props.id} class="setting-outer setting-name-hover" style={props.divstyle} onClick={(e) => {
            let div = e.target.closest('div.setting-outer.setting-name-hover')
            
            props.clickMenuItem(div.innerText)
        }}>
            <a class="a-to-block2 pointer" style={{ height: "30px" }}>
                <div class="setting-inner">{props.itemName}</div>
                <div class="menu-name" aria-label="メニュー名" style={{ transform: "translate(-20%, -75%)", right: "1%" }}>
                    <a class=""  aria-label="">
                        <img class="right-icon" src={props.imageUrl} alt="" />
                    </a>
                </div>
            </a>
        </div>
        </Link>
    )

}

export const RightAreaSetting = (props) => {
    return (
        <div className="main right border" style={{ overflow: "auto", height: "100vh", width: "350px", }}>
            <React.Fragment>
                {/* <!-- 設定項目 --> */}
                <div class="menu-name-parent" aria-label="メニュー名">
                    <div class="menu-name" aria-label="メニュー名">{props.settingItemMenuName}</div>
                </div>
                {/* <!-- ログインとセキュリティ --> */}
                <div class="setting-outer" style={{ height: "30px" }}>
                    <div class="setting-menu-inner">{props.itemName}</div>
                </div>
                <RightItem itemName="ユーザ名" itemContent="testId" />
                <RightItem itemName="メールアドレス" itemContent="example@exampole.com" />
                <RightItem2 itemName="パスワード" />
                {/* <!-- アカウント削除 --> */}
                <div class="setting-outer setting-name-hover">
                    <a  class="a-to-block2" style={{height: "30px"}}>
                        <div class="setting-inner">アカウント削除</div>
                        <div class="menu-name" aria-label="メニュー名" style={{transform: "translate(-20%, -75%)",right: "1%"}}>
                            <a class=""  aria-label="新規アクション">
                                <img class="right-icon" src={right} alt="新規メッセージ"/>
                            </a>
                        </div>
                    </a>

                </div>
            </React.Fragment>
        </div>
    )
}
export const RightItemName = (props) => {
    return (
        <div class="menu-name-parent" aria-label="メニュー名">
            <div class="menu-name" aria-label="メニュー名">{props.itemName}</div>
        </div>
    )
}
 const RightItem = (props) => {
    return (
        <div class="setting-outer setting-name-hover">
            <a  class="a-to-block2">
                <div>
                    <div class="">{props.itemName}</div>
                    <div style={{ fontSize: "13px", color: "rgb(115, 129, 136)" }}>{props.itemContent}</div>
                </div>
                <div class="menu-name" aria-label="メニュー名" style={{ transform: "translate(-20%, -50%)", right: "1%" }}>
                    <a class=""  aria-label="新規アクション">
                        <img class="right-icon" src={right} alt="新規メッセージ" />
                    </a>
                </div>
            </a>

        </div>
    )
}
const RightItem2 = (props) => {
    return (
        <div class="setting-outer setting-name-hover" style={{borderBottom: "10px solid rgb(56, 68, 77)"}}>
        <a  class="a-to-block2" style={{height: "30px"}}>
                <div class="setting-inner">{props.itemName}</div>
            <div class="menu-name" aria-label="メニュー名" style={{transform: "translate(-20%, -75%)",right: "1%"}}>
                <a class=""  aria-label="新規アクション">
                    <img class="right-icon" src={right} alt="新規メッセージ"/>
                </a>
            </div>
        </a>

    </div>
    )
}
export default Setting