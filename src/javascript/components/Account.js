import "../../css/Account.css";
import { useState } from "react";
import Axios from "axios";

function Account() {
  const [nameReg, setNameReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const [logInStatus, setLogInStatus] = useState("");

  const [usersList, setUsersList] = useState([]);

  const createUser = () => {
    Axios.post("http://localhost:3001/create", {
      name: nameReg,
      password: passwordReg,
    }).then(() => {
      console.log("Done!");
    });
  };

  const showUser = () => {
    Axios.post("http://localhost:3001/login", {
      name: name,
      password: password,
    }).then((response) => {
      console.log(response);
      if (response.data.message) {
        setLogInStatus(response.data.message);
      } else {
        setLogInStatus(response.data[0].name);
      }
    });
  };

  /*const showUser = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUsersList(response);
    });
  };*/

  return (
    <div className="account">
      <div className="register">
        <label htmlFor="">Name</label>
        <input
          type="text"
          onChange={(event) => setNameReg(event.target.value)}
        />
        <label htmlFor="">Password</label>
        <input
          type="text"
          onChange={(event) => setPasswordReg(event.target.value)}
        />
        <button onClick={createUser}>Register</button>
      </div>

      <div className="login">
        <label htmlFor="">Name</label>
        <input type="text" onChange={(event) => setName(event.target.value)} />
        <label htmlFor="">Password</label>
        <input
          type="text"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button onClick={showUser}>Login</button>
        <h1>{logInStatus}</h1>
      </div>
    </div>
  );
}

export default Account;
