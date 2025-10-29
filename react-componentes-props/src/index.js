import React from "react"; //guardamos as infos do pacote "react" na variavel React
import { createRoot } from "react-dom/client";
//classes de estilização e controle de responsividade prontas
import 'bootstrap/dist/css/bootstrap.min.css'
//acesso a alguns icones
import '@fortawesome/fontawesome-free/css/all.css'
//importando o arquivo para 
import Pedido from './Pedido'
import Cartao from './Cartao'
import Feedback from './Feedback'

//componente = uma constante ou variavel que guarda uma função que retorna o codigo de interface grafica (JSX, HTML)
const App = () => {
    const textoOK = "Já chegou"
    const textoNOK = "Ainda não chegou"
    //função alert já vem do javascript
    const funcaoOK = () => alert("Agradecemos a confirmação")
    const funcaoNOK = () => alert("Verificaremos o ocorrido")
    //poderiamos passar os parametros direto, mas fazemos assim para ficar um pouco mais modular
    const componenteFeedback = <Feedback textoOK={textoOK} textoNOK={textoNOK} funcaoOK={funcaoOK} funcaoNOK = {funcaoNOK}></Feedback>

    //JSX = syntax sugar para traduzir para código javascript bruto, o tradutor se chama 'babel' (compilador)
    return (
        //container principal
        //container por padrão considera o breakpoint sm, que representa uma tela pequena
        //border = cria uma borda ao redor do container
        //rounded = deixa a borda arredondada
        //mt-2 = adiciona uma pequena margem no topo
        <div className="container border rounded mt-2">
            {/* linha para o titulo */}
            {/* vai ter uma borda na parte de baixo (vai estar meio que sublinhado) e deve ter uma pequena margem em todos os seus lados. */}            
            <div className="row border-bottom m-2">
                {/* esse h1 vai ter 5 das 12 partes do bootstrap*/}
                <h1 className="display-5 text-center">Seus pedidos</h1>
            </div>

            {/* primeiro pedido */} 
            <div className="row">
                {/* controle para colunas de responsividade
                    xm < sm 
                    sm = aprox. 570 px de largura
                    md = aprox. 720px de largura
                */}
                <div className="col-sm-8 col-md-6 m-2">
                    {/* instancia do componente pedido */}
                    <Cartao cabecalho="22/04/2021">
                        <Pedido icone="fas fa-hdd fa-2x" titulo="SSD" descricao="SSD Kingston A400 - SATA"/>
                        {componenteFeedback}                 
                    </Cartao>
                </div>
            </div>

            {/* segundo pedido */} 
            <div className="row">
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao cabecalho="20/04/2021">
                        <Pedido icone="fas fa-book fa-2x" titulo="Livro" descricao="Concrete Mathematics - Donald Knuth" />
                        {componenteFeedback}        
                    </Cartao>
                </div>
            </div>
            
            {/* terceiro pedido */} 
            <div className="row">
                <div className="col-sm-8 col-md-6 m-2">
                    <Cartao cabecalho="21/01/20211">
                        <Pedido icone="fas fa-laptop fa-2x" titulo="Notebook" descricao="Notebook Dell - 8Gb - i5" />
                        {componenteFeedback}        
                    </Cartao>
                </div>
            </div>
        </div>
    );
}

const root = createRoot(document.getElementById("root"))
//pego o retorno dessa constante app e renderizo dentro do "root" na interface gráfica
root.render(<App/>) //o react identifica que é um componente quando escrevemos com essa sintaxe de tag <>
