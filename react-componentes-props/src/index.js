import React from "react"; //guardamos as infos do pacote "react" na variavel React
import { createRoot } from "react-dom/client";
//classes de estilização e controle de responsividade prontas
import 'bootstrap/dist/css/bootstrap.min.css'
//acesso a alguns icones
import '@fortawesome/fontawesome-free/css/all.css'

const App = () => {
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
                </div>
            </div>

            {/* segundo pedido */} 
            <div className="row">
                <div className="col-sm-8 col-md-6 m-2">
                    {/* cartão */}
                    <div className="card">
                        {/* cabeçalho do cartão */}
                        <div className="card-header text-muted">
                            20/04/2021
                        </div>
                        {/* corpo do cartão */}
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                {/* icone do cartão */}
                                {/* fas fa-hdd fa-2x = pacotes do fontawesome */}
                                <i className="fas fa-book fa-2x"></i>
                            </div>
                            {/* flex-grow 1: tomar espaço remanescente */}
                            {/* informações do pedido */}
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Livro</h4>
                                <p className="text-center">Concrete Mathematics - Donald Knuth</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* terceiro pedido */} 
            <div className="row">
                <div className="col-sm-8 col-md-6 m-2">
                    {/* cartão */}
                    <div className="card">
                        {/* cabeçalho do cartão */}
                        <div className="card-header text-muted">
                            21/01/2021
                        </div>
                        {/* corpo do cartão */}
                        <div className="card-body d-flex">
                            <div className="d-flex align-items-center">
                                {/* icone do cartão */}
                                {/* fas fa-hdd fa-2x = pacotes do fontawesome */}
                                <i className="fas fa-laptop fa-2x"></i>
                            </div>
                            {/* flex-grow 1: tomar espaço remanescente */}
                            {/* informações do pedido */}
                            <div className="flex-grow-1 ms-2 border">
                                <h4 className="text-center">Notebook</h4>
                                <p className="text-center">Notebook Dell - 8Gb - i5</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
}

const root = createRoot(document.getElementById("root"))
//pego o retorno dessa constante app e renderizo dentro do "root" na interface gráfica
root.render(<App/>) //o react identifica que é um componente quando escrevemos com essa sintaxe de tag <>
