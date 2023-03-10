import React from 'react';
import '../styles/box.css'
import data from '../data/data.json'

function Box ()
{
    return(
            <div className="Card">
                {data.map(logement =>(
                    <a href={`data/$logement.id`} key={logement.id}>
                        <img src={logement.cover} alt="Photos du logement" className="Photo" />
                        <h2>{logement.title}</h2>
                    </a>
                ))}
            </div>
        )
}

export default Box