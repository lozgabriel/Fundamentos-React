import React from 'react'
import If from './If'

const UsuarioInfo = (props) => {
    /*Se não passar nenhum nome */
    const usuario = props.usuario || {}

    return (
        <div>
            {/* Se for válido */}
            <If test={usuario && usuario.nome}>
                Seja Bem Vindo <strong>{props.usuario.nome}</strong>!
            </If>

            {/* Se Não for válido */}
            <If test={!usuario || !usuario.nome}>
                Seja Bem Vindo <strong>Visitante</strong>!
            </If>
        </div>
    )
}

export default UsuarioInfo