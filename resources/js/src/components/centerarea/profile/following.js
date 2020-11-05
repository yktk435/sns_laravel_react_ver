import React from 'react'
import left from '../../images/left.png'
import taro from '../../images/taro.png'
import { Link } from 'react-router-dom'

class Following extends React.Component {

    render() {
        
        const { profileOrFollowing, clickMenuItemInFollowing, followingStyle, followerMode, followOr } = this.props
        // 表示中のユーザ情報
        const { followerUsers, followUsers}=this.props
        // ログインしているユーザのフォロー・フォロワー情報
        const { followerUsers: myFollowerUsers, followUsers: myFollowUsers } = this.props.userInfo.user
        // 自分のユーザID
        const { userId: myUserId } = this.props
        return (
            <div>
                {/* 戻るボタン */}

                <div onClick={() => { profileOrFollowing('') }} className="goback pointer" style={{
                    borderRadius: "100%",
                    padding: "5px",
                    position: "absolute",
                    height: "21px",
                    width: "21px",
                    top: "20px",
                    transform: "translate(3px, 0)"
                }}>
                    <img className="blue" src={left} style={{ width: "20px" }} />
                </div>

                {/* フォロー フォロワー */}
                <div style={{ display: "inline-flex", height: "auto", width: "560px" }} className="post-screen">
                    {/* フォロワー フォロー中 */}
                    <div style={{ width: "100%", display: "inline-flex" }}>
                        <div onClick={(e) => clickMenuItemInFollowing(e.target.id)} style={followingStyle[0]} id="follower" className="blue-when-hover profile-item" align="center" >
                            フォロワー
                            </div>
                        <div onClick={(e) => clickMenuItemInFollowing(e.target.id)} style={followingStyle[1]} id="follow" className="blue-when-hover profile-item" align="center" >
                            フォロー中
                            </div>
                    </div>
                </div>
                {/* フォロー フォロワー ユーザ表示 */}
                <div>
                    {(() => {
                        if (followerMode) {
                            return (
                                // <Follower userName="たろう" userId="userid" iconUrl={taro} />
                                <div>
                                    {followerUsers.map(user => (<Follower followOr={followOr} {...user} myFollowUsers={myFollowUsers} myFollowerUsers={myFollowerUsers}  myUserId={myUserId}/>))}
                                </div>
                            )
                        } else {
                            return (
                                // <Follower userName="たろう" userId="userid" iconUrl={taro} />
                                <div>
                                    {followUsers.map(user => (<Follower follow={1} followOr={followOr} {...user} myFollowUsers={myFollowUsers} myFollowerUsers={myFollowerUsers}  myUserId={myUserId}/>))}
                                </div>
                            )
                        }
                    })()}
                </div>
            </div>
        )
    }


}
const Follower = (props) => {
    console.log(props)
    const { userName, userId, iconUrl, follow } = props
    const { myFollowerUsers, myFollowUsers } = props
    // 自分のユーザID
    const {myUserId}=props
    return (
        <div style={{ padding: "10px 15px", borderBottom: "1px solid rgb(48, 60, 67)", display: "inline-flex", height: "auto", width: "-webkit-fill-available" }} className="post-screen">
            {/* <!-- 1ブロック ユーザ画像 --> */}
            <Link to={"/profile/" + userId}><div style={{ marginRight: "10px" }} aria-label="ユーザアイコン">
                <div style={{ marginRight: "5px" }}>
                    <a className="" href="" aria-label="ユーザアイコン">
                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={iconUrl} alt="ユーザアイコン" />
                    </a>
                </div>
            </div></Link>
            {/* <!-- 2ブロック ユーザ名,IDなどの情報 --> */}
            <div>
                {/* <!-- ユーザ名・ユーザID --> */}
                <div >
                    <div stykle={{ width: "max-content" }}>
                        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold", }} href="">{userName}</a>
                    </div>
                    <div >
                        <a style={{ textDecoration: "none", color: "rgb(115, 129, 136)", }} href="">@{userId}</a>
                    </div>
                </div>
            </div>
            {/* フォロー/フォロー中ボタン */}
            {(() => {
                let follow = myFollowUsers.find(user => user.userId == userId) ? 1 : 0;
                console.log('myUserId,userId',myUserId,userId)
                if (myUserId == userId) { 
                    return (
                        <div></div>
                    )
                }
                else if (!follow) {
                    return (<div id="follow" className="edit-prof pointer" style={{
                        borderRadius: "20px",
                        border: "1px solid rgb(29, 161, 242)",
                        // margin: "auto 10px auto 300px",
                        height: "30px",
                        width: "120px",
                        textAlign: "center",
                        lineHeight: "28px",
                        color: "rgb(29, 161, 242)",
                        position: "absolute",
                        transform: "translate(400px, 10px)"
                    }} onClick={(e) => props.followOr(e.target.id, props.memberId)}>
                        フォロー
                    </div>)
                } else {
                    return (<div id="following" className="edit-prof pointer" style={{
                        borderRadius: "20px",
                        // border: "1px solid rgb(29, 161, 242)",
                        // margin: "auto 10px auto 300px",
                        height: "30px",
                        width: "120px",
                        textAlign: "center",
                        lineHeight: "28px",
                        backgroundColor: "rgb(29, 161, 242)",
                        color: "white",
                        position: "absolute",
                        transform: "translate(400px, 10px)"
                    }} onClick={(e) => props.followOr(e.target.id, props.memberId)}>
                        フォロー中
                    </div>)
                }
            })()}

        </div>

    )
}
export default Following