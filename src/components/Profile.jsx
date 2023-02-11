import NavBar from "./NavBar";
import "./Profile.scss";
export default function Profile(props) {
  return (
    <div className="profile">
      <div className="userInfo">
        <img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FAang&psig=AOvVaw2jD6V7mGKj-150SxwfuDA1&ust=1676237705273000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPCQ1Zm2jv0CFQAAAAAdAAAAABAE"></img>
        <h3>Mover</h3>
      </div>
      <div className="userActions">
        <table class="tg">
          <thead>
            <tr>
              <th class="tg-835x">Movements</th>
              <th class="tg-835x">Count / Interval(m)</th>
              <th class="tg-835x">Day of Week</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
