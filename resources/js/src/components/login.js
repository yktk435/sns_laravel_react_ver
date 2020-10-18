import React from 'react'
import { Link } from 'react-router-dom'
import siteicon from '../components/images/siteicon.png'

const Login = (props) => {
    console.log('==============================')
    console.log(props)
    const { inputUserName, inputPass, startLogin, userId, pass } = props
    return (
        <div style={{ padding: "10px" }}>
            <div aria-label="外側" style={{ margin: "0 auto", width: "600px" }}>
                {/* <!-- サイトアイコン --> */}
                <div style={{ padding: "10px" }}>
                    <img src={siteicon} alt="" style={{ width: "40px", display: "block", margin: "0 auto" }} />
                </div>
                <div style={{ padding: "10px" }}>
                    <div style={{ display: "block", margin: "0 auto", textAlign: "center", fontSize: "23px", fontWeight: "bold" }}>サイトにログイン</div>
                </div>

                {/* <!-- ユーザ名 --> */}
                <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "0 10px", margin: "10px 10px" }}>
                    <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)" }}>
                        ユーザ名
                </div>
                    <input onChange={(e) => inputUserName(e.target.value)} className="text-area" type="text" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)" }} />
                </div>
                {/* <!-- パスワード --> */}

                <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "0 10px", margin: "10px 10px" }}>
                    <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)" }}>
                        パスワード
                                </div>
                    <input onChange={(e) => inputPass(e.target.value)} className="text-area" type="password" style={{ width: "550px", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)" }} />
                </div>
                {/* <!-- ログインボタン --> */}
                <div style={{ marginBottom: "20px" }}>
                    <a onClick={() => {
                        // console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
                        startLogin({userId, pass})
                    }} className="a-to-block2 btn--orange" style={{ borderRadius: "30px", height: "50px", textAlign: "center", width: "550px", margin: "0 auto" }}><p style={{ padding: "10px" }}>ログイン</p></a>
                </div>

                {(() => {
                    if (props.error) {
                        return (
                            <div style={{ color: "red" }}>ユーザー名かパスワードが間違ってます</div>
                        )
                    }

                })()}
                {/* <!-- パスワードを忘れた・アカウント作成 --> */}
                <div>
                    <Link to="passwasureta" style={{ textDecoration: "none" }}><a href="" className="a-to-block2" style={{ color: "rgb(27, 149, 224)", padding: "6px" }}>パスワードを忘れた</a></Link>
                    <Link to="create" style={{ textDecoration: "none" }}><a href="" className="a-to-block2" style={{ color: "rgb(27, 149, 224)", padding: "6px" }}>アカウント作成</a></Link>
                </div>
            </div>
        </div>

    )
}

export default Login