import NavBar from "./components/NavBar";
import Header from "./components/Header";

import './main.scss';

function App() {
  let headerText = "Week of January 30, 2023"
  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map((name) => {
    return (<div className="day">
      <p className="dayName">{name}</p>
      <div className="cardContainer">
        <button className="addButton">+</button>
      </div>
    </div>)
  })

  return (
    <div className="App">
      <NavBar />
      <main>
        <div className="mainContainer">
          <Header headerText={headerText} />
          {days}
        </div>
      </main>
    </div>
  );
}

export default App;
