import React from "react"

export default function ComParametro(props) {
    const status = props.nota >= 7 ? 'Aprovado' : 'Reprovado'

    return (
        <div>
            <h2>{props.titulo}</h2>
            <h3>{props.subtitulo}</h3>
            <h3>{props.nota}</h3>
            <h2>{status}</h2>
        </div>
    )
}