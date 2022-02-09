import React, { useState } from 'react'
import IndiretaFilho from './IndiretaFilho'







/*Comunicação Indireta - Troca de dados de Filho para Pai  */
const IndiretaPai = (props) => {
    //Exibindo Informações dentro de pai
    const [nome, setNome] = useState('?')
    const [idade, setIdade] = useState(0)
    const [nerd, setNerd] = useState(false)

    function fornecerInfo(nome, idade, nerd){
        setNome(nome)
        setIdade(idade)
        setNerd(nerd)
    }

    return(
        
        <div>
            <div>
                <span>{nome} |</span>
                <span>{idade} |</span>
                <span>{nerd ? 'Verdadeiro' : 'Falso'}</span>
            </div>
            <IndiretaFilho propQuandoClicar={fornecerInfo} />   
        </div>
    )
}

export default IndiretaPai