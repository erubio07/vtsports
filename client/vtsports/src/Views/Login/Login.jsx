import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import styles from "./Login.module.css";
import { useAuth } from "../../AuthProvider/AuthProvider";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  console.log(username);
  const [password, setPassword] = useState("");
  console.log(password);
  const auth = useAuth();
  const navigate = useNavigate();

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      if (!username || !password) {
        alert("Todos los campos son necesarios");
      }
      if(username && password){
        const data = await axios.post("https://vtsports-dev-dxex.3.us-1.fl0.io/login", {
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
          console.log(localStorage);
          auth.setIsAuthenticated(true);
          navigate("/dashboard")
        }
      }
    } catch (error) {
      console.log(error.message);
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
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
              className={styles.input}
              onChange={(e) => handlePassword(e)}
            />
          </div>
          <Button type="submit" variant="primary">
            Sing In
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
