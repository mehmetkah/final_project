import DayListItem from "./DayListItem";

export default function DayList(props) {
  
  const dayList = props.days.map((day) => {
    
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