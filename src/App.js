import AppHeader from "views/AppHeader";
import SkillLogo from "views/SkillLogo";
import skills from "data/skills";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <div className="content-container">
        {skills.map((item) => (
          <SkillLogo item={item} key={item.label} />
        ))}
      </div>
    </div>
  );
}

export default App;
