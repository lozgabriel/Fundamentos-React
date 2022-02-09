import React from 'react'

const PassoForm = (props) => {
    return (
        <div>
            <label htmlFor="passoInput">Passo</label>
            {/*Quando um evento acontece, o filho manda de volta a informação do novo passo */}
            <input id="passoInput" type="number" value={props.passo} onChange={e => props.setPasso2(+e.target.value)} />
        </div>
    )
}

export default PassoForm