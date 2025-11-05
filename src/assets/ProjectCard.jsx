export default function ProjectCard({ project }) {
  return (
    <div className="project-card custom-glass-card">
      <div className="project-image">
        <img src={`./project/${project.imageLink}`} alt="Hero background" />
      </div>
      <div className="project-title-container">
        <span className="project-title">{project.title}</span>
        <span className="project-tech-stack">
          {project.techStack.map((skill) => (
            <span className="project-skill">{skill}</span>
          ))}
        </span>
      </div>
      <div className="project-description">{project.description}</div>
      <button className="project-link-button custom-btn">Code</button>
    </div>
  );
}
