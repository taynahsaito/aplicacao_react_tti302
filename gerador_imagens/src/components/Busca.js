//componente de classe: componente que tem um estado atrelado a ele
//estado = valor atual das propriedades do componente
//propriedades = atributo

//estado do componente

//como estou importando uma classe especifica tem que ter {}
//ambas funções vão ficar dentro da variavel React
import React, {Component} from "react";
//componentes prontos do primereact
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export default class Busca extends Component {
    //setState = trocar o valor de uma propriedade 
    //setState(termoDeBusca: "Qualquer coisa")
    state = {
        //propriedade
        termoDeBusca: ""
    }

    //event = representa o evento onChange 
    //cada mudança que tiver no InputText (cada valor que a pessoa editar ou apagar) vai ser impresso no console
    onTermoAlterado = (event) => {
        //.target = ponto de partida daquele evento (no caso, o evento acontece a partir do inputText)
        //.value = mostra o valor atual do que está escrito no campo de texto (naquele InputText)
        console.log(event.target.value)
    }

    //toda vez que o estado mudar, renderizamos o componente novamente
    render(){
        return(
            //flex - como os elementos dentro dessa div serão construidos na interface
            //flex-column - tudo dentro da div é uma coluna
            <div className="flex flex-column">
                {/* span = agrupamento de elementos */}
                {/* w-full = todo o conteudo vai ocupar toda a largura do espaço disponivel
                    p-input-icon-left = identifica se dentro do span tem um icone e caso exista, colcoa o icone a esquerda
                */}
                <span className="p-input-icon-left w-full">
                {/* pi-search = icone de lupa do pacote primeicon */}
                    <i className="pi pi-search"/>
                    <InputText 
                        className="w-full"
                        //toda vez que o valor atual do campo de texto mudar, a função que eu passar vai ser executada
                        onChange={this.onTermoAlterado}
                        //dica que aparece quando colocar o cursor em cima do componente de busca
                        placeholder={this.props.dica}
                    />
                </span>
                <Button
                    label="OK"
                    className="p-button-outlined mt-2" //mt-2 = margem entre o botão e a classe span
                />
            </div>
        )
    }
}
//dica não faz parte do estado e é outra propriedade
Busca.defaultProps = {
    dica: "Digite algo que deseja ver: "
}

