import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) =>{
    const manjearCambio = (e) =>{
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
        placeholder={props.placeholder} 
        required={props.required} 
        value={props.valor} 
        onChange={manjearCambio} />
    </div>
}

export default CampoTexto