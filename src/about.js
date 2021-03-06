import "./css/about.css";
import MagicTextBox from "./javascript/components/MagicTextBox";

//Messages and stuff
var title = "amet consectetur";
var message =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, a!";
var link = "#";
//Me
var title_me = "My Info";
var message_me =
  "My name is Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, a!";
var link_me = "#link-me";
//Lore
var title_lore = "Lorem";
var message_lore =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae temporibus soluta deserunt, possimus sequi excepturi repellendus, nobis expedita beatae inventore, qui non facilis unde. Fugiat sequi sint cum aperiam error repellendus cupiditate expedita reprehenderit, facilis non harum vel quisquam commodi. Similique magnam temporibus doloribus! Quos quidem dolores porro autem alias.";
var link_lore = "#";
//End of Messages and stuff

function about() {
  return (
    <div className="about">
      <MagicTextBox
        title={title_me}
        message={message_me}
        link={"/about-me"}
        linkName={"About Me"}
      />
      <MagicTextBox title={title} message={message} link={link} linkName={""} />
      <MagicTextBox
        title={title_lore}
        message={message_lore}
        link={link_lore}
        linkName={""}
      />
      <MagicTextBox title={title} message={message} link={link} linkName={""} />
      <MagicTextBox title={title} message={message} link={link} linkName={""} />
    </div>
  );
}

export default about;
