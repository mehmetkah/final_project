/**********
COMPONENT THAT INTEGRATES ALL VIEWS OF THE DAYLISTITEM SCHEDULE
**********/

import React from "react";
import Empty from "./Empty";
import MovementComplete from "./MovementComplete";
import Form from "./Form";
import Countdown from "./Countdown";
import useVisualMode from "../../hooks/useVisualMode"
import "./styles.scss";

export default function Snack(props) {
  
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
    // temp id applie to div for temp styling, remove later
    <div id="tempFormStyle">
      <Form />
      <Empty />
      <Countdown />
      <MovementComplete />
    </div>
    
  )
};