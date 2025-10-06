export default function Main({ logo, portfolioName , portfolioInfo }) {
  return(
    <div className="main">

        <h1><img src={logo} alt="Logo" className="logo btn" /></h1>
        <hr />
        <h2>{portfolioName}</h2>
        <p>{portfolioInfo}</p>

    </div>
  )
}