import NavBar from "./components/NavBar";
import Header from "./components/Header";
import DayList from "./components/DayList"
import Schedule from "./components/Schedule";
import './main.scss';

function App(props) {
  
  let headerText = "Week of January 30, 2023"

  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="mainContainer">
          <Header headerText={headerText} />
          <DayList 
          days={days}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
