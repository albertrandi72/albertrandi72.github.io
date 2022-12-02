import BackgroundAnimate from "./BackgroundAnimate";
import Description from "./Description";
import NameAndSocial from "./NameAndSocial";
import ProfileImage from "./ProfileImage";

export default function () {
  return (
    <div>
      <BackgroundAnimate />
      <ProfileImage />
      <NameAndSocial />
      <Description />
    </div>
  );
}
