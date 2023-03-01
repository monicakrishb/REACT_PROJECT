import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setLogin } from "../../Redux/Reduce/Log";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  sessionStorage.clear();
  dispatch(setLogin(null))
  useEffect(() => {
    navigate("/");
  }, []);
};

export default Logout;
