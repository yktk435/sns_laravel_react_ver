import React from 'react'
import siteicon from './images/siteicon.png'
import batsu from '../components/images/batsu2.png'
import pic from '../components/images/pic.png'
import camera from '../components/images/camera.png'
import { menuToggle2 } from '../actions/fetch'
import { Link } from 'react-router-dom';
import left from '../components/images/left.png'
import testpic from '../components/images/user.jpg'
import good from '../components/images/good.png'
import rep from '../components/images/rep.png'
import retweet from '../components/images/retweet.png'
import point from '../components/images/point.png'
import UserPost from '../containers/UserPost'
const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
export class ProfileEditPage extends React.Component {
    handleChangeFile(e) {
        const files = e.target.files;
        // ②createObjectURLで、files[0]を読み込む
        const imageUrl = files.length === 0 ? "" : createObjectURL(files[0]);
        // ③setStateする！
        
        e.target.id == 'filesend-new-icon'
            ? this.props.iconImage(imageUrl)
            : this.props.headerImage(imageUrl)

    }
    render() {
        const { id, name, user_id, icon, header } = this.props.userInfo.user.member
        const { inputUserId, inputPass, inputMail, pushCreateAccountButton, userName, userId, mail, pass, error } = this.props.userInfo.user
        const { inputUserName, saveChanges, menuToggle } = this.props
        const { inputUserNameByEdit } = this.props.userInfo
        const { display } = this.props.userInfo

        const { iconImageUrl, headerImageUrl } = this.props.profile
        const {profileChange}=this.props

        return (
            <div style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                margin: "auto",
                display
            }}>
                <div style={{
                    width: "600px",
                    height: "450px",
                    margin: 'auto',
                    backgroundColor: "rgba(20, 29, 38)",
                    borderRadius: "15px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px"
                }}>

                    {/* <!-- プロフィールを編集 --> */}
                    <div style={{ fontSize: "23px", fontWeight: 'bold', color: "aliceblue", marginLeft: "50px", }}>
                        <div onClick={() => {
                            menuToggle()
                        }} className="goback pointer" style={{
                            borderRadius: "100%",
                            padding: "5px",
                            position: "absolute",
                            height: "21px",
                            width: "21px",
                            top: "13px",
                            left: "20px",
                        }}>
                            <img className="blue" src={batsu} style={{ width: "20px", position: "absolute" }} />
                        </div>
                        {/* <!-- 保存ボタン --> */}
                        <div onClick={() => { profileChange({ input: inputUserNameByEdit }) }}
                            style={{
                                marginBottom: "20px", borderRadius: "30px", height: "20px", textAlign: "center", width: "30px", fontSize: "15px",
                                position: "absolute",
                                top: "16px",
                                right: "40px",
                                padding: "1px 10px 5px 10px",
                            }} className="btn--orange pointer">
                            保存
                    </div>
                        プロフィールを編集</div>
                    {/* ヘッダー画像 アイコン画像追加 */}
                    <div style={{ position: "relative", paddingBottom: "60px" }}>
                        <div style={{ position: "relative" }}>
                            <img src={headerImageUrl ? headerImageUrl : header} className="header-image" alt="ヘッダ画像" style={{ filter: "contrast(0.4)" }} />
                            <label>
                                {/* <!-- ▽見せる部分 --> */}
                                <span class="filelabel" title="ファイルを選択">
                                    <div style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                    }}>
                                        <div className="a-to-block2 send-pic" style={{
                                            borderRadius: "100%",
                                            padding: "10px",
                                            height: "21px",
                                            width: "21px",
                                            marginBottom: "5px",
                                            position: "relative"
                                        }}><img style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                        }} src={camera} className="image-icon" alt="＋画像" />
                                        </div>
                                    </div>

                                </span>
                                {/* <!-- ▽本来の選択フォームは隠す --> */}
                                <input style={{ display: 'none' }} type="file" id="filesend-new-header" name="photo" accesst=".jpg,image/jpeg,image/png" onChange={(e) => this.handleChangeFile(e)} />
                            </label>
                        </div>
                        {/* <!-- ユーザ画像 --> */}
                        <a className="user-image-a" style={{ top: "200px" }}>
                            <img style={{ filter: "contrast(0.4)", backgroundColor: "rgb(20, 29, 38)" }} src={iconImageUrl ? iconImageUrl : icon} alt="ユーザ画像" className="user-image-image-tag" />
                            <label>
                                {/* <!-- ▽見せる部分 --> */}
                                <span class="filelabel" title="ファイルを選択">
                                    <div style={{
                                        position: "absolute",
                                        top: "50%",
                                        left: "50%",
                                        transform: "translate(-50%, -50%)",
                                    }}>
                                        <div className="a-to-block2 send-pic" style={{
                                            borderRadius: "100%",
                                            padding: "10px",
                                            height: "21px",
                                            width: "21px",
                                            marginBottom: "5px",
                                            position: "relative"
                                        }}><img style={{
                                            position: "absolute",
                                            top: "50%",
                                            left: "50%",
                                            transform: "translate(-50%, -50%)",
                                        }} src={camera} className="image-icon" alt="＋画像" />
                                        </div>
                                    </div>

                                </span>
                                {/* <!-- ▽本来の選択フォームは隠す --> */}
                                <input style={{ display: 'none' }} type="file" id="filesend-new-icon" name="photo" accesst=".jpg,image/jpeg,image/png" onChange={(e) => this.handleChangeFile(e)} />
                            </label>
                        </a>
                    </div>

                    {/* 名前 */}
                    <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "1px 10px", margin: "15px", }}>
                        <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)", }}>
                            名前</div>
                        <input placeholder={name} onChange={(e) => inputUserName(e.target.value)} className="text-area" type="text" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)", }} />

                    </div>



                </div>
            </div>
        )
    }
}

export class PostPage extends React.Component {
    handleChangeFile(e) {
        const files = e.target.files;
        // ②createObjectURLで、files[0]を読み込む
        const imageUrl = files.length === 0 ? "" : createObjectURL(files[0]);
        // ③setStateする！
        this.props.imageChoce(imageUrl)
    }
    render() {

        const { iconUrl } = this.props.userInfo.user
        // 投稿に必要なデータをまとめた形

        const requestData = {
            text: this.props.home.text,
            imageFile: this.props.home.imageFile,
        }
        // 関数
        const { menuToggle2, inputPostText, post, clearTextBox, imageClear } = this.props
        // その他
        const { displayPostPage } = this.props.userInfo
        // const {imageUrl}=this.props.home.imageUrl
        return (
            <div style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                margin: "auto",
                display: displayPostPage
                // display: 'block'
            }}>
                <div style={{
                    width: "600px",
                    minHeight: "300px",
                    margin: 'auto',
                    backgroundColor: "rgba(20, 29, 38)",
                    borderRadius: "15px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px"
                }}>
                    {/* バツボタン */}
                    <div onClick={() => menuToggle2()}
                        className="goback pointer" style={{
                            borderRadius: "100%",
                            padding: "10px",
                            height: "21px",
                            width: "21px",
                            marginBottom: "5px"
                        }}>
                        <img className="blue" src={batsu} style={{ width: "20px", position: "absolute" }} />
                    </div>

                    {/* /////////////////////////////////////////////////// */}
                    {/* <!-- ユーザ情報 --> */}
                    <div style={{ display: "inline-flex", borderTop: "1px solid rgb(48, 60, 67)", }}>
                        {/* ユーザアイコン */}
                        <div>
                            <img style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%",
                                padding: "10px"
                            }} className="" src={iconUrl} alt="ユーザアイコン" />
                        </div>
                        {/* <!-- 投稿内容 --> */}
                        <div style={{ display: "block" }}>
                            <div
                                id="post-text2"
                                onFocus={(e) => inputPostText(e.target.innerText)}
                                onBlur={(e) => inputPostText(e.target.innerText)}
                                className="text-area" style={{
                                    padding: "10px",
                                    fontSize: "20px",
                                    margin: "10px 20px 0 20px",
                                    width: "440px",
                                    border: "none",
                                    lineHeight: "25px"
                                }} contentEditable="true" ></div>
                            {(() => {
                                if (this.props.home.imageUrl != undefined) {
                                    return (
                                        <div style={{ position: "relative", margin: "5px 15px 0 0", padding: "10px", textAlign: "center", borderRadius: "20px" }} aria-label="投稿した写真を表示">
                                            <img src={this.props.home.imageUrl} style={{ width: "90%", borderRadius: "20px", height: "250px", objectFit: "cover" }} />
                                            <img className="pointer" onClick={() => imageClear()} src={batsu} style={{ backgroundColor: "black", borderRadius: "100%", top: "5px", left: "10px", position: "absolute", width: "20px" }} />
                                        </div>
                                    )
                                }
                            })()}
                        </div>

                    </div>

                    {/* /////////////////////////////////////////////////// */}

                    {/* 投稿ボタン写真追加アイコン */}
                    <div style={{ display: "block", width: "inherit" }}>
                        <div style={{
                            display: "flex",
                            marginTop: "15px",
                            marginBottom: "5px",
                            marginRight: "10px",

                        }}>
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

                                <a onClick={() => {
                                    document.querySelector('#post-text2').innerText = ''
                                    post(requestData)
                                    clearTextBox()
                                    menuToggle2()
                                }} style={{ margin: "0 5px", }} className="btn btn--orange btn--radius" aria-label="投稿ボタン">投稿</a>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        )
    }

}

export class Article extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        // if (nextProps.router!=null && nextState.router!=null) { 
        //     if(nextProps.router.location.pathname!=nextState.router.location.pathname)return
        // }
        return true;
    }
    componentWillReceiveProps(nextProps, nextContext) {
    }
    componentWillMount() {
        // その記事の情報を取得する
        const articleId = this.props.match.params.articleId
        this.props.getArticleInfo(articleId)
    }
    render() {
        // 投稿した記事情報とそれを投稿したユーザ情報
        const { article, member } = this.props.otherPage.article
        // コメント記事軍とそれを投稿したユーザ軍
        const { articles, members } = this.props.otherPage.comment


        // 表示している記事関連
        const { id: memberId, name, user_id, icon } = member
        const { id: articleId, created_at, content, postImageUrl } = article
        // 表示している記事の返信記事とそのユーザ情報
        const { comments, commentedMembers } = this.props.otherPage.article
        // 関数
        const { goBack, commentToggle, getArticleInfo } = this.props



        const hensinId = user_id



        // let icon = testpic
        // let user_id = "user_id"
        // let created_at = "2020年"
        // let content = "内容"
        // let postImageUrl = testpic
        // let name = "name"

        return (
            <div>
                {/* 戻るボタン */}
                <div onClick={() => { goBack() }} className="goback pointer" style={{
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

                {/* ここから記事情報 */}
                <div className="main-container" style={{ overflow: "auto", position: "relative" }}>
                    {/* main */}
                    <div>
                        {/* 削除などのメニューボタン */}
                        <div onClick={() => { goBack() }} className="goback pointer" style={{
                            borderRadius: "100%",
                            padding: "5px",
                            position: "absolute",
                            height: "21px",
                            width: "21px",
                            top: "8px",
                            right: "10px"
                        }}>
                            <img className="blue" src={point} style={{ width: "20px" }} />
                        </div>
                        {/* ユーザ情報 */}
                        <div style={{ display: "inline-flex", width: "inherit" }}>
                            {/* ユーザアイコン */}
                            <div style={{ margin: "0 10px" }} aria-label="ユーザアイコン">
                                <div style={{ margin: "10px 0 0 5px" }}>
                                    <a className="" href="" aria-label="ユーザアイコン">
                                        <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={icon} alt="ユーザアイコン" />
                                    </a>
                                </div>
                            </div>
                            {/* ブロック2 */}
                            <div style={{ display: "block", paddingTop: "10px", width: "100%", position: "relative" }}>

                                {/* <!-- ユーザ名 --> */}
                                <div>
                                    <div style={{ float: "left", marginLeft: "5px" }}>
                                        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} href="">{name}</a>
                                    </div>
                                    <div style={{ float: "left", margin: "0 15px" }}>
                                        <Link to={"/user/" + user_id} style={{ textDecoration: "none" }}><div style={{ color: " rgb(115, 129, 136)" }} href="">@{user_id}</div></Link>
                                    </div>
                                    <div style={{ color: "rgb(115, 129, 136)", marginLeft: "15px", width: "600px" }}>{created_at}</div>

                                </div>
                                {/* <!-- 投稿内容 --> */}
                                <div>

                                    <div className="font" style={{ padding: "5px 0", paddingRight: "50px", display: "inline-block" }} aria-label="投稿した文字を表示">{content}</div>
                                    {(() => {
                                        // 写真があれば表示
                                        if (postImageUrl != null) {
                                            return (
                                                <div style={{ padding: "5px 0" }} aria-label="投稿した写真を表示">
                                                    <a href="" >
                                                        <img src={postImageUrl} alt="投稿した写真を表示" style={{ width: "450px", borderRadius: "5%" }} />
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })()}


                                </div>

                            </div>
                        </div>
                        <div>
                            {/* いいねボタンなど */}
                            <div style={{ width: "100%", display: "inline-flex", paddingBottom: "2px", borderBottom: "10px solid rgb(48, 60, 67)" }}>
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
                                    <div className="blue-hover rep-button" >
                                        <img src={good} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)" }} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    {/* 返信 */}
                    <div style={{ overflow: "auto" }}>
                        {articles.map(article => <CommentParts members={members} article={article} commentToggle={commentToggle} getArticleInfo={getArticleInfo} hensinId={hensinId} />)}

                    </div>


                </div>
            </div>
        )
    }

}

export const CommentParts = (props) => {


    // 返信した維持の情報
    const { id: articleId, created_at, content, postImageUrl, member_id } = props.article

    const commentedMember = props.members.find(i => i.id == member_id)
    // 返信したユーザの情報
    const { name, user_id, icon } = commentedMember

    // 関数
    const { commentToggle, getArticleInfo } = props
    // 特殊
    const { hensinId } = props

    return (
        <div className="article-hover">
            <Link to={"/status/" + articleId} style={{ textDecoration: "none", color: "white" }}>
                <div style={{ padding: "10px 0", display: "inline-flex", height: "auto", width: "560px" }} className="post-screen">

                    {/* ブロック1 */}
                    <div style={{ margin: "0 10px" }} aria-label="ユーザアイコン">
                        <div style={{ margin: "5px" }}>
                            <a className="" href="" aria-label="ユーザアイコン">
                                <img style={{ width: "50px", height: "50px", borderRadius: "50%" }} className="" src={icon} alt="ユーザアイコン" />
                            </a>
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
                                <Link to={"/user/" + user_id} style={{ textDecoration: "none" }}><div style={{ color: " rgb(115, 129, 136)" }} href="">@{user_id}</div></Link>
                            </div>
                            <div style={{ color: "rgb(115, 129, 136)", marginLeft: "15px" }}>{created_at}</div>
                        </div>
                        {/* <!-- 投稿内容 --> */}
                        <div>

                            <div style={{ color: "rgb(115, 129, 136)", marginLeft: "15px" }}>返信先:<div style={{ display: "inline-flex", margin: "0 2px" }}>
                                <a style={{ textDecoration: "none", color: "rgb(29, 161, 242)" }} >{hensinId}</a>
                            </div>
                                    さん</div>

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

                </div>
            </Link>
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
                    <div className="blue-hover rep-button" >
                        <img src={good} style={{ width: "20px", position: "absolute", transform: "translate(-50%, 50%)" }} />
                    </div>
                </div>
            </div>
        </div>


    )
}

export class CommentPage extends React.Component {

    handleChangeFile(e) {
        const files = e.target.files;
        // ②createObjectURLで、files[0]を読み込む
        const imageUrl = files.length === 0 ? "" : createObjectURL(files[0]);
        // ③setStateする！
        this.props.imageChoce(imageUrl)
    }
    render() {



        const { commentDisplay } = this.props.userInfo
        // 関数
        const { commentToggle, inputPostText, postRep, clearTextBox, imageClear } = this.props

        const { iconUrl } = this.props.userInfo.user
        // 投稿に必要なデータをまとめた形
        const requestData = {
            text: this.props.home.text,
            imageFile: this.props.home.imageFile,
        }

        const { id: memberId, name, user_id, icon } = this.props.otherPage.article.member
        const { id: articleId, created_at, content, postImageUrl } = this.props.otherPage.article.article
        return (
            <div style={{
                backgroundColor: "rgb(255,255,255,0.2)",
                position: "absolute",
                top: "0",
                right: "0",
                bottom: "0",
                left: "0",
                margin: "auto",
                display: commentDisplay
                // display: 'block'
            }}>
                <div style={{
                    width: "600px",
                    minHeight: "300px",
                    margin: 'auto',
                    backgroundColor: "rgba(20, 29, 38)",
                    borderRadius: "15px",
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    padding: "10px"
                }}>
                    {/* バツボタン */}
                    <div onClick={() => commentToggle()}
                        className="goback pointer" style={{
                            borderRadius: "100%",
                            padding: "10px",
                            height: "21px",
                            width: "21px",
                            marginBottom: "5px"
                        }}>
                        <img className="blue" src={batsu} style={{ width: "20px", position: "absolute" }} />
                    </div>

                    {/* ここから返信 */}
                    <div style={{ overflow: 'auto', maxHeight: "800px" }}>
                        {/* 返信される側 */}
                        <div style={{ position: "relative", display: "inline-flex", borderTop: "1px solid rgb(48, 60, 67)", padding: "10px" }}>

                            {/* ユーザアイコン */}
                            <div style={{ float: "left" }}>
                                <img style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                }} className="" src={icon} alt="ユーザアイコン" />
                                {/* 縦線 */}
                                <div style={{
                                    height: "90%",
                                    backgroundColor: "rgb(61, 84, 102)",
                                    width: "2px",
                                    margin: "0 auto",
                                    zIndex: "1"
                                }}></div>
                            </div>

                            {/* ユーザ情報/投稿内容 */}
                            <div>
                                <div>
                                    <div style={{ float: "left", marginLeft: "5px" }}>
                                        <a style={{ textDecoration: "none", color: "white", fontWeight: "bold" }} href="">{name}</a>
                                    </div>
                                    <div style={{ float: "left", margin: "0 15px" }}>
                                        <Link to={"/user/" + user_id} style={{ textDecoration: "none" }}><div style={{ color: " rgb(115, 129, 136)" }} href="">@{user_id}</div></Link>
                                    </div>
                                    <div style={{ color: "rgb(115, 129, 136)", marginLeft: "15px", width: "600px" }}>{created_at}</div>
                                    {/* 投稿内容 */}
                                    <div className="font" style={{ padding: "10px", display: "inline-block" }} aria-label="投稿した文字を表示">{content}</div>
                                    {(() => {
                                        // 写真があれば表示
                                        if (postImageUrl != null) {
                                            return (
                                                <div style={{ padding: "5px 0" }} aria-label="投稿した写真を表示">
                                                    <a href="" >
                                                        <img src={postImageUrl} alt="投稿した写真を表示" style={{ width: "450px", borderRadius: "5%" }} />
                                                    </a>
                                                </div>
                                            )
                                        }
                                    })()}
                                </div>
                            </div>
                        </div>
                        {/*返信する側 */}
                        <div style={{ display: "inline-flex", }}>
                            {/* ユーザアイコン */}
                            <div style={{ zIndex: "99" }}>
                                <img style={{
                                    width: "50px",
                                    height: "50px",
                                    borderRadius: "50%",
                                    padding: "10px"
                                }} className="" src={iconUrl} alt="ユーザアイコン" />
                            </div>
                            {/* <!-- 投稿内容 --> */}
                            <div style={{ display: "block" }}>
                                <div
                                    id="post-text2"
                                    onFocus={(e) => inputPostText(e.target.innerText)}
                                    onBlur={(e) => inputPostText(e.target.innerText)}
                                    className="text-area" style={{
                                        padding: "0",
                                        fontSize: "20px",
                                        // margin: "10px 20px 0 20px",
                                        marginTop: "10px",
                                        width: "440px",
                                        border: "none",
                                        lineHeight: "25px"
                                    }} contentEditable="true" ></div>
                                {(() => {
                                    if (this.props.home.imageUrl != undefined) {
                                        return (
                                            <div style={{ position: "relative", margin: "5px 15px 0 0", padding: "10px", textAlign: "center", borderRadius: "20px" }} aria-label="投稿した写真を表示">
                                                <img src={this.props.home.imageUrl} style={{ width: "90%", borderRadius: "20px", height: "250px", objectFit: "cover" }} />
                                                <img className="pointer" onClick={() => imageClear()} src={batsu} style={{ backgroundColor: "black", borderRadius: "100%", top: "5px", left: "10px", position: "absolute", width: "20px" }} />
                                            </div>
                                        )
                                    }
                                })()}
                            </div>

                        </div>

                        {/* /////////////////////////////////////////////////// */}

                        {/* 投稿ボタン写真追加アイコン */}
                        <div style={{ display: "block", width: "inherit" }}>
                            <div style={{
                                display: "flex",
                                marginTop: "15px",
                                marginBottom: "5px",
                                marginRight: "10px",

                            }}>
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

                                    <a onClick={() => {
                                        document.querySelectorAll('#post-text2')[1].innerText = ''
                                        postRep(articleId, this.props.home.text)
                                        clearTextBox()
                                        commentToggle()
                                    }} style={{ margin: "0 5px", }} className="btn btn--orange btn--radius" aria-label="投稿ボタン">投稿</a>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>

        )
    }
}