import "../../css/Account.css";
import { useEffect, useState } from "react";
import Axios from "axios";

import Login from "./Login";
import Register from "./Register";
import MyAccount from "./MyAccount";

function Account() {
  const [accountState, setAccountState] = useState("");

  const [usersList, setUsersList] = useState([]);

  Axios.defaults.withCredentials = true;

  /*const showUser = () => {
    Axios.get("http://localhost:3001/users").then((response) => {
      setUsersList(response);
    });
  };*/

  useEffect(() => {
    Axios.get("http://localhost:3001/login").then((response) => {
      if (response.data.loggedIn == true) {
        setAccountState(response.data.user[0].name);
      } else {
        setAccountState("");
      }
    });
  }, []);

  const registerAccount = () => {
    setAccountState("register");
  };

  const goBack = () => {
    setAccountState("");
  };

  function renderSwitch(param) {
    switch (param) {
      case "":
        return (
          <div className="account-components">
            <Login />
            <button id="create-account-button" onClick={registerAccount}>
              Create an account
            </button>
          </div>
        );
      case "register":
        return (
          <div className="account-components">
            <Register />
            <button id="create-account-button" onClick={goBack}>
              Go back
            </button>
          </div>
        );

      default:
        return (
          <div className="account-components">
            <MyAccount user={accountState} />;
          </div>
        );
    }
  }

  return <div className="account">{renderSwitch(accountState)}</div>;
}

export default Account;
