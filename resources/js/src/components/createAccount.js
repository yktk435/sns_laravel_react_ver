import React from 'react'
import siteicon from './images/siteicon.png'
class CreateAccount extends React.Component {
    render() {
        const { inputUserName, inputUserId, inputPass, inputMail, pushCreateAccountButton, userName, userId, mail, pass, error } = this.props
        
    return (
        <div style={{
            backgroundColor: "rgb(20, 29, 38)",
            position: "absolute",
            top: "0",
            right: "0",
            bottom: "0",
            left: "0",
            margin: "auto",
            width: "600px",
            height: "350px",
            borderRadius: "15px",
        }}>
            
            {/* <!-- サイトアイコン --> */}
            <div style={{ textAlign: "center", }}>
                <img src={siteicon} style={{ width: "30px", padding: "15px" }} alt="" />
            </div>
            {/* <!-- アカウント作成 --> */}
            <div style={{ fontSize: "23px", fontWeight: 'bold', color: "aliceblue", marginLeft: "50px", }}>アカウントを作成</div>
            
            {/* 名前 */}
            <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "1px 10px", margin: "15px", }}>
                <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)", }}>
                    名前</div>
                <input onChange={(e) => inputUserName(e.target.value)} className="text-area" type="text" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)", }} />

            </div>
            {/* メールアドレス */}
            <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "1px 10px", margin: "15px", }}>
                <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)", }}>
                    メールアドレス</div>
                <input onChange={(e) => inputMail(e.target.value)} className="text-area" type="text" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)", }} />

            </div>
            {/* <!-- ユーザ名 --> */}
            <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "1px 10px", margin: "15px", }}>
                <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)", }}>
                    ユーザID</div>
                <input onChange={(e) => inputUserId(e.target.value)} className="text-area" type="text" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)", }} />

            </div>
            {/* <!-- パスワード --> */}
            <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "1px 10px", margin: "15px", }}>
                <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)", }}>パスワード</div>
                <input onChange={(e) => inputPass(e.target.value)} className="text-area" type="password" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)", }} />
            </div>
            {(() => {
                if (error) return (
                    <div style={{color:"red"}}>{error}</div>
                )
            })()}
            {/* <!-- アカウント作成ボタン --> */}
            <div style={{ marginBottom: "20px", }}>
                <a className="pointer" onClick={()=>{pushCreateAccountButton({userName,userId,mail,pass})}} className="a-to-block2 btn--orange"  style={{ borderRadius: "30px", height: "50px", textAlign: "center", width: "550px", margin: "0 auto", }}>
                    <p style={{ padding: "10px", }}>アカウント作成</p>
                </a>
            </div>
        </div>
    )
    }
}

export default CreateAccount