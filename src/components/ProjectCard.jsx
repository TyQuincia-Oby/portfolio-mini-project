export default function ProjectCard({ img, projectName, projectDescription, projectLink, buttonName}) {
  return(
  <div className="content">
    <img src={img} alt="Mountains" className="project-image" />
    <h3>{projectName}</h3>
    <p>{projectDescription}</p>
    <a href={projectLink}>{buttonName}</a>
  </div>
  )
}