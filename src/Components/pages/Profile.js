import React from "react";
import Axios from "axios";
import "./Profile.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Profile = () => {
  useEffect(() => {
    loadData();
  }, []);

  let store = sessionStorage.getItem("useremail");
  console.log(store);

  const loadData = async () => {
    const response = await Axios.get(
      `http://localhost:8000/user?email=${store}`
    );
    console.log(response.data);
    console.log(response.data[0].email);
    setinstanceid(response.data[0].id);
    setinstanceemail(response.data[0].email);
    setinstanceuser(response.data[0].name);
    setinstancefullname(response.data[0].lastname);
    setinstancephone(response.data[0].phone);
    setinstancepassword(response.data[0].password);
    setinstancecountry(response.data[0].country);
    setinstancegender(response.data[0].gender);
    setinstanceimg(response.data[0].img);

    setinstanceaddress(response.data[0].address);

    console.log(response.data[0].password);
    console.log(instancepassword);
  };
  const [instancecountry, setinstancecountry] = useState("");
  const [instanceusername, setinstanceuser] = useState("");
  const [instancefullname, setinstancefullname] = useState("");
  const [instanceid, setinstanceid] = useState("");
  const [instancephone, setinstancephone] = useState("");
  const [instanceemail, setinstanceemail] = useState("");
  const [instancepassword, setinstancepassword] = useState("");
  const [instanceaddress, setinstanceaddress] = useState("");
  const [instancegender, setinstancegender] = useState("");
  const [instanceimg, setinstanceimg] = useState("");
  const navigate = useNavigate();

  const Update = () => {
    Axios.put(`http://localhost:8000/user/${instanceid}`, {
      id: instanceid,
      name: instanceusername,
      password: instancepassword,
      email: instanceemail,
      phone: instancephone,
      country: instancecountry,
      address: instanceaddress,
      gender: instancegender,
    })
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    setTimeout(() => {
      loadData();
    });
  };

  return (
    <div>
      <div className="whole">
        <div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <img
            id="png"
            src="https://www.kindpng.com/picc/m/22-223863_no-avatar-png-circle-transparent-png.png"
            // src={instanceimg}
          />
        </div>
        {sessionStorage.getItem("useremail") == store ? (
          <div>
            <form>
              <div id="formBox">
                <div>
                  <label>User Name</label>
                  <input
                    type="text"
                    value={instanceusername}
                    data-testId="user-test"
                    onChange={(e) => setinstanceuser(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                    type="text"
                    value={instancepassword}
                    data-testId="pass-test"
                    onChange={(e) => setinstancepassword(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label>Phone</label>
                  <input
                    type="text"
                    data-testId="phone-test"
                    value={instancephone}
                    onChange={(e) => setinstancephone(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label>Country</label>
                  <input
                    type="text"
                    data-testId="country-test"
                    value={instancecountry}
                    onChange={(e) => setinstancecountry(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <button data-testid = 'edit-btn' onClick={Update()}>Edit</button>
                </div>

                <div>
                  <button onClick={() => navigate("/")} className="editbtn">
                    Go Back
                  </button>
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div>
            <div>
              <button
                onClick={() => navigate("/")}
                style={{
                  marginTop: "40px",
                  marginLeft: "43%",
                  width: "280px",
                  height: "50px",
                }}
              >
                Go Homepage
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
