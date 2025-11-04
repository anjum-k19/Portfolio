import "./landing.css";
import profileImage from '../assets/images/profile.JPG';
export default function Landing() {
  return (
    <div className="landing">
      <div className="description">
        <div className="name">
          <i>
            Anjum
            <br />
            Khandeshi
          </i>
        </div>
        <div className="general-text">
          Im a 26 year old software developer :)
        </div>
      </div>
      <div className="photo">
        <div className="arch-photo">
          <img src={profileImage} alt="profile" />
        </div>
      </div>
    </div>
  );
}
