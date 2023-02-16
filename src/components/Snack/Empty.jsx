/*********
THIS VIEW WILL BE FOR WHEN THERE IS NO ACTIVITY FOR THE DAY - BUTTON TO ADD A SCHEDULE - TRANSITION TO FORM
*********/

import React from "react";

export default function Empty(props) {
  return (
    <div className="add">
      <button className="addButton" onClick={props.onAdd}>+</button>
    </div>
  );
}