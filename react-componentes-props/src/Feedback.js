import React from 'react';

const Feedback = (props) => {
    return(
        <div className="d-flex justify-content-evenly m-2">
            {/* primeiro botão */}
            <button type="button" onClick={props.funcaoOK} className="btn btn-primary">
                {props.textoOK}
            </button>
            {/* segundo botão */}
            <button type="button" onClick={props.funcaoNOK} className="btn btn-danger">
                {props.textoNOK}
            </button>
        </div>
    );
}
//exportar para outros arquivos de codigo dentro do projeto
export default Feedback;
