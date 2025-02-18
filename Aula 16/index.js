// funcionario = {
//     "nome": "Maicão",
//     "salario": 2000,
//     "cargo": "gerente",
// }

// funcionarios = ["Jorginho", "Jorge", "Jeffinho", "Talarissa"]

// texto = "Este é um texto"


// const nomes = ["Ana", "Jorge", "Beto"]
// nomes.push("Joaquim") // Ana, Jorge, Beto, Joaquim

// nomes.pop() // Joaquim sai

// const nomes2 = ["Janaina", "Adalberto"]

// const nomes3 = nomes.concat(nomes2)

// alert(nomes3)

// let contador = 0
// while (contador < 10){
//     console.log(contador)
//     contador += 1
// }

// let numeroSecreto = 8
// do{
//    palpite = prompt("Digite seu palpite de 0 a 10:")
// } while(palpite != numeroSecreto)
// alert("Deu certo também!")

// while (true){
//     palpite = prompt("Jogo 2: Digite seu palpite de 0 a 10:")

//     if (palpite == numeroSecreto){
//         alert("Parabéns você venceu!")
//         break
//     }
// }

// const numeroSecreto = 7
// for(let i = 0; i<3; i++){
//     let palpite = prompt("Digite um palpite de 1 a 10:")
//     if (palpite == numeroSecreto){
//         alert("Você acertou e está livre agora.")
//         break
//     }else{
//         alert("Você errou!")
//     }
// }

// const frutas = ["Morango", "Acerola", "Pitomba", "Banana", "Maracujá"]
// const corpo = document.querySelector("body")

// for (let fruta of frutas){
//     const novoItem = document.createElement("h1")
//     novoItem.classList.add("teste")
//     novoItem.innerHTML = `${fruta} É BOM DEMAIS`
//     corpo.appendChild(novoItem)
// }

// for (let indice in frutas){

//     const novoItem = document.createElement("h1")
//     novoItem.classList.add("teste")
//     novoItem.setAttribute("id", `fruta${indice}`)
//     novoItem.innerHTML = `${parseInt(indice)+1}. ${frutas[indice]} É BOM DEMAIS`
//     corpo.appendChild(novoItem)
// }

// const pets = ["Melzinha", "Senna", "Flora", "Polyana"]


// pets = pets.map((pet) => {
//     return pet.toUpperCase()
// })

// pets.forEach(pet => {
//     alert(`${pet} é muito fofinho`)
// });




