import memeData from "./memeData"
import React from "react";

export default function Navbar(){
    const [memeImage, setmemeImage] = React.useState("")
    function getMemeImage(){
        const memeArray = memeData.data.memes;
        const randomNumber= Math.floor(Math.random()*memeArray.length)
        setmemeImage(memeArray[randomNumber].url)
    }
    return(
            <div className="navbar">
                <div className="input-field">
                    <div className="top-text">
                        {/* <label htmlFor="top-text">Top text </label> */}
                        <input id="top-text" type="text" maxLength={50} placeholder="Top text"/>
                    </div>
                    <div className="bottom-text">
                        {/* <label htmlFor="bottom-text">Bottom text </label> */}
                        <input id="bottom-text" type="text" maxLength={50} placeholder="Bottom text"/>
                    </div>
                </div>
                    <div className="generate-btn">
                        <button className="btn" onClick={getMemeImage}>Get a new meme image <img src="/images/frame.jfif" alt="" className="frame"/></button>
                    </div>
                    <div className="output">
                        <img src={memeImage} alt="coverImg" className="coverimg" />
                    </div>
            </div>
        )
}