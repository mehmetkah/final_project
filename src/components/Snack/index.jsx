/**********
COMPONENT THAT INTEGRATES ALL VIEWS OF THE DAYLISTITEM SCHEDULE
**********/

import React from "react";
import Empty from "./Empty";
import MovementComplete from "./MovementComplete";
import Form from "./Form";
import Countdown from "./Countdown";
// import useVisualMode from "../../hooks/useVisualMode"
import "./styles.scss";
import { useState } from "react";

export default function Snack(props) {
  
  const [mode, setMode] = useState(props.snack ? "FORM": "EMPTY")

  const onAdd = (() => {
    setMode("FORM")
  })

  const onBack = (() => {
    setMode("EMPTY")
  })


  // const EMPTY = "EMPTY";
  // const COMPLETE = "COMPLETE";
  // const { mode, transition, back } = useVisualMode(
  // props.dailyMovements ? COMPLETE : EMPTY);
  // return (
  //   <div>
  //     {mode === EMPTY && <Empty />}
  //     {mode === COMPLETE && <MovementComplete />}
  //   </div>

  return (
    // temp id applied to div for temp styling, remove later
    <div id="tempFormStyle">
      {mode === "FORM" && <Form snack={props.snack} onBack={onBack}   />}
      {mode === "EMPTY" && <Empty onAdd={onAdd}/>}
      <Countdown />
      <MovementComplete />
    </div>
    
  )
};