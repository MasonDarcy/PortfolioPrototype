import Proto from "./components/Proto";
import GifCube from "./components/GifCube";
import NameSplash from "./components/NameSplash";
import NavBar from "./components/NavBar";
import Doodad from "./components/Doodad";
import SkillStack from "./components/SkillStack/SkillStack";

function App() {
  return (
    <main>
      <NavBar />
      <div className="column">
        <NameSplash />
      </div>
    </main>
  );
}

export default App;
