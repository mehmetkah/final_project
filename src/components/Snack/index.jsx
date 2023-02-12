/**********
COMPONENT THAT INTEGRATES ALL VIEWS OF THE DAYLISTITEM SCHEDULE
**********/

import React from "react";
import Empty from "./Empty";
import MovementComplete from "./MovementComplete";
import Form from "./Form";
import Countdown from "./Countdown";
import "./styles.scss";
import { useState } from "react";

export default function Snack(props) {
  
  const [mode, setMode] = useState(props.snack ? "COMPLETE": "EMPTY")

  const onAdd = (() => {
    setMode("FORM")
  })

  const onBack = (() => {
    setMode("EMPTY")
  })

  return (
    <div>
      {mode === "COMPLETE" && <MovementComplete 
      dailyMovement={props.snack}
      />}
      {mode === "EMPTY" && <Empty onAdd={onAdd}/>}
      {mode === "FORM" && <Form onBack={onBack}   />}
      
    </div>
    
  )
};