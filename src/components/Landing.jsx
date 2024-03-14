import React from 'react';
import './styleBody.css';
import './medias.css'

import github from '../images/LogosSocial/github-white.png'
import linkedin from '../images/LogosSocial/linkedin-white.png'
import gmail from '../images/LogosSocial/gmail-white.png'


export default function Container() {
    return (
        <section className='sectionLanding' id='landingId'>

            <div className='dvTextLanding'>
            
                <div className='bubbleContainer'>
                    <div className='bubble'>

                    </div>
                </div>
                <div className='bubbleContainer bubbleContainer2'>
                    <div className='bubble bubble2'>

                    </div>
                </div>
                <div className='dvText'>
                    <p>Rodrigo Rimbau Desarrollador Web Full Stack</p>
                    <div className='sub'></div>
                    <div className='network'>
                        <a onClick={() => { window.open("https://github.com/rrodry") }}><img src={github} />  </a>
                        <a onClick={() => { window.open("https://www.linkedin.com/in/rodrigo-rimbau/") }}><img src={linkedin} />  </a>
                        <a href='mailto:rodrigorimbau94@gmail.com'><img src={gmail} /></a>
                    </div>
                </div>
            </div>
            <div className='moveArrow'>
                <div className='dvArrow'>
                    <div className='arrowDown'>
                    </div>
                </div>

            </div>
        </section>
    )
}