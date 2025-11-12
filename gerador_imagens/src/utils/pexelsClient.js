import axios from "axios"
import env from "react-dotenv"

//axios.create() = cria um novo cliente de conexão 
export default axios.create({
    //endereço base para a API pexels (servidor)
    baseURL: "https://api.pexels.com/v1",
    //configurar a conexão com a api
    headers: {
        Authorization: env.PEXELS_KEY
    }
})