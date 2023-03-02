import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCount } from "../../Redux/Reduce/Cartcount";
import { setLogin } from "../../Redux/Reduce/Log";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch=useDispatch();
  sessionStorage.clear();
  dispatch(setLogin(null))
  dispatch(setCount([]));

  useEffect(() => {
    navigate("/");
  }, []);
};

export default Logout;
