import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Change from '../../containers/change'
import AccountMenuTable from '../../containers/accountMenuTable'
const Setting = () => {

    return (
        <div className="main-container" style={{ overflow: "auto" }}>
            <React.Fragment>
                {/*  <!-- ユーザID --> */}
                <div class="setting-outer" style={{ height: "30px" }}>
                    <div class="setting-menu-inner">@ユーザID</div>
                </div>
                {/* アカウント */}
                <CenterItem itemName="アカウント" />
                <CenterItem itemName="セキュリティ" />
                <CenterItem itemName="通知" />
            </React.Fragment>
        </div>
    )
}
const CenterItem = (props) => {
    return (
        <div class="setting-outer setting-name-hover">
            <a href="" class="a-to-block2" style={{ height: "30px" }}>
                <div class="setting-inner">{props.itemName}</div>
                <div class="menu-name" aria-label="メニュー名" style={{ transform: "translate(-20%, -75%)", right: "1%" }}>
                    <a class="" href="" aria-label="">
                        <img class="right-icon" src={props.imageUrl} alt="" />
                    </a>
                </div>
            </a>
        </div>
    )

}

export const RightAreaSetting = (props) => {
    
    return (
        <div className="main right border" style={{ overflow: "auto", height: "100vh", width: "350px", display: props.display }}>
                {/* <!-- 設定項目 --> */}
                <div class="menu-name-parent" aria-label="メニュー名">
                    <div class="menu-name" aria-label="メニュー名">{props.menuMode}</div>
                </div>
                {/* <!-- ログインとセキュリティ --> */}
                <div class="setting-outer" style={{ height: "30px" }}>
                    <div class="setting-menu-inner">ログインとセキュリティ</div>
                </div>
                <Switch>
                    <Route path="/setting/account/:menu" component={Account} />
                    <Route path="/setting/account/" component={AccountMenuTable} />
                    <Route path="/setting/security" component={ChangeUserId} />
                    {/* <Route path="/setting/notification" component={Notification} /> */}
                </Switch>
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
const Account = (props) => {
    
    return (
        <div>
            {(() => {
                switch (props.match.params.menu) {
                    case 'change_user_id':
                        return (
                            <div><Change menu="ユーザ名"  id="userid" type="text"/>
                            </div>)

                        
                    case 'change_mail':
                        return (
                            <div><Change menu="メールアドレス"  id="mail" type="text"/>
                            </div>)
                        
                    case 'change_pass':
                        return (
                            <div><Change menu="パスワード"  id="pass" type="password"/>
                            </div>)

                        

                    default:
                        
                }
            })()}
            
        </div>
    )
}

const ChangeUserId = (props) => {
    return (
        <div class="setting-outer setting-name-hover" style={{ borderBottom: "10px solid rgb(37, 51, 65)" }}>
            {/* 名前 */}
            <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "1px 10px", margin: "15px", }}>
                <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)", }}>
                    ユーザ名</div>
                <input className="text-area" type="text" style={{ width: "90%", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)", }} />
            </div>
            {/* 保存ボタン */}
            <SaveButton />
        </div>
    )
}


const SaveButton = () => {
    return (
        <div className="pointer post-icon" style={{
            background: "rgb(29, 161, 242)",
            margin: "0 0 0 80%",
            textAlign: "center",
            borderRadius: "20px",
            padding: "5px 1px",
            width: "60px",
            fontWeight: "bold",
        }}>
            保存
        </div>
    )
}
export default Setting