import "../../css/Register.css";
import { useEffect, useState } from "react";
import Axios from "axios";

function Register() {
  const [nameReg, setNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [passwordReg2, setPasswordReg2] = useState("");
  const [warning, setWarning] = useState("");

  const createUser = () => {
    if (passwordReg == passwordReg2) {
      Axios.post("http://localhost:3001/create", {
        name: nameReg,
        password: passwordReg,
      }).then((response) => {
        if (response.data.message) {
          setWarning(response.data.message);
        }
      });
    } else {
      setWarning("Password is not the same");
    }
  };

  return (
    <div className="contactForm">
      <form id="myForm">
        <h2>Register</h2>
        <div class="inputBox">
          <input
            type="text"
            onChange={(event) => setNameReg(event.target.value)}
            required="required"
          />
          <span>Name</span>
        </div>
        <div class="inputBox">
          <input
            id
            type="password"
            onChange={(event) => setPasswordReg(event.target.value)}
            required="required"
          />
          <span>Password</span>
        </div>
        <div class="inputBox">
          <input
            type="password"
            onChange={(event) => setPasswordReg2(event.target.value)}
            required="required"
          />
          <span>Repeat Password</span>
        </div>
        <div>
          <span id="formWarning">{warning}</span>
        </div>
        <div class="inputBox">
          <button id="formSubmitButton" onClick={createUser}>
            Register
          </button>
        </div>
      </form>
    </div>
  );
}

export default Register;
