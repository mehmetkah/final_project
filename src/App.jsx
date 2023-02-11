import NavBar from "./components/NavBar";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Profile from "./components/Profile";
import './main.scss';
import { useState } from "react";
import { Routes, Route} from "react-router-dom";

function App() {

  const mockSnacks = {
    "Monday": {
      id: 1,
      day: "Monday",
      exercise: "Squats",
      reps: "10",
      sets: "10"
    },
    "Tuesday": {
      id: 2,
      day: "Tuesday",
      exercise: "Push-ups",
      reps: "7",
      sets: "5"
    },
  };
  
  let headerText = "Week of February 13, 2023"
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

  const [snacksByDay, setSnacksByDay] = useState(mockSnacks);
  
  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="mainContainer">
          {/* <Header headerText={headerText} /> */}
          <Routes>
        {/* <Route path="/"> */}
            <Route index element={<DayList 
          days={days}
          snacks={snacksByDay}
          />} />
          <Route path="profile" element={<Profile/>} />
          

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          {/* <Route path="*" element={<NoMatch />} /> */}
        {/* </Route> */}
      </Routes>
          
        </div>
      </main>
    </div>
  );
}

export default App;

// PSEUDOCODE / INSTRUCTIONS
// 1. Create an API key for https://api-ninjas.com/api/exercises
//    --> store it in a src/constants.js file and import it as needed
// 2. Actually make the fetch request (and receive exercise data)
// 3. Set the state of exercises (this will be dummy data that matches the data structure from the api-ninjas exercises)
// 4. Set the state of the timer

// Data types (from form HTML Input fields): --> See DayListItem component
// 1. Exercise name (i.e. "Push-ups")
// 2. Number of reps (i.e. 5)
// 3. Number of sets (i.e. 3)
// 4. Length of interval (i.e. 30) --> gets string interpolated into "30 min"

// State at App.js level
// 1. Timer
// 2. Exercises (fetch from api-ninjas API)

////////////////////////////////////
// DUMMY DATA structure from API: //
////////////////////////////////////
// [
//   {
//     "name": "Incline Hammer Curls",
//     "type": "strength",
//     "muscle": "biceps",
//     "equipment": "dumbbell",
//     "difficulty": "beginner",
//     "instructions": "Seat yourself on an incline bench with a dumbbell in each hand. You should pressed firmly against he back with your feet together. Allow the dumbbells to hang straight down at your side, holding them with a neutral grip. This will be your starting position. Initiate the movement by flexing at the elbow, attempting to keep the upper arm stationary. Continue to the top of the movement and pause, then slowly return to the start position."
//   },
//   {
//     "name": "Wide-grip barbell curl",
//     "type": "strength",
//     "muscle": "biceps",
//     "equipment": "barbell",
//     "difficulty": "beginner",
//     "instructions": "Stand up with your torso upright while holding a barbell at the wide outer handle. The palm of your hands should be facing forward. The elbows should be close to the torso. This will be your starting position. While holding the upper arms stationary, curl the weights forward while contracting the biceps as you breathe out. Tip: Only the forearms should move. Continue the movement until your biceps are fully contracted and the bar is at shoulder level. Hold the contracted position for a second and squeeze the biceps hard. Slowly begin to bring the bar back to starting position as your breathe in. Repeat for the recommended amount of repetitions.  Variations:  You can also perform this movement using an E-Z bar or E-Z attachment hooked to a low pulley. This variation seems to really provide a good contraction at the top of the movement. You may also use the closer grip for variety purposes."
//   },