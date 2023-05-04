import React from "react";
import "../styles/Card.css"

function Card(props){

    let chars = props.chars
    let func = props.functions
    
    return(
        <div className="card" id={chars} onClick={func.checkCards}>
            <img src={require("../images/"+chars+".jpeg")} alt={chars} className="character" />
            <h3 className="charName">{chars.charAt(0).toUpperCase()+chars.slice(1)}</h3> 
        </div>
    )
}

export default Card;


