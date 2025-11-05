import React from "react";
import Imagem from "./Imagem";

//aqui estamos refatorando o codigo para ficar mais dinâmico

//componente funcional
const ListaImagens = ({pics}) => {
    //return retorna codigo JSX
    return(
        //pegando a coleção de fotos que está dentro de pics e mapeamos esses elementos
        //map seria equivalente a estarmos iterando sobre a coleção de fotos
        //para cada iteração, vai ser referente a um dos elementos da coleção
        //pic = representa a foto atual da iteração
        //key = variavel auto incrementada, começando no indice 0 e sendo incrementada a cada interação      

        pics.map((pic, key) => (
            //pic recebe o link na versao small da foto
            <Imagem pic={pic.src.small} key={key}/>
        ))
    )
}

export default ListaImagens