import React from 'react'

/*function (e) = Função anônima */

const IndiretaFilho = (props) => {
   /* const min = 50
    const max = 70 */
    const gerarIdade = () => parseInt(Math.random() * (20) + 50)   
    const gerarNerd = () => Math.random() > 0.5
    return (
        <div>
            <div>Filho</div>
            <button onClick={
                //Alterando ESTADO idade
                function (e) {
                    props.propQuandoClicar('Pai 1', gerarIdade(), gerarNerd())
                }
            }>
                Fornecer Informações</button>
        </div>
    )
}

export default IndiretaFilho