import React, { Component } from "react";
import FormGroup from "@material-ui/core/FormGroup";
import MCheckbox from "../MCheckbox/MCheckbox";
import "./MSelector.css";
import materiasMocks from "../../mocks.js";

export default function MSelector() {
  const [state, setState] = React.useState(materiasMocks);

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  function mount() {
    console.log(state);
  }

  return (
    <div className="MSelector">
      <FormGroup column>
        {Object.entries(state).map((materia) => (
          <MCheckbox
            name={materia[0]}
            checked={materia[1]}
            handleChange={handleChange}
          ></MCheckbox>
        ))}
      </FormGroup>

      <button className="mountButton" onClick={mount}>
        {" "}
        Gerar Prioridades
      </button>
    </div>
  );
}
