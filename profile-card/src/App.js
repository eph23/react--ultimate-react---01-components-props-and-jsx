import "./App.css";

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
                of type and scrambled it to make a type specimen book.{" "}
            </p>
        </div>
    );
};

const Skill = function (props) {
    return (
        <div
            className="skill"
            style={{ backgroundColor: props.color, color: props.textColor }}
        >
            <span>{props.emoji}</span>
            <span>{props.skill}</span>
        </div>
    );
};

const SkillList = () => {
    return (
        <div className="skill-list">
            <Skill skill="React" emoji="🌐" color="blue" textColor="white" />
            <Skill
                skill="JavaScript"
                emoji="💪🏻"
                color="yellow"
                textColor="black"
            />
            <Skill skill="CSS" emoji="💪🏻" color="pink" textColor="black" />
            <Skill skill="HTML" emoji="💪🏻" color="green" textColor="white" />
        </div>
    );
};

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
