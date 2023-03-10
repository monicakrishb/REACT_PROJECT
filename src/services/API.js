import axios from "axios";
class HttpService {
  environment = process.env.REACT_APP_ENV;
  registerpost = (regobj) => {
    return axios.post(this.environment + "/user", regobj);
  };
  loginpost = (username) => {
    return axios.get(this.environment + `/user?email=${username}`);
  };
  profileget = (store) => {
    return axios.get(this.environment + `/user?email=${store}`);
  };
  profileupdate = (instanceid, data) => {
    return axios.put(this.environment + `/user/${instanceid}`, data);
  };
  cards = () => {
    return axios.get(this.environment + "/bookDetails");
  };
  getdata = () => {
    return axios.get(this.environment + "/cartDetails");
  };
  cardadd = (data) => {
    return axios.post(this.environment + "/cartDetails", data);
  };
  cardload = () => {
    return axios.get(this.environment + "/cartDetails");
  };
  details = () => {
    return axios.get(this.environment + "/bookDetails");
  };
  cart = () => {
    return axios.get(this.environment + "/cartDetails");
  };
  delete = (id) => {
    return axios.delete(this.environment + "/cartDetails/" + id);
  };
  add = (id, data) => {
    return axios.put(this.environment + "/cartDetails/" + id, data);
  };
  sub = (id, data) => {
    return axios.put(this.environment + "/cartDetails/" + id, data);
  };
  check = () => {
    return axios.get(this.environment + "/cartDetails");
  };
  checkout = (session) => {
    return axios.get(this.environment + `/user?email=${session}`);
  };
  checkid = (instanceid, data) => {
    return axios.put(this.environment + `/user/${instanceid}`, data);
  };
  checkorder = async (data) => {
    return await axios.post(this.environment + "/orderDetails",data);
  };
  placeorder = () => {
    return axios.get(this.environment + "/cartDetails");
  };
  placedelete = (id) => {
    return axios.delete(this.environment + "/cartdetails/" + id);
  };
  order = () => {
    return axios.get(this.environment + "/orderDetails");
  };
  orderid = (id) => {
    return axios.delete(this.environment + "/orderDetails/" + id);
  };
}
const   register = new HttpService();
export default register;
