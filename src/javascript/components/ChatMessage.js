import "../../css/Chat.css";

function ChatMessage({ message, sender }) {
  var user = "";
  if (sender == "me") {
    user = "message-body-right";
  } else {
    user = "message-body";
  }
  return (
    <section class={user}>
      <div class="user-inbox inbox">
        <section class="msg-header">
          <p> {message} </p>
        </section>
        <div class="icon">
          <i class="user"></i>
        </div>
      </div>
    </section>
  );
}

export default ChatMessage;
