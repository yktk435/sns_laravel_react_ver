import React from 'react'
import { Link } from 'react-router-dom';
import good from '../../images/good.png'
import rep from '../../images/rep.png'
import retweet from '../../images/retweet.png'

import left from '../../images/left.png'

const UserPost = (props) => {
    
    // 記事情報
    const { created_at, content, id: articleId, postImageUrl } = props.article
    // それを投稿したユーザ情報
    const { id: memberId, icon, header, name, user_id } = props.member
    // 返信先のユーザID
    let commentInfo = props.location.pathname.match(/home/)
        ? props.commentArticleIds
        :props.commentInfo;
    
    // 関数
    const { commentToggle, getArticleInfo, goodToggle } = props


    const { goodArticleIds, commentArticleIds } = props
    let filter = "invert(10%) sepia(10%) saturate(100000%) contrast(60%)"
    goodArticleIds.some(i => i.article.id == articleId)
        ? filter = "invert(10%) sepia(10%) saturate(100000%) contrast(60%)"
        : filter = ""





    return (
        <div className="article-hover">
            <Link to={"/status/" + articleId} style={{ textDecoration: "none", color: "white" }}><div style={{ padding: "10px 0", display: "inline-flex", height: "auto", width: "560px" }} className="post-screen">

                {/* ブロック1 */}
                <div style={{ margin: "0 10px" }} aria-label="ユーザアイコン">
                    <div style={{ margin: "5px" }}>
                    <Link to={"/profile/" + user_id}><a className="" aria-label="ユーザアイコン">
                            <img style={{ width: "50px", height: "50px", borderRadius: "50%" ,objectFit:"cover",objectPosition: "20% 45%"}} className="" src={icon} alt="ユーザアイコン" />
                        </a></Link>
                    </div>
                </div>
                {/* ブロック2 */}
                <div style={{ display: "block", width: "inherit" }}>

                    {/* <!-- ユーザ名 --> */}
                    <div>
                        <div style={{ float: "left", marginLeft: "5px" }}>
                            <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} href="">{name}</a>
                        </div>
                        <div style={{ float: "left", margin: "0 15px" }}>
                            <Link to={"/profile/" + user_id} style={{ textDecoration: "none" }}><div style={{ color: " rgb(115, 129, 136)" }} href="">@{user_id}</div></Link>
                        </div>
                        <div style={{ color: "rgb(115, 129, 136)", marginLeft: "15px" }}>{created_at}</div>
                    </div>
                    {/* <!-- 投稿内容 --> */}
                    <div>
                        {(() => {
                            const comment=commentInfo.find(i=>i.articleId==articleId)
                            if (comment) {
                                return (
                                    <div style={{ color: "rgb(115, 129, 136)", marginLeft: "15px" }}>返信先:<div style={{ display: "inline-flex", margin: "0 2px" }}>
                                        <Link to={'/profile/'+comment.userId}><a style={{ textDecoration: "none", color: "rgb(29, 161, 242)" }} >{comment.userId}</a></Link>
                                    </div>
                                    さん</div>
                                )
                            }
                        })()}
                        <div className="font" style={{ padding: "5px 0", paddingRight: "50px", display: "inline-block" }} aria-label="投稿した文字を表示">{content}</div>
                        {(() => {
                            // 写真があれば表示
                            if (postImageUrl != null) {
                                return (
                                    <div style={{ padding: "5px 0" }} aria-label="投稿した写真を表示">
                                        <a href="" >
                                            <img src={postImageUrl} alt="投稿した写真を表示" style={{ width: "450px", height: "250px", objectFit: "cover", borderRadius: "5%" }} />
                                        </a>
                                    </div>
                                )
                            }
                        })()}


                    </div>

                </div>

            </div></Link>
            {/* いいねボタンなど */}
            <div style={{ width: "100%", display: "inline-flex", paddingBottom: "2px", borderBottom: "1px solid rgb(48, 60, 67)" }}>
                <div id="prof-menu" className="post-button" align="center" >
                    <div onClick={() => { commentToggle(); getArticleInfo(articleId) }} className="blue-hover rep-button" >
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
                    <div onClick={() => { goodToggle(articleId) }} className="blue-hover rep-button" >
                        <img src={good} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)", filter }} />
                    </div>
                </div>
            </div>
        </div>


    )
}
export default UserPost;