import React, { useEffect, useState } from "react";
import {useNavigate} from "react-router-dom"
import Button from 'react-bootstrap/Button';
import styles from "./Login.module.css";
import {useAuth} from "../../AuthProvider/AuthProvider"

const Login = () => {
  const [username, setUsername] = useState("");
  console.log(username);
  const [password, setPassword] = useState("");
  console.log(password);
  const auth = useAuth();
  const navigate = useNavigate()
  const user = "erubio";
  const pass = "123456";

  const handleUsername = (e) => {
    setUsername(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      if(!username || !password){
        alert("Todos los campos son necesarios")
      }
      if(username !== username !== user ) {
        alert("Alguno de los datos ingresados son incorrectos")
      }
      if(username === user && password === pass){
        auth.setIsAuthenticated(true)
        navigate("/dashboard")
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return <div className={styles.formContainer}>

  <div className={styles.container}>
  <form className={styles.form} onSubmit = {(e) => handleLogin(e)}>
  <label for="username" className={styles.label} onChange={(e) => handleUsername(e)}>Username:</label>
  <div className={styles.inputContainer}>

<input type="text" id="username" name="user_name" placeholder="Username" className={styles.input}/>
  </div>
<label for="password" className={styles.label} onChange={(e) => handlePassword(e)}>Password:</label>
<div className={styles.inputContainer}>

<input type="password" id="password" name="password" placeholder="Password" className={styles.input}/>
</div>
<Button variant="primary" >
    Sing In
</Button>
  </form>
  </div>
  </div>
};

export default Login;
