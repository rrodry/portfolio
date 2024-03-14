import React from 'react';
import './Footer.css'
import github from '../images/LogosSocial/github.png'
import linkedin from '../images/LogosSocial/linkedin.png'
import gmail from '../images/LogosSocial/gmail.png'


export default function Footer() {
    return (
        <footer>
            <div>
                <a onClick={() => {window.open("https://github.com/rrodry")}}><img src={github}/>  </a>
                <a onClick={() => {window.open("https://www.linkedin.com/in/rodrigo-rimbau/")}}><img src={linkedin}/>  </a>
                <a href='mailto:rodrigorimbau94@gmail.com'><img src={gmail}/></a>
            </div>
        </footer>
    )
}