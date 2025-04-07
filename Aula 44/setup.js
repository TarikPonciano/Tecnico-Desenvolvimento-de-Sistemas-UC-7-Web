import { getConnection, closeConnection } from "./db.js";



const criarTabelaUsuario = async () => {
    const pool = getConnection()
    try{

        await pool.query(`
            CREATE TABLE IF NOT EXISTS usuarios (
            
            id SERIAL PRIMARY KEY,
            login TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            data_nascimento DATE NOT NULL
            );
            `)
        console.log("Tabela usuarios criada com sucesso!")

    }catch (error){
        console.error("Erro ao criar tabela:", error)
    }finally{
        closeConnection()
    }
}

criarTabelaUsuario()