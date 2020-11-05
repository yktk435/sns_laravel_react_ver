import React from 'react'
import { Link } from 'react-router-dom';

import UserPost from '../../../containers/UserPost'

// 画像
import pic from '../../images/pic.png'
import batsu from '../../images/batsu.png'
import userImageUrl from '../../images/user.jpg'
import good from '../../images/good.png'
import rep from '../../images/rep.png'
import retweet from '../../images/retweet.png'

const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
class Home extends React.Component {
    componentWillMount() {
        // 古いトークンのままにやろうとしているからエラーになる
        this.props.getTimeLine();
    }

    handleChangeFile(e) {
        const files = e.target.files;
        // ②createObjectURLで、files[0]を読み込む
        const imageUrl = files.length === 0 ? "" : createObjectURL(files[0]);
        // ③setStateする！
        this.props.imageChoce(imageUrl)
    }
    render() {
        const { articles, memberIds } = this.props.timeLineInfo
        const {commentToggle,repInfo,getArticleInfo}=this.props
        return (
            <div className="main-container" style={{ overflow: "auto" }}>
                {/* みんなの投稿 */}
                <div style={{ width: "100%", display: "inline-flex", borderBottom: "5px solid rgb(48, 60, 67)" }} >
                    {/* <!-- ユーザ情報 --> */}
                    <div style={{ margin: "5px" }}>
                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" ,objectFit:"cover",objectPosition: "20% 45%"}} className="" src={this.props.iconUrl} alt="ユーザアイコン" />
                    </div>
                    {/* <!-- 投稿内容 --> */}
                    <div style={{ display: "block", width: "inherit" }}>
                        <div id="post-text" onFocus={(e) => this.props.inputPostText(e.target.innerText)} onBlur={(e) => this.props.inputPostText(e.target.innerText)} className="text-area" style={{ padding: "10px", fontSize: "20px", margin: "10px 20px 0 20px", width: "440px" }} contentEditable="true" ></div>
                        {(() => {
                            if (this.props.imageUrl != undefined) {
                                return (
                                    <div style={{ position: "relative", margin: "5px 15px 0 0", padding: "10px", textAlign: "center", borderRadius: "20px" }} aria-label="投稿した写真を表示">
                                        <img src={this.props.imageUrl} style={{ width: "90%", borderRadius: "20px", height: "250px", objectFit: "cover" }} />
                                        <img className="pointer" onClick={() => this.props.imageClear()} src={batsu} style={{ backgroundColor: "black", borderRadius: "100%", top: "5px", left: "10px", position: "absolute", width: "20px" }} />
                                    </div>
                                )
                            }
                        })()}

                        <div style={{ display: "flex", marginTop: "15px", marginBottom: "5px", marginRight: "10px" }}>
                            <div style={{ display: "flex", marginLeft: "auto" }}>
                                <label>
                                    {/* <!-- ▽見せる部分 --> */}
                                    <span class="filelabel" title="ファイルを選択">
                                        <div>
                                            <a className="a-to-block2 send-pic" style={{
                                                marginTop: "5px",
                                                textAlign: "center",
                                                borderRadius: "100%",
                                                marginRight: "20px"
                                            }}><img src={pic} className="image-icon" alt="＋画像" />
                                            </a>
                                        </div>

                                    </span>
                                    {/* <!-- ▽本来の選択フォームは隠す --> */}
                                    <input type="file" id="filesend" name="photo" accesst=".jpg,image/jpeg,image/png" onChange={(e) => this.handleChangeFile(e)} />
                                </label>

                                {/* <a style={{ margin: "0 5px" }} className="icon-link simple-icon" href="" aria-label="写真追加">
                                    <img className="image-icon" src={pic} alt="写真追加アイコン" />
                                </a> */}
                                <a onClick={() => {
                                    document.querySelector('#post-text').innerText=''
                                    this.props.post(this.props.requestData, this.props.accessToken)
                                    this.props.clearTextBox()
                                }} style={{ margin: "0 5px", }} className="btn btn--orange btn--radius" aria-label="投稿ボタン">投稿</a>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    {articles.map(article => (<UserPost article={article} member={memberIds[article.member_id]} />))}

                </div>
            </div >
        )
    }

}

export default Home