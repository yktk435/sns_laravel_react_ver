import React from 'react'
import taro from '../../images/taro.png'
import { Link } from 'react-router-dom';
class Dm extends React.Component{
    componentWillMount() {
        // DM情報を取得
        this.props.getDm()
    }
    render() {
        console.log(this.props)

        const { messages, members } = this.props.dm
        const {myMemberId}=this.props
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
                    {messages.map(i => <DmParts members={members} message={i[i.length-1]} myMemberId={myMemberId}/>)}
                    {/* <DmParts {...info} />
                    <DmParts {...info} />
                    <DmParts {...info} /> */}
                </div>
            </div>
    
        )
    }
}

const DmParts = (props) => {
    console.log(props)
    const {myMemberId}=props
    const { message, members } = props
    const { id: messageId, message: content,from_id,to_id } = message
    const member = members.find(member => (from_id == member.id || to_id==member.id))
    const{id:memberId,name,user_id,icon}=member
    return (
        <Link style={{textDecoration:"none"}} to={"/dm/"+user_id}><div style={{ padding: "10px 15px", borderBottom: "1px solid rgb(48, 60, 67)", display: "inline-flex", height: "auto", width: "-webkit-fill-available" }} className="post-screen">
            {/* <!-- 1ブロック ユーザ画像 --> */}
            <Link style={{textDecoration:"none"}} to={"/profile/"+user_id}><div style={{ marginRight: "10px" }} aria-label="ユーザアイコン">
                <div style={{ margin: "5px" }}>
                    <a className=""  aria-label="ユーザアイコン">
                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={icon} alt="ユーザアイコン" />
                    </a>
                </div>
            </div></Link>
            {/* <!-- 2ブロック ユーザ名,IDなどの情報 --> */}
            <div>
                {/* <!-- ユーザ名・返信情報 --> */}
                <div style={{ display: "inline-flex" }}>
                    <div style={{ float: "left", marginLeft: "5px" }}>
                    <Link style={{textDecoration:"none"}} to={"/profile/"+user_id}><a style={{ textDecoration: "none", color: "white", fontWeight: "bold", }} >{name}</a></Link>
                    </div>
                    <div style={{ float: "left", margin: "0 15px", }}>
                    <Link style={{textDecoration:"none"}} to={"/profile/"+user_id}><a style={{ textDecoration: "none", color: "rgb(115, 129, 136)", }} >@{user_id}</a></Link>
                    </div>
                    <div style={{ float: "left", color: "rgb(115, 129, 136)" }}>{props.createdAt}</div>
                    {/* <!-- 返信先情報 --> */}
                </div>
                {/* <!-- 投稿内容 --> */}
                <div className="font" style={{ padding: "5px 0", color: "rgba(106, 123, 135)" }}>
                    {content=='undefined'?'':content}
                </div>
            </div>
        </div></Link>

    )
}

export default Dm;