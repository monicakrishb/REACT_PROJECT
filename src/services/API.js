import axios from "axios";
class HttpService {
  registerpost = async (regobj) => {
    return await axios.post("http://localhost:8000/user", regobj);
  };
  loginpost = async (username) => {
    return await axios.get(`http://localhost:8000/user?email=${username}`);
  };
  profileget = async (store) => {
    return await axios.get(`http://localhost:8000/user?email=${store}`);
  };
  profileupdate = async (instanceid, data) => {
    return await axios.put(`http://localhost:8000/user/${instanceid}`, data);
  };
  cards = async () => {
    return await axios.get("http://localhost:8000/bookDetails");
  };
  getdata = async () => {
    return await axios.get("http://localhost:8000/cartDetails");
  };
  cardadd=async(data)=>{
    return await axios.post("http://localhost:8000/cartDetails",data)
  }
  cardload=async()=>{
    return axios.get("http://localhost:8000/cartDetails");
  }
  details = async () => {
    return await axios.get("http://localhost:8000/bookDetails");
  };
  cart = async () => {
    return await axios.get("http://localhost:8000/cartDetails");
  };
  delete = async (id) => {
    return await axios.delete("http://localhost:8000/cartDetails/" + id);
  };
  add = async (id, data) => {
    return await axios.put("http://localhost:8000/cartDetails/" + id, data);
  };
  sub = async (id, data) => {
    return await axios.put("http://localhost:8000/cartDetails/" + id, data);
  };
  check = async () => {
    return await axios.get("http://localhost:8000/cartDetails");
  };
  checkout = async (session) => {
    return await axios.get(`http://localhost:8000/user?email=${session}`);
  };
  checkid = async (instanceid, data) => {
    return await axios.put(`http://localhost:8000/user/${instanceid}`, data);
  };
  checkorder = async () => {
    return await axios.post("http://localhost:8000/orderDetails");
  };
  placeorder = async () => {
    return await axios.get("http://localhost:8000/cartDetails");
  };
  placedelete = async (id) => {
    return await axios.delete("http://localhost:8000/cartdetails/" + id);
  };
}
const register = new HttpService();
export default register;
