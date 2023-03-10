import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import register from "../../services/API";
import StrengthMeter from "./StrengthMeter";
import "./Register.css";

const Register = () => {
  const [id, idchange] = useState("");
  const [name, namechange] = useState("");
  const [password, passwordchange] = useState("");
  const [email, emailchange] = useState("");
  const [phone, phonechange] = useState("");
  const [country, countrychange] = useState("India");
  const [address, addresschange] = useState("");
  const [gender, genderchange] = useState("female");

  const navigate = useNavigate();
  const [pwdInput, initValue] = useState({
    password: "",
  });
  const [isError, setError] = useState(null);
  const onChange = (e) => {
    let password = e.target.value;
    initValue({
      ...pwdInput,
      password: e.target.value,
    });
    setError(null);
    passwordchange(e.target.value);
    let caps, small, num, specialSymbol;
    if (password.length < 4) {
      setError(
        "Password should contain minimum 4 characters, with one UPPERCASE, lowercase, number and special character: @$! % * ? &"
      );
      return;
    } else {
      caps = (password.match(/[A-Z]/g) || []).length;
      small = (password.match(/[a-z]/g) || []).length;
      num = (password.match(/[0-9]/g) || []).length;
      specialSymbol = (password.match(/\W/g) || []).length;
      if (caps < 1) {
        setError("Must add one UPPERCASE letter");

        return;
      } else if (small < 1) {
        setError("Must add one lowercase letter");
        return;
      } else if (num < 1) {
        setError("Must add one number");
        return;
      } else if (specialSymbol < 1) {
        setError("Must add one special symbol: @$! % * ? &");
        return;
      }
    }
  };
  const [isStrong, initRobustPassword] = useState(null);
  const initPwdInput = async (childData) => {
    initRobustPassword(childData);
  };

  const IsValidate = () => {
    let isproceed = true;
    let errormessage = " please enter the value in";

    if (id === null || id === "") {
      isproceed = false;
      errormessage += " Username";
    }
    if (id === null || name === "") {
      isproceed = false;
      errormessage += " lastname";
    }
    if (id === null || password === "") {
      isproceed = false;
      errormessage += " Password";
    }
    if (id === null || email === "") {
      isproceed = false;
      errormessage += " Email";
    } else {
      if (!email.match("[a-z0-9]+@[a-z]+[.][a-z]{2,3}")) {
        isproceed = false;
        toast.warning("please enter the vaild email");
      }

      if (!isproceed) {
        toast.warning(errormessage);
      }
    }

    return isproceed;
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    let regobj = { id, name, password, email, phone, country, address, gender };
    if (IsValidate()) {
      await register
        .registerpost(regobj)
        .then((res) => {
          toast.success("registered successfully");
          success();
        })
        .catch((err) => {
          toast.error("Failed" + err.message);
        });
    }
  };
  const success = () => {
    navigate("/login");
  };
  return (
    <div className="offset-lg-3 cl-lg-6 reg">
      <form
        className="container"
        id="container"
        onSubmit={handlesubmit}
        data-testid="form"
      >
        <div className="card">
          <div className="card-header">
            <h5>User Registeration</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    FirstName<span className="errmsg">*</span>
                  </label>
                  <input
                    value={id}
                    data-testId="username-test"
                    tye="text"
                    onChange={(e) => idchange(e.target.value, onChange)}
                    className="form-control input"
                    required
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    LastName<span className="errmsg">*</span>
                  </label>
                  <input
                    value={name}
                    type="text"
                    data-testId="name-test"
                    onChange={(e) => namechange(e.target.value)}
                    className="form-control  input"
                  ></input>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>
                    Password<span className="errmsg">*</span>
                  </label>
                  <input
                    type="password"
                    data-testid="password-test"
                    id="password"
                    name="password"
                    className="form-control  input"
                    onChange={onChange}
                    value={password}
                    required
                  />
                  <small id="errormsg">
                    {isError !== null && <p className="errors"> - {isError}</p>}
                  </small>
                  <StrengthMeter
                    id="passstrength"
                    password={password}
                    actions={initPwdInput}
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Email<span className="errmsg">*</span>
                  </label>
                  <input
                    type="text"
                    value={email}
                    data-testid="email-test"
                    onChange={(e) => emailchange(e.target.value)}
                    className="form-control input"
                    required
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Phone<span className="errmsg">*</span>
                  </label>
                  <input
                    value={phone}
                    data-testid="phone-test"
                    onChange={(e) => phonechange(e.target.value)}
                    className="form-control input"
                    required
                  ></input>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="form-group">
                  <label>
                    Country<span className="errmsg">*</span>
                  </label>
                  <select
                    value={country}
                    onChange={(e) => countrychange(e.target.value)}
                    className="form-control inputOpt input"
                    id="country"
                  >
                    st onChange = <option value="india">India</option>
                    <option value="usa">USA</option>
                    <option value="singapore">Singapore</option>
                  </select>
                </div>
              </div>
              <div className="col-lg-6" id="genderwrap">
                <label>Gender</label>
                <div className="" id="gender">
                  <br></br>
                  <div>
                    <input
                      type="radio"
                      checked={gender === "male"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="male"
                      className="app-check"
                    ></input>
                    <label>Male</label>
                  </div>
                  <div>
                    <input
                      type="radio"
                      checked={gender === "female"}
                      onChange={(e) => genderchange(e.target.value)}
                      name="gender"
                      value="female"
                      className="app-check"
                    ></input>
                    <label>Female</label>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="form-group">
                  <label>Address</label>
                  <textarea
                    id="address"
                    value={address}
                    onChange={(e) => addresschange(e.target.value)}
                    className="form-control input"
                    required
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            {isStrong === "strong" && (
              <button type="submit" className="btn btn-dark">
                Register
              </button>
            )}
          </div>
        </div>
        <br />
      </form>
    </div>
  );
};

export default Register;
