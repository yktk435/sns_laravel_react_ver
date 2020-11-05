import React from 'react'
import pic from '../images/pic.png'
import send from '../images/send.png'
import batsu from '../images/batsu.png'
const createObjectURL = (window.URL || window.webkitURL).createObjectURL || window.createObjectURL;
class MessageArea extends React.Component {
    handleChangeFile(e) {
        const files = e.target.files;
        // ②createObjectURLで、files[0]を読み込む
        const imageUrl = files.length === 0 ? "" : createObjectURL(files[0]);
        // ③setStateする！
        this.props.imageChoce(imageUrl)
    }
    render() {
        const { myUserId } = this.props

        const { display } = this.props
        const { messages, members } = this.props
        // やり取りしているユーザID
        const user_id = this.props.match.params.id

        const member = members.find(member => member.user_id == user_id)
        if (member == undefined) return (<div>読込中</div>)
        const mainMessage = messages.find(message => (message[0].from_id == member.id || message[0].to_id == member.id))

        const { imageUrl } = this.props
        // 関数
        const { imageClear, inputPostText, postDm, clearTextBox } = this.props
        // 送信するテキスト
        const {text}=this.props

        
        return (
            <div className="main right border" style={{ height: "100vh", width: "350px", display, position: "relative" }}>
                {/*  送信先のユーザ情報 */}
                <div class="setting-outer" style={{ height: "30px" }}>
                    <div class="setting-menu-inner">@{user_id}</div>
                </div>
                {/* メッセージ部分 */}
                <div style={{ overflow: "auto", height: "90vh" }}>
                    <div style={{ padding: "20px 15px 50px 15px" }}>
                        {mainMessage.map(message => <MessageParts message={message} members={members} myUserId={myUserId} />)}
                    </div>
                </div>
                {/* 送信部分 */}
                <div style={{ backgroundColor: "rgb(20, 29, 38)", position: "absolute", bottom: "0", width: "100%", padding: "10px 0", borderTop: "3px solid rgb(48, 60, 67)" }}>
                    {/* 画像追加ボタン */}
                    <label>
                        {/* <!-- ▽見せる部分 --> */}
                        <span class="filelabel" title="ファイルを選択">
                            <div style={{float:"left"}}>
                                <div className="goback pointer" style={{
                                    borderRadius: "100%",
                                    padding: "10px",
                                    height: "21px",
                                    width: "21px",
                                    marginBottom: "5px"
                                }}><img src={pic} style={{width:"22px",height:"22px"}} className="image-icon" alt="＋画像" />
                                </div>
                            </div>
                        </span>
                        {/* <!-- ▽本来の選択フォームは隠す --> */}
                        <input  type="file" id="filesend-dm" name="photo" accesst=".jpg,image/jpeg,image/png" onChange={(e) => this.handleChangeFile(e)} />
                    </label>
                    {(() => { 
                        if (imageUrl) return (
                            <div style={{position:"relative"}}>
                                <img src={imageUrl} style={{ width: "50%", borderRadius: "30px" }} />
                            <img className="pointer" onClick={() => imageClear()} src={batsu} style={{ backgroundColor: "black", borderRadius: "100%", top: "10px", left: "185px", position: "absolute", width: "20px" }} />
                            </div>
                            
                        )
                    })()}
                    <img/>
                    
                    {/* テキスト入力 */}
                    <div style={{ float: "left" }}>
                        <input id="dm-input" onChange={(e)=>inputPostText(e.target.value)} style={{ backgroundColor: "rgb(32, 45, 46)", padding: "5px 10px", border: "1px solid transparent", borderRadius: "100px", fontSize: "12px" }} className="text-area" placeholder="新しいメッセージを入力" />
                    </div>
                    {/* 送信ボタン */}
                    <div onClick={() => {
                        postDm({ targetId:member.id,text, imageUrl })
                        imageClear()
                        clearTextBox()
                        document.querySelector('#dm-input').value=''
                    }} style={{ float: "left", position: "relative" }}>
                        <div className="goback pointer" style={{
                            borderRadius: "100%",
                            padding: "10px",
                            height: "21px",
                            width: "21px",
                            marginBottom: "5px"
                        }}>
                            <img className="blue" src={send} style={{ width: "20px", position: "absolute" }} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const MessageParts = (props) => {
    const { myUserId } = props
    const { message, image } = props.message
    const { members } = props
    const member = members.find(member => member.id == props.message.from_id) == undefined
        ? { user_id: myUserId }
        : members.find(member => member.id == props.message.from_id)
    const { user_id } = member


    // ここからはデザイン面
    const textAlign = user_id == myUserId
        ? "right"
        : "left"
    const borderRadius = user_id == myUserId
        ? "50px 50px 0 50px"
        : "50px 50px 50px 0"
    const backgroundColor = user_id == myUserId
        ? " rgb(29, 161, 242)"
        : "rgb(61, 84, 102)"
    const margin = user_id == myUserId
        ? "0 0 0 auto"
        : "0 auto 0 0 "
    const padding = "0 0 20px 0";
    return (
        <div style={{ padding, width: "100%", textAlign }}>
            <div style={{ margin, borderRadius, backgroundColor, maxWidth: "70%" }} className="message">{message=='undefined'?'':message}</div>
            {(() => {
                // 写真があれば表示
                if (image != null) {
                    return (
                        <div style={{ padding: "5px 0" }} aria-label="投稿した写真を表示">
                            <a href="" >
                                <img src={image} alt="投稿した写真を表示" style={{ maxWidth: "80%", objectFit: "cover", borderRadius }} />
                            </a>
                        </div>
                    )
                }
            })()}
        </div>

    )
}

export default MessageArea

