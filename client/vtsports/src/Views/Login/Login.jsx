import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./Login.module.css";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Swal from "sweetalert2";
import Spinner from "react-bootstrap/Spinner";

const Login = () => {
  const [username, setUsername] = useState("");
  // console.log(username);
  const [password, setPassword] = useState("");
  // console.log(password);
  const [showPass, setShowPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const navigate = useNavigate();

  const [capsLockOn, setCapsLockOn] = useState(false);

    const handleCapsLockOn = (e) => {
      if(e.getModifierState("CapsLock")){
        setCapsLockOn(true);
      }else{
        setCapsLockOn(false)
      }
    }

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (!username || !password) {
        Swal.fire("Debe ingresar un Usuario y Password válidos");
        setLoading(false);
        return;
      }
      if(username && password){
        const data = await axios.post("https://nearby-gilberta-vtsports-7339cb89.koyeb.app/login", {
          username,
          password,
        });
        // console.log(data);
        const userData = data.data;
        // console.log(userData);
        if(data.status === 200){
          const {accessToken, refreshToken} = userData;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("userName", userData.user.username);
          localStorage.setItem("userId", userData.user.id);
          localStorage.setItem("name", userData.user.name);
          // console.log(localStorage);
          auth.setIsAuthenticated(true);
          navigate("/dashboard")
        }
      }
    } catch (error) {
      console.log(error.message);
      if(error.response && error.response.data && error.response.data.message){
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.response.data.message,
      });
      }else {
        Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Verificar los datos ingresados.",
      });
      setLoading(false);
      } 
    }
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={(e) => {
            handleLogin(e);
          }}
        >
          <label for="username" className={styles.label}>
            Username:
          </label>
          <div className={styles.inputContainer}>
            <input
              type="text"
              id="username"
              name="user_name"
              placeholder="Username"
              className={styles.input}
              onChange={(e) => handleUsername(e)}
            />
          </div>
          <label for="password" className={styles.label}>
            Password:
          </label>
          <div className={styles.inputContainer}>
          {!showPass ? (
            <>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={styles.input}
              onChange={(e) => handlePassword(e)}
              onKeyUp={(e) => handleCapsLockOn(e)}
            />
            <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                style={{
                  display: "inline-block",
                  border: "none",
                  background: "none",
                }}
              >
                <AiOutlineEyeInvisible
                  style={{ color: "#120366", fontSize: "18px" }}
                />
              </button>
            </>
          ) : (
            <>
            <input
              type="text"
              id="password"
              name="password"
              placeholder="Password"
              className={styles.input}
              onChange={(e) => handlePassword(e)}
              onKeyUp={(e) => handleCapsLockOn(e)}
            />
            <button
                type="button"
                onClick={() => setShowPass(!showPass)}
                style={{
                  display: "inline-block",
                  border: "none",
                  background: "none",
                }}
              >
                <AiOutlineEye
                  style={{ color: "#120366", fontSize: "18px" }}
                />
              </button>
            </>
          )}
          </div>
          {capsLockOn && (
            <div className={styles.errorText}>
              <span>¡El bloqueo de mayúsculas está activado!</span>
            </div>
          )}
          <Button type="submit" variant="primary">
            {loading ? <Spinner animation="border" size="sm" /> : "Sign In"}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
