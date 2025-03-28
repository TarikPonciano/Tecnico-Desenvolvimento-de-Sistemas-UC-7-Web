import { Link, useNavigate } from "react-router-dom"
import "./CardLivro.css"
//Prepare o CardLivro para receber as informações do livro (desctruct)
function CardLivro({id, titulo, autor, ano_lancamento, atualizar}){
    //Lógica
    const removerLivro = async (idLivro) =>{
        const response = await fetch(`http://localhost:5000/livros/${idLivro}`, {method:"DELETE"})
        alert(response.statusText)
        atualizar(`Livro Removido: ${idLivro}`)

    }
    //Renderização
    //Crie um elemento li e preencha com as informações recebidas
    return(
        <li>
           {id} - {titulo} - {autor} - {ano_lancamento} - <button onClick={() => (removerLivro(id))}> 🗑 Apagar</button> - <button><Link to={`/editar/${id}`}>Editar</Link></button> 
        </li>
    )
}

export default CardLivro