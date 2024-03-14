import React from 'react';
import './styleBody.css';
import './medias.css'


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