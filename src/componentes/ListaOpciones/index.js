import "./ListaOpciones.css"

const ListaOpciones = () =>{

    const equipos = [
        "Programacíon",
        "Front End",
        "Data Science",
        "Devops",
        "UX Y Diseño",
        "Móvil",
        "Innovación y Gestión",
    ]

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select>
            {equipos.map((equipo, index) => <option key={index}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones