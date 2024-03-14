import React from 'react';
import './IntroCss.css'
import image from '../images/rodri2.png'
import ReactLogo from '../images/LogosTech/React-Logo.png'
import Redux from '../images/LogosTech/redux-logo.png'
import Sass from '../images/LogosTech/sass-logo.png'
import Sql from '../images/LogosTech/sql.png'
import Ts from '../images/LogosTech/ts-logo.png'
import Node from '../images/LogosTech/Node-Logo.png'
import Boots from '../images/LogosTech/boots-logo.png'
import Js from '../images/LogosTech/js-logo.png'
import Css from '../images/LogosTech/css3-logo.png'
import Material from '../images/LogosTech/materialUi-logo.png'



export default function Intro() {
    return (
        <section className='introSection' id='introId'>
            <div className='dvIntro'>

                <p className='textIntro'>
                    Me formé como desarrollador web full stack en Henry, una reconocida academia online de programación, donde aprendí desde cero las bases del desarrollo web, tanto en el lado del cliente como del servidor.<br />
                </p>
                <img src={image} alt="ProfileImage" className='imageProfile' />
                   
                <br />
                <p className='textIntro'>
                    También obtuve una certificación en JavaScript en Coderhouse, otra prestigiosa plataforma de educación online.
                    Durante mi formación, desarrollé aplicaciones web para varias compañías, donde pude demostrar mis habilidades de comunicación, liderazgo, creatividad y resolución de problemas, participando en varios proyectos grupales e individuales.

                </p>
                <br />

                <p className='textIntro'>
                    Me apasiona la tecnología y estoy en búsqueda de oportunidades para aprender y crecer profesionalmente. <br />Me impulsa seguir trabajando en el campo de desarrollo web y usar mis habilidades para crear soluciones efectivas para clientes.

                </p>
                <br />

                <p className='textIntro'>
                    Me considero una persona proactiva, curiosa, adaptable y colaborativa, que disfruta de trabajar en equipo y compartir conocimientos. Mi objetivo es seguir mejorando mis competencias técnicas y aportar valor a la industria.

                </p>
                <div className='dvLogos'>
                    <img src={ReactLogo} alt="ReactLogo" />
                    <img src={Node} alt="NodeLogo" />
                    <img src={Js} alt="JavaScriptLogo" />
                    <img src={Ts} alt="TypeScript" />
                    <img src={Css} alt="Css3Logo" />
                    <img src={Boots} alt="BootstrapLogo" />
                    <img src={Sass} alt="SassLogo" />
                    <img src={Sql} alt="SQL Logo" />
                    <img src={Redux} alt="Redux Logo" />
                    <img src={Material} alt="MaterialUi Logo" />
                </div>
            </div>
        </section>
    )
}