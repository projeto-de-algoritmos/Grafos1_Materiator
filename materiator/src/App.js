import "./App.css";
import NavBar from "./Components/NavBar/NavBar";
import SelectField from "./Components/SelectField/SelectField";
import MSelector from "./Components/MateriaSelector/MSelector";

function App() {
  return (
    <>
      <NavBar text="Materiator" />
      <h2 className="question"> Quais matérias c já fez?</h2>

      <MSelector></MSelector>
    </>
  );
}

export default App;
