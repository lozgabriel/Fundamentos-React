import React from 'react'

const Botoes = (props) => {
    return(
        <div>
             {/*Pode ser também onClick={e => this.inc()} */}
             <button onClick={props.setDec}>-</button>
             <button onClick={props.setInc}>+</button>
        </div>
    )
}

export default Botoes