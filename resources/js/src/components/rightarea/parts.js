import React from 'react'

export const Change = (props) => {
    return (
        <div class="setting-outer setting-name-hover" style={{ borderBottom: "10px solid rgb(37, 51, 65)" }}>
            {/* 名前 */}
            <div style={{ backgroundColor: "rgb(25, 39, 52)", padding: "1px 10px", margin: "15px", }}>
                <div style={{ marginLeft: "30px", paddingTop: "5px", color: "rgb(136, 153, 166)", }}>
                    {props.menu}</div>
                <input onChange={(e) => {
                    const id = e.target.id;
                    const input = e.target.value;
                    props.changeInput(id,input)
                }} id={props.id} className="text-area" type={props.type} style={{ width: "90%", display: "block", margin: "0 auto", height: "25px", backgroundColor: "rgba(0, 0, 0, 0)", border: "1px solid rgba(0, 0, 0, 0)", borderBottom: "3px solid rgb(136, 153, 166)", }} />
            </div>
            {/* 保存ボタン */}
            <SaveButton saveChange={props.saveChange} change={props.change} />
            {(() => {
                if (props.error) return (<div style={{color:"red"}}>ページを一度更新してください</div>)
            })()}
        </div>
    )
}

const SaveButton = (props) => {
    return (
        <div onClick={()=>{props.saveChange(props.change)}} className="pointer post-icon" style={{
            background: "rgb(29, 161, 242)",
            margin: "0 0 0 80%",
            textAlign: "center",
            borderRadius: "20px",
            padding: "5px 1px",
            width: "60px",
            fontWeight: "bold",
        }}>
            保存
        </div>
    )
}