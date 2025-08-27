import "./App.css";

const skills = [
    {
        skill: "HTML+CSS",
        level: "advanced",
        color: "#2662ea",
    },
    {
        skill: "JavaScript",
        level: "advanced",
        color: "#efd81d",
    },
    {
        skill: "Web Design",
        level: "advanced",
        color: "#c3dcaf",
    },
    {
        skill: "Git and Github",
        level: "intermediate",
        color: "#e84f33",
    },
    {
        skill: "react",
        level: "advanced",
        color: "#60dafb",
    },
];

function Avator() {
    return <img src="profile.jpg" alt="image" className="avatar" />;
}

const Intro = () => {
    return (
        <div>
            <h1>Ephraim S</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
            </p>
        </div>
    );
};

const SkillList = () => {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill
                    skill={skill.skill}
                    color={skill.color}
                    level={skill.level}
                />
            ))}
        </div>
    );
};

function Skill({ skill, color, level }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === "beginner" && "👶🏻"}
                {level === "intermediate" && "👍🏻"}
                {level === "advanced" && "💪🏻"}
            </span>
        </div>
    );
}

function App() {
    return (
        <div className="card">
            <Avator />
            <div className="data">
                <Intro />
                <SkillList />
            </div>
        </div>
    );
}

export default App;
