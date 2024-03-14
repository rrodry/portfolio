import './cardCss.css'



export default function Card({ src, description, styleDelay }) {

    return (
        <div className='card' style={{"--i":`${styleDelay}`}}>
            <div className='imageProyects'>
                <img src={src} alt={name} />
            </div>
            <div>
                <ul className='UlDescription'>
                    <li> <h3> {description.Company} </h3> </li>
                    <li> <h5> {description.Date} </h5> </li>
                    <li> <h5> Proyecto:{description.ProyectName} </h5></li>
                    {description.Responsabilities.map(e => {
                        return <ul className='titleDescr'>
                            <li className='liTitle'>
                                <h5> { e.titleDescr } </h5>
                            </li>
                            { e.text.map(e => <li className='liDescription'> <p> {e} </p> </li>) }
                        </ul>
                    })}
                </ul>
            </div>
        </div>
    )
}
//