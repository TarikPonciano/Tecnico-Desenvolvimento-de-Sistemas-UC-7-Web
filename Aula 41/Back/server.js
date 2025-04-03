import express from "express"
import fs from "fs"
import path from "path"
import cors from "cors"
import jwt from "jsonwebtoken"

const PORT = 3000
const app = express()
const __dirname = path.resolve()
const __usersdata = path.join(__dirname, "data", "users.json")
const EXPIRATION_TIME = '15s'
const SECRET_KEY = "frase_secreta"

app.use(express.json())
app.use(cors())

app.post("/login", (req, res) => {
    const userData = req.body

    if(!userData || !userData.username || !userData.password){
        return res.status(500).send("Erro ao receber dados!")
    }

    fs.readFile(__usersdata, "utf8", (err, data) => {
        if (err){
            return res.status(500).send(`Erro ao ler arquivo!`)
        }
        const users = JSON.parse(data)

        const userIdentificado = users.find((user) => user.username == userData.username)

        if (!userIdentificado){
            return res.status(500).send("Usuário não encontrado!")
        }

        if (userIdentificado.password == userData.password){
            const token = jwt.sign({id:userIdentificado.id, username:userIdentificado.username}, SECRET_KEY, {expiresIn: EXPIRATION_TIME})

            return res.status(200).json({token: token})
        }else{
            return res.status(500).send("Senha incorreta!")
        }
    })

})

app.get("/authenticate", (req, res) => {

    const authHeader = req.headers.authorization

    if (!authHeader){
        return res.status(500).send("Sem dados de autorização!")
    }

    const token = authHeader.split(" ")[1]

    try {
        jwt.verify(token, SECRET_KEY, (err, data) =>{
            if (err){
                return res.status(500).send("Token invalido")
            }
            return res.status(200).json({valid:true, user:data})
        })
    } catch (error) {
        return res.status(500).send("Erro ao tentar autenticar!")
    }
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado no endereço http://localhost:${PORT} `)
})