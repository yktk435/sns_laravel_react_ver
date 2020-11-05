import React from 'react'
import { Link } from 'react-router-dom'
import right from '../images/right.png'
const AccountMenuTable = (props) => {
    return (
        <div>
            <RightItem itemName="ユーザ名" itemContent={props.userId} to="account/change_user_id" />
            <RightItem itemName="メールアドレス" itemContent={props.mail} to="account/change_mail" />
            <RightItem2 itemName="パスワード" to="account/change_pass" />
            {/* <!-- アカウント削除 --> */}
            <div className="setting-outer setting-name-hover">
                <a href="" className="a-to-block2" style={{ height: "30px" }}>
                    <div className="setting-inner">アカウント削除</div>
                    <div className="menu-name" aria-label="メニュー名" style={{ transform: "translate(-20%, -75%)", right: "1%" }}>
                        <a className="" href="" aria-label="新規アクション">
                            <img className="right-icon" src={right} alt="新規メッセージ" />
                        </a>
                    </div>
                </a>
            </div>
        </div>
    )
}
const RightItem = (props) => {
    return (
        <Link style={{ textDecoration: "none" }} to={"/setting/" + props.to}>
            <div className="setting-outer setting-name-hover">
                <a href="" className="a-to-block2">
                    <div>
                        <div className="">{props.itemName}</div>
                        <div style={{ fontSize: "13px", color: "rgb(115, 129, 136)" }}>{props.itemContent}</div>
                    </div>
                    <div className="menu-name" aria-label="メニュー名" style={{ transform: "translate(-20%, -50%)", right: "1%" }}>
                        <a className="" href="" aria-label="新規アクション">
                            <img className="right-icon" src={right} alt="新規メッセージ" />
                        </a>
                    </div>
                </a>
            </div>
        </Link>
    )
}
const RightItem2 = (props) => {
    return (
        <Link style={{ textDecoration: "none" }} to={"/setting/" + props.to}><div className="setting-outer setting-name-hover" style={{ borderBottom: "10px solid rgb(56, 68, 77)" }}>
            <a href="" className="a-to-block2" style={{ height: "30px" }}>
                <div className="setting-inner">{props.itemName}</div>
                <div className="menu-name" aria-label="メニュー名" style={{ transform: "translate(-20%, -75%)", right: "1%" }}>
                    <a className="" href="" aria-label="新規アクション">
                        <img className="right-icon" src={right} alt="新規メッセージ" />
                    </a>
                </div>
            </a>
        </div>
        </Link>
    )
}
export default AccountMenuTable