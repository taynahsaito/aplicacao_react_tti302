import React from "react";

//componente funcional
//pic = photos.src.small - seria o link da foto
const Imagem = ({pic, imgStyle}) => {
    return(
        //isso sera um codigo javascript, por isso está entre chaves
        <div className={`${imgStyle} flex justify-content-center`}>
            {/* //aplicando borda */}
            <img className="border-round" alt="" src={pic}/>
        </div>
    )  
}

export default Imagem