import React from "react"
import memeData from "../memeData.js"



export default function Meme() {
	const [meme, setMeme] = React.useState({
		topText: "Top text here ",
		bottomText: "Bottm text here",
		randomImage: "http://i.imgflip.com/1bij.jpg"
	})
	
	const [allMemeImages, setAllMemeImages] = React.useState(memeData)

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
		setMeme(prevMeme => ({
			...prevMeme,
			randomImage: url
		}))
	}
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <span>{meme.topText}</span>
            <img src={meme.randomImage} className="meme--image" />
            <span>{meme.bottomText}</span>
        </main>
	)
}
