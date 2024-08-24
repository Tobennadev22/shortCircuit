import "./index.css";
import Pic from "../src/assets/tobe.jpg";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <div>
      <img className="avatar" src={Pic} alt="" />
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Tobenna Ekwealor</h1>
      <p>
        With my strong background in UI/UX design, proficiency in essential
        design tools, user-centered approach, and excellent collaboration
        skills, I am confident that I can contribute significantly to your team
        and help create exceptional user experiences for your products. I am
        excited about the opportunity to bring my skills and passion for design
        to your company.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skillList) => (
        <Skill
          skill={skillList.skill}
          level={skillList.level}
          color={skillList.color}
        />
      ))}
    </div>
  );
}

function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "intermediate" && "👶"}
        {level === "beginner" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

export default App;
