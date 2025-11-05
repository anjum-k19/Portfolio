import CustomButton from "../assets/CustomButton";
import "./navigation.css";

export default function Navigation() {
  return (
    <div className="navigation-bar flex flex-col sm:flex-row">
      <CustomButton label="Education" />
      <CustomButton label="Work" />
      <CustomButton label="Projects" />
      <CustomButton label="Reach Out" />
      <button class="cta">
        <span>Resume</span>
        <svg width="15px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </button>
    </div>
  );
}
