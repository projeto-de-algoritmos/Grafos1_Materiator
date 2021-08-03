import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import MCheckbox from "../MCheckbox/MCheckbox";
import "./MSelector.css";
import materiasMocks from "../../mocks.js";
import { useHistory } from 'react-router-dom';
import generateGraph from "../../graph";



export default function MSelector() {
  const [state, setState] = React.useState(materiasMocks);
  // const [graph, setGraph] = React.useState([]);
  const history = useHistory();


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function handleClick() {
    let graphTeste = generateGraph(state);
    history.push({ pathname: '/prioridades', state: {graph: graphTeste}})
  }

  return (
    <div className="MSelector">
      <FormGroup column>
        {Object.entries(state).map((materia, idx) => (
          <MCheckbox
            name={materia[0]}
            checked={materia[1]}
            handleChange={handleChange}
            key={idx}
          ></MCheckbox>
        ))}
      </FormGroup>

      <button className="generateButton" onClick={handleClick}>
        {" "}
        Gerar Prioridades
      </button>
    </div>
  );
}
