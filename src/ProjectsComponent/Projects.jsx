import CustomCard from "../assets/CustomCard";
import "./projects.css";
import CustomButton from "../assets/CustomButton";
import ProjectCard from "../assets/ProjectCard";
import Masonry from "react-masonry-css";

export default function Projects() {
  return (
    <>
    <h2>My Projects!</h2>
      <Masonry
        breakpointCols={3}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {PROJECT_DATA.map((project) => (
          <div className="project">
            <ProjectCard project={project} />
          </div>
        ))}
      </Masonry>
    </>
  );
}

let PROJECT_DATA = [
  {
    title: "Trace Me",
    description:
      "Combats price gouging by employing an Ethereum blockchain, reducing average supply chain cost by over 20%",
    techStack: ["Ethereum", "Solidity", "Python", "Flutter", "Web3.py"],
    imageLink: "trace-me.jpg",
    github: "http://mytest.com",
  },
  {
    title: "Health Aid",
    description:
      "Designed a novel hospital recommendation algorithm, achieving 0.7 second response time",
    techStack: ["Flask", "JavaScript", "Python"],
    imageLink: "health-aid.jpg",
    github: "http://mytest.com",
  },
  {
    title: "PDFAnalyser",
    description:
      "Parsing unstructured invoice images using OpenCV, providing JSON output of all billing related fields with 93% accuracy",
    techStack: ["Flask", "JavaScript", "Python"],
    imageLink: "pdf-analyser.jpg",
    github: "http://mytest.com",
  },
  {
    title: "Sustainable 7 Progress",
    description:
      "Parsing unstructured invoice images using OpenCV, providing JSON output of all billing related fields with 93% accuracy",
    techStack: ["Tableau", "JavaScript", "Python"],
    imageLink: "pdf-analyser.jpg",
    github: "http://mytest.com",
  },
];
