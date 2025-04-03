import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

function RotaProtegida({children}){
    const [autorizado,setAutorizado] = useState(false)
    const token = localStorage.getItem("token")

    const navigate = useNavigate()

    useEffect(() => {
        const verificarToken = async () => {
            try {
                
                const response = await fetch("http://localhost:3000/authenticate", {headers:{
                    "AUTHORIZATION": `Bearer ${JSON.parse(token)}`
                }})
                
                if (response.status == 500){
                    setAutorizado(false)
                    return
                }

                const dados = await response.json()

                if (dados.valid){
                    setAutorizado(true)
                }else{
                    setAutorizado(false)
                }


            } catch (error) {
                setAutorizado(false)
            }
        }
        verificarToken()
    }, [token])

    return (autorizado?<Outlet/>:<h1>Você não tem autorização para ver essa página</h1>)
}

export default RotaProtegida