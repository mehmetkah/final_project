/**********
COMPONENT THAT INTEGRATES ALL VIEWS OF THE DAYLISTITEM SCHEDULE
**********/

import React from "react";
import Empty from "./Empty";
import MovementComplete from "./MovementComplete";
import Form from "./Form";
import "./styles.scss";
import { useState } from "react";

export default function Snack(props) {

  const [completedDailyTotal, setCompletedDailyTotal] = useState({
    movement: "",
    reps: 0,
    sets: 0
  });

  const [mode, setMode] = useState("EMPTY")

  const onAdd = (() => {
    setMode("FORM")
  })

  const onBack = (() => {
    setMode("EMPTY")
  })

  const onDone = function(d) {
    setMode("COMPLETE");
    setCompletedDailyTotal(d);
  }

  return (
    <>
      {mode === "EMPTY" && <Empty onAdd={onAdd} />}
      {mode === "FORM" && <Form onBack={onBack} onDone={onDone}/>}
      {mode === "COMPLETE" && <MovementComplete dailyMovement={completedDailyTotal}/>}
    </>
    
  )
};