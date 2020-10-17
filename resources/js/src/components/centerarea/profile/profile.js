import React from 'react'
import { Link } from 'react-router-dom'

import header from '../../images/user_header.jpg'
import user from '../../images/user.jpg'
import good from '../../images/good.png'
import heart from '../../images/heart.png'
import rep from '../../images/rep.png'
import retweet from '../../images/retweet.png'
class Profile extends React.Component {
    componentWillMount() {
        this.props.getArticles(this.props.accessToken)
    }
    render() {
        const { userName, userId, iconUrl, headerUrl, postObj, articles } = this.props

        console.log('============================================================================', postObj)
        console.log(articles)

        return (
            <div className="main-container" style={{ overflow: "auto" }}>
                <div style={{ position: "relative" }}>
                    {/* <!-- ヘッダ画像 --> */}
                    < div >
                        <a href="">
                            <img src={headerUrl} className="header-image" alt="ヘッダ画像" />
                        </a>
                        {/* <!-- ユーザ画像 --> */}
                        <a href="" className="user-image-a">
                            <img src={iconUrl} alt="ユーザ画像" className="user-image-image-tag" /></a>

                    </div>
                    {/* <!-- プロフィール部分 --> */}
                    <div style={{ padding: "15px", borderBottom: "1px solid rgb(48, 60, 67)" }}>
                        {/* <!-- プロフィール編集ボタン --> */}
                        <div className="icon-container" style={{ width: "170px", margin: "0px 0px 0px auto", height: "40px" }}>
                            <a className="a-to-block edit-prof" href="" style={{ borderRadius: "100px", position: "relative", textDecoration: "none", border: "1px solid rgba(29,161,242,1.00)", color: "rgba(29,161,242,1.00)" }}>
                                <div className="" style={{ position: "absolute", top: "0", right: "0", bottom: "0", left: "0", margin: "auto", width: "80%", height: "20px", textAlign: "center", fontSize: "15px", fontWeight: "bold" }}>プロフィールを編集</div>
                            </a>
                        </div>
                        {/* <!-- ユーザ名とユーザIDを表示 --> */}
                        <div>
                            {/* <!-- ユーザ名 --> */}
                            <div style={{ paddingTop: "10px", fontSize: "20px", fontWeight: "bold" }}>{userName}</div>
                            {/* <!-- ユーザID --> */}
                            <div style={{ color: "rgb(115, 129, 136)", marginTop: "5px" }}>@{userId}</div>
                        </div>
                        {/* <!-- 投稿・返信・メディア(写真)・いいね(ぐっと)を表示 --> */}
                        <div style={{ width: "100%", display: "inline-flex" }}>
                            <div id="post" className="blue-when-hover profile-item" style={this.props.style[0]} align="center" onClick={(e) => this.props.clickMenuItem(e.target.id)}>
                                投稿
                                    </div>
                            <div id="rep" className="blue-when-hover profile-item" style={this.props.style[1]} align="center" onClick={(e) => this.props.clickMenuItem(e.target.id)}>
                                返信
                                    </div>
                            <div id="pic" className="blue-when-hover profile-item" style={this.props.style[2]} align="center" onClick={(e) => this.props.clickMenuItem(e.target.id)}>
                                写真
                                    </div>
                            <div id="good" className="blue-when-hover profile-item" style={this.props.style[3]} align="center" onClick={(e) => this.props.clickMenuItem(e.target.id)}>
                                ぐっと
                                    </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ユーザ投稿一覧 --> */}
                <div></div>
                {/* {(() => {
                    console.log('==============================', postObj)
                    if (typeof postObj === 'undefined') {
                        return (<p>読込中</p>)
                    } else {
                        return (
                            <div>
                                {postObj.map(post => (<UserPost {...post} />))}
                            </div>
                        )

                    }

                })()} */}
                {/* <PostArea postObj={postObj} /> */}
                {(() => {
                    switch (this.props.menuMode) {
                        case "post":
                            return (<PostArea articles={articles} />)
                            break;
                        case "rep":
                            break;
                        case "pic":
                            break;
                        case "good":
                            break;
                    }
                })()}



            </div>
        )
    }
}

const PostArea = (props) => {
    
    if (typeof props.articles === 'undefined') {
        return (<p>読込中</p>)
    } else {
        return (
            <div>
                {props.articles.map(article => {if(article.id!=undefined)return (<UserPost {...article}/>)
                })}
            </div>
        )
    }
}

const UserPost = (props) => {
    const { id, created_at, content, user_id, name, header, icon ,url} = props
    console.log(id,created_at,content,user_id,name,header ,icon)
    return (
        <div>
            <div style={{ padding: "10px 15px", display: "inline-flex", height: "auto", width: "560px" }} className="post-screen">

                {/* ブロック1 */}
                <div style={{ marginRight: "10px" }} aria-label="ユーザアイコン">
                    <div style={{ margin: "5px" }}>
                        <a className="" href="" aria-label="ユーザアイコン">
                            <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={icon} alt="ユーザアイコン" />
                        </a>
                    </div>
                </div>
                {/* ブロック2 */}
                <div style={{ display: "block" }}>

                    {/* <!-- ユーザ名 --> */}
                    <div>
                        <div style={{ float: "left", marginLeft: "5px" }}>
                            <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} href="">{name}</a>
                        </div>
                        <div style={{ float: "left", margin: "0 15px" }}>
                            <Link to={"/user/" + user_id} style={{ textDecoration: "none" }}><a style={{ textDecoration: "none", color: " rgb(115, 129, 136)" }} href="">@{user_id}</a></Link>
                        </div>
                        <div style={{ color: "rgb(115, 129, 136)", marginLeft: "15px" }}>{created_at}</div>
                    </div>
                    {/* <!-- 投稿内容 --> */}
                    <div>

                        <div className="font" style={{ padding: "5px 0", paddingRight: "50px", display: "inline-block" }} aria-label="投稿した文字を表示">{content}</div>
                        {(() => {
                            // 写真があれば表示
                            if (url != null) {
                                return (
                                    <div style={{ padding: "5px 0" }} aria-label="投稿した写真を表示">
                                        <a href="" >
                                            <img src={url} alt="投稿した写真を表示" style={{ width: "90%", borderRadius: "5%" }} />
                                        </a>
                                    </div>
                                )
                            }
                        })()}


                    </div>

                </div>

            </div>
            {/* いいねボタンなど */}
            <div style={{ width: "100%", display: "inline-flex", paddingBottom: "2px", borderBottom: "1px solid rgb(48, 60, 67)" }}>
                <div id="prof-menu" className="post-button" align="center" >
                    <div className="blue-hover rep-button" >
                        <img src={rep} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)" }} />
                    </div>

                </div>
                <div id="prof-menu" className="post-button" align="center" >
                    <div className="blue-hover rep-button" >
                        <img src={retweet} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)" }} />
                    </div>
                </div>
                <div id="prof-menu" className="post-button" align="center" >
                    <div className="blue-hover rep-button" >
                        <img src={rep} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)" }} />
                    </div>

                </div>
                <div id="prof-menu" className="post-button" align="center" >
                    <div className="blue-hover rep-button" >
                        <img src={good} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)" }} />
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Profile