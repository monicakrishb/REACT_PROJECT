import axios from "axios"
export const registerpost=(regobj)=>{
    return axios
    .post("http://localhost:8000/user", regobj)
}
