import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import register from "../../services/API";
import { validate } from "./loginValidate";
import "./Login.css";

export default function Login() {
  const [username, usernameupdate] = useState("");
  const [password, passwordupdate] = useState("");
  const usenavigate = useNavigate();
  const ProceedLogin = (e) => {
    e.preventDefault();
    if (validate(username, password)) {
      try {
        register.loginpost(username).then((response) => {
          console.log(response.data[0].password);

          if (Object.keys(response.data).length === 0) {
            toast.error("Please enter valid username");
          } else {
            if (response.data[0].password === password) {
              toast.success("Success");

              sessionStorage.setItem("useremail", username);

              usenavigate("/");
            } else {
              toast.error("Please enter valid credentials");
            }
          }
        });
      } catch (err) {
        toast.error("Login Failed due to:" + err.message);
      }
    } else {
      toast.warning("Please enter username and password");
    }
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
                Email<span className="errmsg">*</span>
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
      </form>
    </div>
  );
}
