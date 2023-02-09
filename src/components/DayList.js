import DayListItem from "./DayListItem"
export default function DayList(props) {
  const dayList = props.days.map((day) => {
    return (
      <DayListItem
        day={day}
      />
    )
  });
  return(
    <ul>
      {dayList}
    </ul>
  )
}