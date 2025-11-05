import React from "react";

//componente funcional
//pic = photos.src.small - seria o link da foto
const Imagem = ({pic}) => {
    return(
        <div>
            <img alt="" src={pic}/>
        </div>
    )  
}

export default Imagem