import React from 'react';
import './styleNav.css'


export default function Navbar() {
    return (
        <nav className='navContainer'>
            <div className='buttonsNav'>
                <ul className='ulNavbar' >
                    <li><a href='#landingId'>Inicio</a></li>
                    <li> <a href="#introId">Acerca de mi</a></li>
                    <li> <a href="#proyectId">Proyectos</a></li>
                </ul>
            </div>
        </nav>
    )
}