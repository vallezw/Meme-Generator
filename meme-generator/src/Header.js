import React from 'react'
import "./index.css"
import trollface from './Trollface.png'

function Header(){
    return(
        <header>
            <img 
                src={trollface}
                alt="Problem?"
            />
            <p>Meme Generator</p>
        </header>
    )
}

export default Header