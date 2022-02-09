import './Card.css'
import React from 'react'

export default function Card(props) {

    /*|| '#f00' usado de forma inplicita caso os outros cards não possuirem cor expecifica*/

    const cardStyle = {
        backgroundColor: props.color || '#f00',
        borderColor: props.color || '#f00',
    }

    return (
        <div>
            <div className="Card" style={cardStyle}>
                <div className="Title">{props.titulo}</div>
                <div className="Content">
                    {props.children}
                </div>
            </div>
        </div>
    )

    /*Método 2
    return (
        <div>
            <div className="Card" style={{
                backgroundColor: props.color || '#f00',
                borderColor: props.color || '#f00',
            }}>
                <div className="Title">{props.titulo}</div>
                <div className="Content">
                    {props.children}
                </div>
            </div>
        </div>
    )
    */
}