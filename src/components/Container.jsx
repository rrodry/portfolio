import React from 'react';
import Landing from './Landing'
import Intro from './Intro'
import Proyects from './Proyects'
import Footer from './Footer'


export default function Container() {
    return(
        <React.Fragment>
            < Landing />
            < Intro />
            < Proyects />
            < Footer />

        </React.Fragment>
    )
}