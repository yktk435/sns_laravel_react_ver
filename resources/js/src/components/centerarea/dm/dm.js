import React from 'react'
import taro from '../../images/taro.png'
const Dm = () => {
    let info = {
        userName: "username",
        userId: "userId",
        userImageUrl: "./src/work/image/taro.png",
        createdAt: "202x年x月x日",
        content: "送信内容",
    }
    return (
        <div className="main-container" style={{ overflow: "auto" }}>
            <div >
                <DmParts {...info} />
                <DmParts {...info} />
                <DmParts {...info} />
            </div>
        </div>

    )
}

const DmParts = (props) => {
    return (
        <div style={{ padding: "10px 15px", borderBottom: "1px solid rgb(48, 60, 67)", display: "inline-flex", height: "auto", width: "-webkit-fill-available" }} className="post-screen">
            {/* <!-- 1ブロック ユーザ画像 --> */}
            <div style={{ marginRight: "10px" }} aria-label="ユーザアイコン">
                <div style={{ margin: "5px" }}>
                    <a className="" href="" aria-label="ユーザアイコン">
                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={taro} alt="ユーザアイコン" />
                    </a>
                </div>
            </div>
            {/* <!-- 2ブロック ユーザ名,IDなどの情報 --> */}
            <div>
                {/* <!-- ユーザ名・返信情報 --> */}
                <div style={{ display: "inline-flex" }}>
                    <div style={{ float: "left", marginLeft: "5px" }}>
                        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold", }} href="">{props.userName}</a>
                    </div>
                    <div style={{ float: "left", margin: "0 15px", }}>
                        <a style={{ textDecoration: "none", color: "rgb(115, 129, 136)", }} href="">{props.userId}</a>
                    </div>
                    <div style={{ float: "left", color: "rgb(115, 129, 136)" }}>{props.createdAt}</div>
                    {/* <!-- 返信先情報 --> */}
                </div>
                {/* <!-- 投稿内容 --> */}
                <div className="font" style={{ padding: "5px 0", color: "rgba(106, 123, 135)" }}>
                    {props.content}
                </div>
            </div>
        </div>

    )
}

export default Dm;