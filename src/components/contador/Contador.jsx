import React, { Component } from 'react'

import Display from './Display'
import Botoes from './Botoes'
import PassoForm from './PassoForm'

class Contador extends Component {

    state = {
        numero: this.props.numeroInicial || 0,
        passo: this.props.passoInicial || 5,
    }

    /*
    incrementar = () => {
        this.setState({
            numero: this.state.numero +1
        })
    }
    */

    inc = () => {
        this.setState({
            numero: this.state.numero + this.state.passo
        })
    }

    dec = () => {
        this.setState({
            numero: this.state.numero - 1
        })
    }

    setPasso = (novoPasso) => {
        this.setState({
            //+ para vir como valor inteiro
            passo: novoPasso,
        })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>Contador</h2>
                    <Display numero={this.state.numero}></Display>
                    {/* Passou uma função pro componente filho setPasso() */}
                    <PassoForm passo={this.state.passo} setPasso2={this.setPasso}></PassoForm>
                    <Botoes setInc={this.inc} setDec={this.dec}></Botoes>
                </div>
            </div>
        )
    }
}

export default Contador