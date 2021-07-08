import "../../css/MagicTextBox.css";

const MagicTextBox = ({ title, message, link }) => {
  let size_rest = 150;
  if (message.length > size_rest) {
    for (var index = 0; index < message.length; index++) {
      if (index == size_rest) {
        var first_part_str = message.substr(0, index);
        var dots = <span id="dots">...</span>;
        var second_part_str = <span id="more"> {message.substr(index)} </span>;
        var button = (
          <button onClick={myFunction} id="myBtn">
            Read more
          </button>
        );
      }
    }
  } else {
    var first_part_str = message;
  }

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
  return (
    <div className="box">
      <h2>{title}</h2>
      <p>
        {first_part_str}
        {dots}
        {second_part_str}
        {button}
      </p>
      <a href="#">{link}</a>
    </div>
  );
};

export default MagicTextBox;
