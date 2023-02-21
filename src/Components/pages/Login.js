import { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const [email, emailupdate] = useState("");
  const usenavigate = useNavigate();

  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        fetch("http://localhost:8000/user/" + username)
          .then((res) => {
            return res.json();
          })
          .then((response) => {
            console.log(response);
            if (Object.keys(response).length == 0) {
              toast.error("Please enter valid username");
            } else {
              if (response.password === password) {
                toast.success("Success");
                sessionStorage.setItem("username", username);
                sessionStorage.setItem("useremail",email)
                usenavigate("/");
              } else {
                toast.error("Please enter valid credentials");
              }
            }
          });
      } catch (err) {
        toast.error("Login Failed due to:" + err.message);
      }
    }
  };
  const validate = () => {
    let result = true;
    if (username === "" || username === null) {
      result = false;
      toast.warning("Please Enter Username");
    }
    if (password === "" || password === null) {
      result = false;
      toast.warning("Please Enter Password");
    }
    return result;
  };
  return (
    <div className="offset-lg-3 col-lg-6" id="table">
      <form onSubmit={ProceedLogin} className="container">
        <div className="card login">
          <div className="card-header">
            <h2>User Login</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>
                User Name<span className="errmsg">*</span>
              </label>
              <input
                value={username}
                data-testId="username-test"
                onChange={(e) => usernameupdate(e.target.value)}
                className="form-control"
              ></input>
            </div>
            <div className="form-group">
              <label>
                Password<span className="errmsg">*</span>
              </label>
              <input
                type="password"
                onChange={(e) => passwordupdate(e.target.value)}
                className="form-control"
                placeholder="Enter Password"
                autoComplete="off"
              ></input>
            </div>
            <div className="form-group">
              <label>
               Email<span className="errmsg">*</span>
              </label>
              <input
                value={email}
                onChange={(e) => emailupdate(e.target.value)}
                className="form-control"
                placeholder="Enter email"
              ></input>
            </div>
          </div>
          <div className="card-footer">
            <button type="submit" className="btn btn-dark">
              Login
            </button>
            <Link className="btn btn-dark" id="new" to={"/signup"}>
              New User
            </Link>
          </div>
        </div>
        <div></div>
      </form>
    </div>
  );
};

export default Login;
