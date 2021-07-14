import "../../css/Chat.css";
import ChatMessage from "./ChatMessage";
import { useEffect, useState } from "react";
import Axios from "axios";

let seen = new Set();

function Chat({ user, friend }) {
  const [messageVector, setMessageVector] = useState([]);

  const sendMessage = () => {
    var element = document.getElementById("data");
    var value = element.value;

    Axios.post("http://localhost:3001/setMessages", {
      user: user,
      friend: friend,
      message: value,
    });

    element.value = "";
  };

  function getMessages() {
    if (messageVector.length == 0) {
      seen.clear();
    }
    Axios.post("http://localhost:3001/getMessages", {
      user: user,
      friend: friend,
    }).then((response) => {
      if (response.data.message) {
        setMessageVector([]);
      } else if (response) {
        var vetor = [];
        var typeofUser = "";
        response.data.forEach((element) => {
          if (!seen.has(element.id)) {
            seen.add(element.id);
            if (element.user == user + "-" + friend) {
              typeofUser = "me";
            } else {
              typeofUser = "";
            }
            vetor.push(
              <ChatMessage
                message={element.message}
                sender={typeofUser}
                key={element.id}
                number={element.id}
              />
            );
          }
        });
        setMessageVector(messageVector.concat(vetor));
      }
    });
  }
  /*
  useEffect(() => {
    const interval = setInterval(() => {
      if (user != "" && friend != "") {
        getMessages();
      }
    }, 3000);
    return () => clearInterval(interval);
  }, []);*/

  return (
    <div className="wrapper">
      <div className="title">{friend}</div>
      <div className="form">{messageVector}</div>
      <section className="typing-field">
        <div className="input-data">
          <input id="data" type="text" required placeholder="Type Something" />
          <button id="send-btn" onClick={sendMessage}>
            Send
          </button>
        </div>
      </section>
      <button id="formSubmitButton" onClick={getMessages}>
        Reload
      </button>
    </div>
  );
}

export default Chat;
