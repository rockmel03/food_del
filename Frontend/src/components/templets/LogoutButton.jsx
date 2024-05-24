import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import Axios from "../../utils/Axios";
import { useNavigate } from "react-router-dom";

const LogoutButton = ({ children }) => {
  const { setAccessToken, setUser } = useContext(StoreContext);
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const response = await Axios.post("/api/v1/user/logout");
      if (response.data.status) {
        localStorage.removeItem("access_token");
        setAccessToken("");
        setUser({});
        navigate("/");
        alert("successfully logout");
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  return <button onClick={logoutHandler}>{children}</button>;
};

export default LogoutButton;
