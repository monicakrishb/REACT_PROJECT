import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import register from "../../services/API";
import "./Profile.css";

const Profile = () => {
  useEffect(() => {
    loadData();
  }, []);

  let store = sessionStorage.getItem("useremail");
  console.log(store);

  const loadData = async () => {
    const response = await register.profileget(store).then((response) => {
      console.log(response);

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
      setinstanceaddress(response.data[0].address);

      console.log(response.data[0].password);
      console.log(instancepassword);
    });
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
  const navigate = useNavigate();

  const Update = async () => {
    const [instanceimg, setinstanceimg] = useState("");
    await register
      .profileupdate(instanceid, {
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
      })
      .finally(() => {
        loadData();
      });
  };

  return (
    <div>
      <div className="whole">
        {sessionStorage.getItem("useremail") == store ? (
          <div className="form">
            <form>
              <div className="card" id="formBox">
                <div className="label">
                  <label className="lab">FirstName</label>
                  <input
                    type="text"
                    value={instanceid}
                    data-testId="instanceuser"
                    onChange={(e) => setinstanceuser(e.target.value)}
                    required
                  />
                </div>
                <div className="label">
                  <label className="lab">Password</label>
                  <input
                    type="password"
                    value={instancepassword}
                    data-testId="instancepassword"
                    onChange={(e) => setinstancepassword(e.target.value)}
                    required
                  />
                </div>
                <div className="label">
                  <label className="lab">Phone</label>
                  <input
                    type="text"
                    data-testId="instancephone"
                    value={instancephone}
                    onChange={(e) => setinstancephone(e.target.value)}
                    required
                  />
                </div>

                <div className="label">
                  <label className="lab">Address</label>
                  <input
                    id="sample"
                    type="text"
                    data-testId="instanceaddress"
                    value={instanceaddress}
                    onChange={(e) => setinstanceaddress(e.target.value)}
                    required
                  />
                </div>
                <div id="update">
                  <button
                    className="btn btn-primary"
                    data-testid="edit-btn"
                    onClick={Update()}
                  >
                    Submit changes
                  </button>
                  <br />
                  <br />

                  <br />

                  <br />
                </div>
              </div>
            </form>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};
export default Profile;
