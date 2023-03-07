import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCount } from "../../Redux/Reduce/Cartcount";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  sessionStorage.clear();
  dispatch(setCount([]));

  useEffect(() => {
    navigate("/");
  }, []);
};

export default Logout;
