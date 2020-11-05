import React from 'react'
import search from '../images/search.png'
const SearchArea = (props) => {
    return (
        <div className="main right border" style={{ overflow: "auto", height: "100vh", width: "350px", display: props.display }}>
            {/* <!-- 検索バー --> */}
            <div className='search-bar-parent' style={{ backgroundColor: "rgb(32, 45, 46)", margin: "15px", borderRadius: "30px", height: " 50px", display: "flex", justifyContent: "center", alignItems: "center", width: "90%", }}>
                <div style={{ width: "80%" }}>
                    {/* <!-- 検索アイコン --> */}
                    <div style={{ float: "left", display: "flex", justifyContent: "center", alignItems: "center", height: "40px", }}>
                        <img src={search} className="search-icon" alt="検索アイコン" style={{ width: "20px", padding: "0 10px" }} />
                    </div>
                    <div style={{ padding: "0 0px" }}>
                        <input onChange={(e) =>props.inputKeyWord(e.target.value)} placeholder="キーワード検索" type="text" className="search-bar" aria-label="検索バー" />
                    </div>
                </div>
            </div>
            <div onClick={()=>{props.search(props.keyword)}} className="pointer post-icon" style={{
            background: "rgb(29, 161, 242)",
            margin: "0 0 0 80%",
            textAlign: "center",
            borderRadius: "20px",
            padding: "5px 1px",
            width: "60px",
            fontWeight: "bold",
        }}>
            検索
        </div>
        </div>
    )
}
export default SearchArea