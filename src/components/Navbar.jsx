export default function Navbar(){
    return(
            <div className="navbar">
                <div className="input-field">
                    <div className="top-text">
                        {/* <h4>Top text </h4> */}
                        <input type="text" maxLength={50} placeholder="Top text"/>
                    </div>
                    <div className="bottom-text">
                        {/* <h4>Bottom text </h4> */}
                        <input type="text" maxLength={50} placeholder="Bottom text"/>
                    </div>
                </div>
                    <div className="generate-btn">
                        <button className="btn">Get a new meme image <img src="public/images/frame.jfif" alt="" className="frame"/></button>
                    </div>
            </div>
        )
}