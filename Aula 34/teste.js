const num = [1,2,3,4,5,6]
const numNovo = [...num, 7]
console.log("Lista anterior",num)

console.log("Lista nova", numNovo)

let acervo = null

const livros = [
    { titulo: "Dom Quixote", autor: "Miguel de Cervantes", ano: 1605 },
    { titulo: "1984", autor: "George Orwell", ano: 1949 },
    { titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", ano: 1954 },
    { titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", ano: 1943 },
    { titulo: "Moby Dick", autor: "Herman Melville", ano: 1851 }
];

acervo = livros

const livro = {titulo: "Jogos Vorazes", autor:"Anonimo", }
const livroAtualizado = {id: 1, ...livro}

const {id, titulo, autor} = livroAtualizado
console.log(`
    
    Id: ${id}
    Titulo: ${titulo}
    Autor: ${autor}
    
    `)


const elementoreact = ({titulo, id, autor}) => {
    console.log(titulo)
}