import CustomCard from "../assets/CustomCard";
import "./projects.css";
import CustomButton from "../assets/CustomButton";

export default function Projects() {
  return (
    <>
      {PROJECT_DATA.map((project) => (
        <div className="project">
          <CustomCard cardClass="custom-glass-card">
            {/* photo here on the left  */}
            {/* title and text  */}
            <div className="project-image"><img src={`./project/${project.imageLink}`} alt="Hero background" /></div>
            <div className="project-title-container">
              <span className="project-title">{project.title}</span>
              <span className="project-tech-stack">
                {project.techStack.map((skill) => (
                  <span className="project-skill">{skill}</span>
                ))}
              </span>
            </div>
            <div className="project-description">{project.description}</div>
          </CustomCard>
        </div>
      ))}
    </>
  );
}

let PROJECT_DATA = [
  {
    title: "Trace Me",
    description:
      "Combats price gouging by employing an Ethereum blockchain, reducing average supply chain cost by over 20%",
    techStack: ["Ethereum", "Solidity", "Python", "Flutter", "Web3.py"],
    imageLink:"trace-me.jpg"
  },
  {
    title: "Health Aid",
    description:
      "Designed a novel hospital recommendation algorithm, achieving 0.7 second response time",
    techStack: ["Flask", "JavaScript", "Python"],
    imageLink:"health-aid.jpg"
  },
  {
    title: "PPDFAnalyser",
    description:
      "Parsing unstructured invoice images using OpenCV, providing JSON output of all billing related fields with 93% accuracy",
    techStack: ["Flask", "JavaScript", "Python"],
    imageLink:"pdf-analyser.jpg"
  },
];
