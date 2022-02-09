import './App.css'
import React from 'react'

import Contador from './components/contador/Contador'
import Input from './components/formulario/Input'
import IndiretaPai from './components/comunicacao/IndiretaPai'
import DiretaPai from './components/comunicacao/DiretaPai'
import UsuarioInfo from './components/condicional/UsuarioInfo'
import ParOuImpar from './components/condicional/ParOuImpar'
import ListaAlunos from './components/repeticao/ListaAlunos'
import Familia from './components/basicos/Familia'
import FamiliaMembro from './components/basicos/FamiliaMembro'
import Card from './components/layout/Card'
import Primeiro from './components/basicos/Primeiro'
import ComParametro from './components/basicos/ComParametro'

/*Sem o default, não podemos retornar uma função anônima

Abaixo modelo resumido

export default () => 
    const mensagem = <strong>Fundamentos React</strong>

        <div id="app">
            <h1>{mensagem}</h1>

            <ComParametro 
                titulo="Segundo Componente" 
                subtitulo="Muito Legal!!" 
                nota = {9.3}
            />
            <Primeiro></Primeiro>
        </div>

*/

export default function App(props) {
    const mensagem = <strong>Fundamentos React</strong>
    return (
        <div className="App">
            <h1>{mensagem}</h1>
            <div className="Cards">

                <Card titulo="Task Contador utilizando Class" color="#153">
                    <Contador numeroInicial={10}></Contador>
                </Card>

                <Card titulo="Task Componente controlado (Input)" color="#941">
                    <Input></Input>
                </Card>

                <Card titulo="Task Comunicacao Indireta" color="#829">
                    <IndiretaPai></IndiretaPai>
                </Card>

                <Card titulo="Task Comunicacao Direta" color="#229">
                    <DiretaPai></DiretaPai>
                </Card>

                <Card titulo="Task ParOuImpar" color="#022">
                    <UsuarioInfo usuario={{nome: 'Gabriel'}}></UsuarioInfo>
                    <UsuarioInfo usuario={{nome: ''}}></UsuarioInfo>
                </Card>

                <Card titulo="Task ParOuImpar" color="#002">
                    <ParOuImpar numero={2}></ParOuImpar>
                </Card>

                <Card titulo="Task Repetição" color="#00F">
                    <ListaAlunos></ListaAlunos>
                </Card>

                <Card titulo="Componentes com Filhos" color="#800">
                    <Familia sobrenome="Silva">
                        <FamiliaMembro nome="Pedro" />
                        <FamiliaMembro nome="Julia" />
                        <FamiliaMembro nome="Carol" />
                    </Familia>
                </Card>

                <Card titulo="Primeira Task" color="#080">
                    <Primeiro></Primeiro>
                </Card>

                <Card titulo="Segunda Task" color="#2ab7ca">
                    <ComParametro
                        titulo="Segundo Componente"
                        subtitulo="Muito Legal!!"
                        nota={9.3}
                    />
                </Card>
            </div>
        </div>
    )
}