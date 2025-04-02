import { useState } from "react"
import "./Login.css"


function Login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const enviar = async (e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:3000/login", { method: "POST", headers:{"CONTENT-TYPE": "application/json"}, body: JSON.stringify({ username: username, password: password }) })

        console.log(await response.text())
    }

    return (
        <div className="content">
            <form>
                <label>Username</label>
                <br />
                <input type="text" name="username" value={username} onChange={(e) => { setUsername(e.target.value) }} required />
                <br />
                <label>Password</label>
                <br />
                <input type="password" name="password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
                <br />

                <button onClick={enviar}>Enviar</button>
            </form>
        </div>
    )
}



export default Login