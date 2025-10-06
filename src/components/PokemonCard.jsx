export default function PokemonCard({ img, projectName, projectDescription}) {
  return(
  <div className="content">
    <img src={img} alt="Mountains" className="project-image" />
    <h3>{projectName}</h3>
    <p>{projectDescription}</p>
  </div>
  )
}