//componente principal

import React, { Component } from "react";
import Busca from './Busca'
import env from 'react-dotenv'
//importando o metodo para criar um cliente de conexão à api do pexels
import {createClient} from 'pexels'
import ListaImagens from "./ListaImagens";
import PexelsLogo from "./PexelsLogo";

//mesma coisa de criar uma constante, usamos o export default na propria assinatura do metodo
//substitui o export default App no final do codigo, sem precisarmos nomear uma constante
export default class App extends Component {
    //estado de App será formado pela lista de fotos que o pexels retorna
    state = {
        pics: []
    }

    onBuscaRealizada = (termo) => {
        //pesquisando fotos dentro da api do pexels
        this.pexelsClient.photos.search({
            //query - qual é o termo que o usuario está pesquisando
            query: termo
            //this.setState = estado dessa classe app
            //setState atualiza o estado atual do componente
        }).then(pics => this.setState({pics: pics.photos}))
    }
    
    pexelsClient = null
    //método de ciclo de vida que é executado quando o componente for carregado pela primeira vez
    componentDidMount(){
        //pexelsClient passa a ser um objeto que representa a conexão com a api do pexels
        this.pexelsClient = createClient(env.PEXELS_KEY)
    }

    //render = guarda o que será renderizado toda vez que o estado desse componente mudar
    render(){
        //imprime o valor guardado na variavel PEXELS_KEY dentro do arquivo .env
        console.log(env.PEXELS_KEY)
        //retorna JSX
        return(
            //classe de layout do primeflex
            //m-auto = margem automática para todos os lados da div, calculada de acordo com o tamanho da tela
            <div className="grid justify-content-center m-auto w-9 border-round border-1 border-400">
                <div className="col-12">
                    <PexelsLogo/>
                </div>
                <div className="col-12">
                    <h1>Exibir uma lista de... </h1>
                </div>
                <div className="col-8">
                    <Busca onBuscaRealizada={this.onBuscaRealizada}/>
                </div>

                <div className="col-8">
                   <ListaImagens pics={this.state.pics}/>
                </div>
            </div>
        )   
    }

}