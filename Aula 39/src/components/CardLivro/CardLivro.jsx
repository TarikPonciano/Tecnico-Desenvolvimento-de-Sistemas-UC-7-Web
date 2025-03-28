import "./CardLivro.css"
//Prepare o CardLivro para receber as informações do livro (desctruct)
function CardLivro({id, titulo, autor, ano_lancamento, removerLivro}){
    //Lógica
    
    //Renderização
    //Crie um elemento li e preencha com as informações recebidas
    return(
        <li>
           {id} - {titulo} - {autor} - {ano_lancamento} - <button onClick={() => (removerLivro(id))}> 🗑 Apagar</button>
        </li>
    )
}

export default CardLivro