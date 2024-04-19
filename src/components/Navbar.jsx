export default function Navbar(){
    return(
            <div className="navbar">
                <div className="input">
                <label>Top text</label><br />
                <input type="text" maxLength={50} placeholder="Top text"/>
                <label>Bottom text</label><br />
                <input type="text" maxLength={50} placeholder="Bottom text"/>
                </div>
                <button className="btn">Get a new meme image <img src="public/images/frame.jfif" alt="" className="frame"/></button>
            </div>
        )
}