import React from 'react'
import { Link } from 'react-router-dom'

const RightAreaDm = (props) => {
    return (
        <div className="main right border" style={{overflow: "auto", height: "100vh", width: "350px", display:props.display}}>
            {/* <!-- 新しいメッセージを作るボタン --> */}
            <div className="div-outside-image icon-container" style={{width: "70%",margin: "30px auto"}}>
                <Link to="/home"><a className="a-to-block post-icon" href="" style={{borderRadius: "100px", position: "relative" ,color: "white",textDecoration: "none"}}>
                    <div className="" style={{position: "absolute",top: '0',right: "0",bottom: "0",left: "0",margin: "auto",width: "80%",height: "20px",textAlign: "center",fontSize: "15px",fontWeight: "bold"}}>メッセージ作成</div>
                </a></Link>
            </div>
        </div>
    )
}

export default RightAreaDm