import imgAvatar from "/assets/images/image-avatar.jpg";
import { Link } from "react-router-dom";
function ProfilePicture() {
  return (
    <Link to="/">
      <img
        src={imgAvatar}
        alt="profile picture"
        className="w-[40px] h-[40px] rounded-[10px] "
      />
    </Link>
  );
}

export default ProfilePicture;
