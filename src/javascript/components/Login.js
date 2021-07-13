import "../../css/Login.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function Login() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [warning, setWarning] = useState("");

  const logIn = () => {
    Axios.post("http://localhost:3001/login", {
      name: name,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        setWarning(response.data.message);
      } else {
        window.location.reload();
      }
    });
  };

  return (
    <div class="contactForm">
      <div id="myForm">
        <h2>LogIn</h2>
        <div class="inputBox">
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            required="required"
          />
          <span>Name</span>
        </div>
        <div class="inputBox">
          <input
            type="password"
            onChange={(event) => setPassword(event.target.value)}
            required="required"
          />
          <span>Password</span>
        </div>
        <div>
          <span id="formWarning">{warning}</span>
        </div>
        <div class="inputBox">
          <button id="formSubmitButton" onClick={logIn}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
