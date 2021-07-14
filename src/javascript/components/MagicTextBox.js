import "../../css/MagicTextBox.css";

const MyNormalMessage = ({ myMessage }) => {
  return <>{myMessage}</>;
};

const MyComplexMessage = ({ myMessage, index }) => {
  function myFunction(event) {
    event.target.style.visibility = "hidden";
    var dots = document.querySelectorAll("[id=dots]");
    var moreText = document.querySelectorAll("[id=more]");
    var btnText = document.querySelectorAll("[id=myBtn]");

    for (var i = 0; i < dots.length; i++) {
      if (dots[i] != null && btnText[i].style.visibility == "hidden") {
        event.target.style.visibility = "visible";
        if (dots[i].style.display === "none") {
          dots[i].style.display = "inline";
          btnText[i].innerHTML = "Read more";
          moreText[i].style.display = "none";
        } else {
          dots[i].style.display = "none";
          btnText[i].innerHTML = "Read less";
          moreText[i].style.display = "inline";
        }
      }
    }
  }

  var first_part_str = myMessage.substr(0, index);
  var second_part_str = myMessage.substr(index);

  return (
    <>
      {first_part_str}
      <span id="dots">...</span>
      <span id="more"> {second_part_str} </span>{" "}
      <button onClick={myFunction} id="myBtn">
        Read more
      </button>
    </>
  );
};

const MagicTextBox = ({ title, message, link }) => {
  //length of text before adding "... read more" option
  let textSize = 150;
  var textExceded = false;

  if (message.length > textSize) {
    textExceded = true;
  }

  return (
    <div className="box">
      {" "}
      <h2>{title}</h2>
      <p>
        {textExceded ? (
          <MyComplexMessage myMessage={message} index={textSize} />
        ) : (
          <MyNormalMessage myMessage={message} />
        )}
      </p>
      <a href="#">{link}</a>
    </div>
  );
};

export default MagicTextBox;
