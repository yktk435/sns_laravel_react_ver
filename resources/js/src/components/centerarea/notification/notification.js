import React, { Component } from 'react'
import userigame from '../../images/user.jpg'

class Notification extends Component {
    constructor(props) {
        super(props);
        this.comp = <ReplyNotification />
        this.style = {
            all: {
                WebkitFilter: " invert(91%) sepia(99%) saturate(10000%) hue-rotate(203deg) brightness(169%) contrast(135%)",
                padding: "15px 0",
                float: "left",
                width: "calc(100%/2)",
                fontWeight: "bold",
                borderBottom: "3px solid rgb(48, 60, 67)"
            },
            rep: {
                padding: "15px 0",
                float: "left",
                width: "calc(100%/2)",
                fontWeight: "bold",
                borderBottom: "3px solid rgb(48, 60, 67)"
            },
        }
        
        // this.menu = this.replyNotificationMenu()


    }
    render() {
        return (
            <div className="main-container" style={{ overflow: "auto" }}>
                
                    <div style={{ width: "100%", display: "inline-flex" }}>
                        <div className="notification-button-all" style={this.style.all} align="center" >
                            すべて
                            </div>
                        <div className="notification-button-rep" style={this.style.rep} align="center" >
                            返信
                            </div>
                    </div>
                    {this.comp}
            </div >
        )
    }
}


const ReplyNotification = () => {
    return (
        <div >
            <ReplyNotificationInfo userName="username" userImageUrl="url" createdAt="202x年x月x日" from="from" to="to" content="投稿内容" />
            
        </div>
    )
}

const ReplyNotificationInfo = (props) => {
    return (
        <div style={{ padding: "10px 15px", borderBottom: "1px solid rgb(48, 60, 67)", display: "inline-flex", height: " auto", width: "-webkit-fill-available" }} className="post-screen">
            <React.Fragment>
                {/* <!-- 1ブロック ユーザ画像 --> */}
                <div style={{ marginRight: "10px" }} aria-label="ユーザアイコン">
                    <div style={{ margin: "5px" }}>
                        <a  href="" aria-label="ユーザアイコン">
                            <img  style={{ width: "50px", height: "50px"}} className="radi50" src={userigame} alt="ユーザアイコン" />
                        </a>
                    </div>
                </div>
                {/* <!-- 2ブロック ユーザ名,IDなどの情報 --> */}
                <div style={{ display: "block" }}>
                    <React.Fragment>
                        {/* <!-- ユーザ名・返信情報 --> */}
                        <div>
                            <React.Fragment>
                                <div style={{ float: "left", marginLeft: "5px" }}>
                                    <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} href="">{props.userName}</a>
                                </div>
                                <div style={{ float: "left", margin: "0 15px" }}>
                                    <a style={{ textDecoration: "none", color: "rgb(115, 129, 136)" }} href="">{props.from}</a>
                                </div>
                                <div style={{ float: "left", color: "rgb(115, 129, 136)" }}>{props.createdAt}</div>
                                {/* <!-- 返信先情報 --> */}
                                <div aria-label="返信先情報" style={{ color: "rgba(106, 123, 135)" }}>
                                    返信先:
                                        <div style={{ display: "inline-flex", margin: "0 2px" }}>
                                        <a style={{ textDecoration: "none", color: "rgb(29, 161, 242)" }} href="">{props.to}</a>
                                    </div>
                                        さん
                                    </div>
                            </React.Fragment>
                        </div>
                        {/* <!-- 投稿内容 --> */}
                        <div className="font">
                            {props.content}
                        </div>
                    </React.Fragment>
                </div>
            </React.Fragment>
        </div>


    )
}

export default Notification