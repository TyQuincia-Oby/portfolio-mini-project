export default function ProjectCard({ img, projectName, projectDescription, projectLink, buttonName}) {
  console.log(projectLink);
  let checkButton = <div></div>;
  if (projectLink===undefined){
    console.log("not defined")
  } else {
   checkButton = <a href={projectLink}>{buttonName}</a>
    console.log("defined")
  }


  return(
  <div className="content">
    <img src={img} alt="Mountains" className="project-image" />
    <h3>{projectName}</h3>
    <p>{projectDescription}</p>
    {/* <a href={projectLink}>{buttonName}</a> */}
    {checkButton}
  </div>
  )
}