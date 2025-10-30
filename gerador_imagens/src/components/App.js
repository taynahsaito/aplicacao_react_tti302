//componente principal

import React, { Component } from "react";
import Busca from './Busca'

//mesma coisa de criar uma constante, usamos o export default na propria assinatura do metodo
//substitui o export default App no final do codigo, sem precisarmos nomear uma constante
export default class App extends Component {
    //render = guarda o que será renderizado toda vez que o estado desse componente mudar
    render(){
        //retorna JSX
        return(
            //classe de layout do primeflex
            //m-auto = margem automática para todos os lados da div, calculada de acordo com o tamanho da tela
            <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
                <div className="col-12">
                    <h1>Exibir uma lista de... </h1>
                </div>
                <div className="col-8">
                    <Busca/>
                </div>
            </div>
        )   
    }

}