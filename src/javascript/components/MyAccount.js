import "../../css/MyAccount.css";
import Chat from "./Chat";
import Axios from "axios";
import { useEffect, useState } from "react";

function MyAccount({ user }) {
  const [friendUsers, setFriendUsers] = useState([]);
  const [friend, setFriend] = useState("");

  const logOut = () => {
    Axios.get("http://localhost:3001/logout");
    window.location.reload();
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getUsers").then((response) => {
      var vector = [];
      response.data.forEach((element) => {
        if (element.name != user) {
          vector = vector.concat(
            <button
              id="formSubmitButton"
              name={element.name}
              onClick={(event) => setFriend(event.target.name)}
            >
              {element.name}
            </button>
          );
        }
      });
      setFriendUsers(vector);
    });
  }, []);

  return (
    <div className="my-acccount">
      <div className="contacts-left">{friendUsers}</div>
      <div className="contacts-right">
        <div
          id="chat-hide"
          style={friend ? { visibility: "visible" } : { visibility: "hidden" }}
        >
          <Chat user={user} friend={friend} />
        </div>
        <button id="formSubmitButton" onClick={logOut}>
          LogOut
        </button>
      </div>
    </div>
  );
}

export default MyAccount;
