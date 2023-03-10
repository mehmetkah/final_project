import "./Profile.scss";
import Avatar_Aang from "./Avatar_Aang.png";

export default function Profile(props) {
  return (
    <div className="profile">
      <div className="userInfo">
        <img alt="avatar" src={Avatar_Aang} />
        <h3>User123</h3>
      </div>
      <div className="userActions">
        <table class="tg">
          <thead>
            <tr>
              <th class="tg-835x">Movements</th>
              <th class="tg-835x">Count</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-7od5">Squats</td>
              <td class="tg-7od5">420 </td>
            </tr>
            <tr>
              <td class="tg-7od5">Push-ups</td>
              <td class="tg-7od5">200</td>
            </tr>
            <tr>
              <td class="tg-7od5">Sit-ups</td>
              <td class="tg-7od5">120</td>
            </tr>
            <tr>
              <td class="tg-7od5">Pull-ups</td>
              <td class="tg-7od5">6</td>
            </tr>
            <tr>
              <td class="tg-7od5">Jumping Jacks</td>
              <td class="tg-7od5">330</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
