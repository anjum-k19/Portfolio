import CustomButton from "../assets/CustomButton";
import "./navigation.css";

export default function Navigation(){
    return <div className="navigation-bar">
        <CustomButton label="Education"/>
        <CustomButton label="Work"/>
        <CustomButton label="Projects"/>
        <CustomButton label="Reach Out"/>
    </div>
}