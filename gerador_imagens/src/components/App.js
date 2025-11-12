//componente principal

import React, { Component } from "react";
import Busca from './Busca'
import env from 'react-dotenv'
//importando o metodo para criar um cliente de conexão à api do pexels
import {createClient} from 'pexels'
import ListaImagens from "./ListaImagens";
import PexelsLogo from "./PexelsLogo";
import pexelsClient from "../utils/pexelsClient";

//mesma coisa de criar uma constante, usamos o export default na propria assinatura do metodo
//substitui o export default App no final do codigo, sem precisarmos nomear uma constante
export default class App extends Component {
    //estado de App será formado pela lista de fotos que o pexels retorna
    state = {
        //aqui vamos guardar as fotos com a lista de fotos que o pexels retornou
        pics: []
    }

/*     onBuscaRealizada = (termo) => {
        //pesquisando fotos dentro da api do pexels
        //search - busca dentro de todas as fotos que existe dentro do pexels um determinado termo
        this.pexelsClient.photos.search({
            //query - qual é o termo que o usuario está pesquisando
            query: termo
            //this.setState = estado dessa classe app
            //setState atualiza o estado atual do componente
        }).then(pics => this.setState({pics: pics.photos}))
    } */
    
    //criamos um novo para a refatoração com o axios
    onBuscaRealizada = (termo) => {
        // /search - endpoint que quero mandar minha requisição de busca
        pexelsClient.get('/search', {
            params: {query: termo}
        })
        //result - resposta da requisição do pexels, objeto JSON
        .then(result => {
            console.log(result)
            //qual o novo valor que quero guardar no estado
            //data - guarda os dados no corpo daquela resposta (JSON)
            //photos - lista de fotos que quero atualizar o atributo pics do estado do component
            this.setState({pics: result.data.photos})
        } )
    }

    pexelsCliente = null
    //método de ciclo de vida que é executado quando o componente for carregado pela primeira vez
    componentDidMount(){
        //pexelsCliente passa a ser um objeto que representa a conexão com a api do pexels
        //função createClient - criar um novo cliente, que seria nossa aplicação, que vai solicitar um serviço do servidor (pexels)
        this.pexelsCliente = createClient(env.PEXELS_KEY)
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
                    {/* importando outros componentes já prontos */}
                    <PexelsLogo/>
                </div>
                <div className="col-12">
                    <h1>Exibir uma lista de... </h1>
                </div>
                <div className="col-12">
                    <Busca onBuscaRealizada={this.onBuscaRealizada}/>
                </div>
                {/* col-12 = queremos que ocupe 100% da margem horizontal*/}                
                <div className="col-12">
                    <div className="grid">
                        {/* imgstyle - dizendo quanto deve ocupar na tela dependendo do tamanho*/}                        
                        <ListaImagens imgStyle={'col-12 md:col-6 lg:col-4 xl:col-3'} pics={this.state.pics}/>                        
                    </div>
                </div>
            </div>
        )   
    }

}