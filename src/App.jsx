// App.jsx
//Components added into App.jsx
import './App.css'
import HeroImage from './components/HeroImage'
import Main from './components/Header' //component with props
import Card from './components/Card' //component with children
import ProjectCard from './components/ProjectCard' //component with props
import PokemonCard from './components/PokemonCard' //component with props
import HogwartsImage from './components/HogwartsImage' //component no props
import HogwartsContent from './components/HogwartsContent' //component no props
import HogwartsButton from './components/HogwartsButton' //component no props

//projects array
const projects = [{
  id: 0,
  level: 2,
  name: 'Reflection'
}, {
  id: 1,
  level: 2,
  name: 'Weather App'
}, {
  id: 2,
  level: 3,
  name: 'Pokemon Resume'
}, {
  id: 3,
  level: 2,
  name: 'ChatBot'
},{
  id: 4,
  level: 2,
  name: 'Hogwarts Spells and Potions Resource'
}];
//Getting level 2 projects from Array
const name = projects.filter(projects => projects.level === 2);

const listItems = name.map(projects =>
  <li>
    <p><b>{projects.name}:</b> was completed in Level {' ' + projects.level + ' '} </p>
  </li>
);



function App() {

  return (
    <>
      <HeroImage /> {/*picture of me*/}
      <Card> {/*component with children*/}
        {/* MAIN (Center website) */}
        <div className="main">
          <Main logo="/FullLogo.jpg" portfolioName="TyQuincia's Journey to Web Dev" portfolioInfo="Enjoy the display of the beginning of my Web Dev journey." /> {/*made this logo*/}
          {/*component with props*/}

          {/* Portfolio Gallery Grid */}
          {/*components with props*/}
          <div className="row">
            <div className="column">
              <ProjectCard img="/Reflection.png" projectName=" Level 2 - Week 4 Reflection" projectDescription="Highlighting the Bootstrap CSS techniques we learned including row-col structure, styling buttons and other elements. " projectLink="https://tyquincia-oby.github.io/week_4_reflection/" buttonName="Bootstap" />
            </div>
            <div className="column">
                <ProjectCard img="/Weather.png" projectName="Weather App (Level 2 - API) " projectDescription="Mateo WeatherAPI utilized to create a live weather app for multiple cities." projectLink="https://tyquincia-oby.github.io/my-weather/" buttonName="Check The Weather" />
            </div>
            <div className="column">
                <ProjectCard img="/Pokemon.png" projectName="Pokemon Resume (Level 3 - React Components)" projectDescription=" React Component utilization with props and children to implement." />
            </div>
            <div className="column">
                <ProjectCard img="/ChatBot.png" projectName="ChatBot (Level 2 - AI)" projectDescription="Uitilizing Huggingface AI Models. we created an operable ChatBot. I used MetaLlama and Deepseek models for my project." projectLink="https://tyquincia-oby.github.io/gen-ai-demo/" buttonName="ChatBot" />
            </div>
          </div>
        </div>
    </Card>
            {/* END MAIN */}
            {/*Hogwarts Project Section*/}
    <Card> {/*component with children*/}
      <div className="content">
        <HogwartsImage /> {/*component no props*/}
        <HogwartsContent /> {/*component no props*/}
        <HogwartsButton /> {/*component no props*/}
      </div>
    </Card>
    <Card>
      {/*Rendering array for level 2 projects */}

      <ul>
        {listItems}
      </ul>
  </Card>
</>
  )
}

export default App