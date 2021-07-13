import "../../css/ProfilePicture.css";
import Axios from "axios";
import picture from "../../img/profile_img/default.png";

function MyAccount() {
  return (
    <div className="my-profile">
      <img id="my-profile-picture" src={picture} alt="" />
    </div>
  );
}

export default MyAccount;
