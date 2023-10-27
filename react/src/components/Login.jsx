import React from "react";
import './Login.css'; 

const Login = () => {

    return (
        <div className="login-container">
        <h1>Login</h1>
        <form>
          <input
            type="text"
            placeholder="Username"
            id="username"
            name="username"
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            name="password"
          />
        </form>
          <button type="submit">Login</button>
      </div>
    )
}    
       
export default Login;