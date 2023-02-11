import DayListItem from "./DayListItem";
//import MovementComplete from "./Snack/MovementComplete";

export default function DayList(props) {
  
  
  const dayList = props.days.map((day) => {
    //console.log("HERE:", props["snacks"][day]);
    return (
      <DayListItem
        day={day}
        snacks={props["snacks"][day]}
      />
    )
    
  });
  return (
    <ul>
      {dayList}
    </ul>
  )
}