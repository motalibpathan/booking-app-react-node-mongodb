import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css";

const Login = () => {
  const [credential, setCredential] = useState({
    username: undefined,
    password: undefined,
  });
  const navigate = useNavigate();
  const { user, loading, error, dispatch } = useContext(AuthContext);

  const handleChange = (e) => {
    setCredential((p) => ({ ...p, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      // const res = await axios.post(
      //   "http://localhost:8800/api/auth/login",
      //   credential
      // );
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credential),
      });
      const data = await response.json();
      console.log(data);
      if (data.success === false) {
        dispatch({ type: "LOGIN_FAILURE", payload: data.message });
        console.log(error);
      } else {
        dispatch({ type: "LOGIN_SUCCESS", payload: data });
        navigate("/");
      }
    } catch (err) {
      // console.log(err);
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          id="username"
          placeholder="username"
          onChange={handleChange}
        />
        <input
          type="password"
          id="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.msg}</span>}
      </div>
    </div>
  );
};

export default Login;
