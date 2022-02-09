import React from 'react'
import DiretaFilho from './DiretaFilho'

/*Comunicação Direta - Troca de dados de Pai para Filho  */
const DiretaPai = (props) => {
    return(
        <div>
            <DiretaFilho nome="Filho 1" idade={20} nerd={true}></DiretaFilho>
            <DiretaFilho nome="Filho 2" idade={25} bool={false}></DiretaFilho>
        </div>
    )
}

export default DiretaPai