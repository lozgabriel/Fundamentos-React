import React, {cloneElement} from 'react'

/*Operador Spreed(...) Pega todos as propriedades e passa para o componente filho
return (
        <div>
            <FamiliaMembro nome="Pedro" sobrenome= {props.sobrenome} />
            <FamiliaMembro nome="Julia" {...props} />
            <FamiliaMembro nome="Carol" sobrenome="Lozano" />
        </div>
    )
*/

const Familia = (props) => {

    return (
        <div>
            {/*Passando propriedades do Pai para o Filho */}
            {React.Children.map(props.children, (child) => {
                return cloneElement(child,props)
            })}
        </div>
    )
}

export default Familia