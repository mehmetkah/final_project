/**********
THIS COMPONENT WILL DISPLAY THE COUNTDOWN OF THE INTERVAL TIME
NO SOUND AT THIS STAGE - WE WILL HAVE ONE DEFAULT SOUND AS AN ASSET IN THE APP
**********/
import ReactHowler from 'react-howler';

export default function Countdown(props) {

  return (
    <>
      <h2>
        {props.timer}
        {props.timer === 0 && <ReactHowler src="https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg" playing={props.alarmRepeat} />}
      </h2>
      
    </>
  )
}
