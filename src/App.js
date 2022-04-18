import React from "react";
import Navbar from './components/Navbar';
import Meme from './components/Meme';
import memeData from './memeData';


export default function App() {
    return (
		<div>
			<Navbar />
			<Meme />
		</div>
	)
}

