import NavBar from "./components/NavBar";
import Header from "./components/Header";

import './main.scss';

function App() {
  let headerText = "Week of January 30, 2023"

  return (
    <div className="App">
      <NavBar />
      <main>
        <Header headerText={headerText} />
        <div className="day">
          <p className="dayName">Monday</p>
          <div className="cardContainer">
          <button className="addButton">+</button>
          </div>

        </div>
      </main>
    </div>
  );
}

export default App;
