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
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos
          id rerum vero minus amet possimus nemo facere voluptates fugiat
          commodi, itaque esse, asperiores expedita. Quae aperiam sunt
          voluptatem ex laborum.
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
