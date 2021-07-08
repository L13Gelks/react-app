import "../../css/MagicTextBox.css";

const MagicTextBox = ({ title, message, link }) => {
  return (
    <div className="box">
      <h2>{title}</h2>
      <p>{message}</p>
      <a href="#">{link}</a>
    </div>
  );
};

export default MagicTextBox;
