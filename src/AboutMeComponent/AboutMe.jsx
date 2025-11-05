import CustomCard from "../assets/CustomCard";
import CatImg from "../assets/images/stock-cat.jpeg"

import "./aboutme.css";
export default function AboutMe() {
  return (
    <div className="about-me flex flex-col sm:flex-row">
      <CustomCard cardClass="custom-glass-card">
        <div className="about-me-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Provident
          assumenda veritatis earum quas! Incidunt assumenda eos fugit
          accusantium praesentium cum, esse doloremque facere molestiae. Omnis
          quam numquam ad eos fuga.
        </div>
      </CustomCard>
      <div className="image circle-text-wrapper">
        <svg className="curve-text" viewBox="0 0 300 150">
          <defs>
            <path
              id="curve"
              d="M 150,150
                   m -112,0
                   a 112,112 0 1,1 224,0"
            />
          </defs>
          <text textAnchor="middle">
            <textPath href="#curve" startOffset="50%">
              More About Me!
            </textPath>
          </text>
        </svg>
        <div className="about-me-photo circle-text-circle-part">
          <img src={CatImg} alt="profile" />
        </div>
      </div>
    </div>
  );
}
