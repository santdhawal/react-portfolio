import AppHeader from "views/AppHeader";
import Profile from "views/Profile";
import SkillLogo from "views/SkillLogo";
import skills from "data/skills";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <AppHeader />
      <Profile />
      <div className="content-container">
        {skills.map((item) => (
          <SkillLogo item={item} key={item.label} />
        ))}
      </div>
    </div>
  );
}

export default App;
