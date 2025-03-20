import "./CardLivro.css"

function CardLivro({id, titulo, autor, ano_publicacao}){
    return(
        <li key={id}>
            <h1>{id}</h1>
            <h1>{titulo}</h1>
            <h1>{autor}</h1>
            <h1>{ano_publicacao}</h1>
        </li>
    )
}

export default CardLivro