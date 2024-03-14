import './proyectsCss.css'
import Card from './Card'
import image from '../images/LogosTech/boots-logo.png'
import CardDescription from './Description.json'



export default function Proyects() {

    let styleDelay = 10

    return (
        <section className='proyectsSection' id="proyectId">
            { CardDescription.map( (e) => {
                styleDelay+10
                return <Card key={e.Company} src={ e.src } styleDelay={styleDelay} description = { e } text={ Text } />

            } )}

        </section>
    )
}