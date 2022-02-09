import './index.css'
import reactDom from 'react-dom'
import React from 'react'

import App from './App'

const elemento = document.getElementById('root')



var arr = [];
while(arr.length < 4){
    var r = Math.round(Math.random()) * 2 - 1;
}
console.log(r);


/*Não é HTML e sim JSX*/
reactDom.render(
    <App />,
    elemento
)