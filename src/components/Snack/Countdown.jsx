/**********
THIS COMPONENT WILL DISPLAY THE COUNTDOWN OF THE INTERVAL TIME
NO SOUND AT THIS STAGE - WE WILL HAVE ONE DEFAULT SOUND AS AN ASSET IN THE APP
**********/

export default function Countdown(props) {
  return (
    <h2>
      {props.timer}
    </h2>
  )
}