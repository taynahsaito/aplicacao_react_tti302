//carregando as funções dos pacotes dentro de variáveis
import React from 'react'
//cria a raiz da aplicação, que se refere ao ponto da árvore DOM onde o código de <App/> (aplicação como um todo) será carregado
import {createRoot} from 'react-dom/client' 
 
//constante app vai guardar uma função e essa função vai retornar o valor dentro das divs
//poderia ser uma let, mas para ocupar menos memoria, o ideal é colocar const já que o valor não irá mudar
const App = () => {
    //JSX - linguagem que mistura javascript com HTML 
    return <div> Meu primeiro componente React </div>
}

//render = renderizar/construir a interface gráfica a partir do componente que representa a interface como um todo
// ReactDOM.render(
//     <App/>, //para ser visto como um componente pelo react, passamos ele como uma tag
//     //document = árvore HTML
//     //querySelector busca entre todas as tags HTML qual é a referente ao valor que coloquei dentro do ()
//     document.querySelector("#root") //# = estou especificando que é um valor referente a ID (id=root)
// )

//usamos essa pois o bloco de codigo anterior comentado foi deprecated
const root = createRoot(document.getElementById("root"))
root.render(<App/>)