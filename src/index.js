//carregando as funções dos pacotes dentro de variáveis
import React from 'react' //= import x from 'react'
//cria a raiz da aplicação, que se refere ao ponto da árvore DOM onde o código de <App/> (aplicação como um todo) será carregado
import {createRoot} from 'react-dom/client' //quando importamos uma função especifica de um pacote, precisamos colocar as chaves {}
import "./styles.css"
 
//constante app vai guardar uma função e essa função vai retornar o valor dentro das divs
//poderia ser uma let, mas para ocupar menos memoria, o ideal é colocar const já que o valor não irá mudar
const App = () => {
    //JSX - linguagem que mistura javascript com HTML 
    const estilosBotao = {marginTop: 12, paddingTop: 8, paddingBottom: 8, backgroundColor: 'blueviolet', color: 'white', border: 'none', width: '100%',borderRadius: 8}
    const estilosDiv = {margin: 'auto', width: 768, backgroundColor: '#EEE', padding: 12, borderRadius: 8}
    const estilosLabel = {display: 'block', marginBottom: 4}
    const estilosInput = {paddingTop: 8, paddingBottom: 8, borderStyle: 'hidden', width: '100%', borderRadius: 8, outline: 'none', boxSizing:'border-box'}
    const textoRotulo = "Nome:"
    const obterTextoDoBotao = () => {
        return "Enviar";
    }
    //no JSX, com as chaves, podemos chamar funções 
    return (
        <div style={estilosDiv}>
             <label className='rotulo' htmlFor="nome" style={estilosLabel}>{textoRotulo}</label>
             <input type="text" id="nome" style={estilosInput}/>
             <button style={estilosBotao}>{obterTextoDoBotao()}</button>
             </div>
    )
}

//render = renderizar/construir a interface gráfica a partir do componente que representa a interface como um todo
// ReactDOM.render(
//     <App/>, //para ser visto como um componente pelo react, passamos ele como uma tag
//     //document = árvore HTML
//     //querySelector busca entre todas as tags HTML qual é a referente ao valor que coloquei dentro do ()
//     document.querySelector("#root") //# = estou especificando que é um valor referente a ID (id=root)
// )

//usamos essa pois o bloco de codigo anterior comentado foi deprecated
//createRoot = cria a raiz da aplicação, passamos o valor root para o id para a tag ser selecionada pelo id = root
//document = representa a arvore DOM da interface graifca: a estrutura HTML da pagina
const root = createRoot(document.getElementById("root"))
root.render(<App/>) //reconhece que app é um componente pois o react reconhece que toda variavel que retorna uma interface grafica é um componente