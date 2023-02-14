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
              <th class="tg-835x">Count / Interval(m)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="tg-7od5">Squat</td>
              <td class="tg-7od5">20 / 30 </td>
            </tr>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
            <tr>
              <td class="tg-7od5"></td>
              <td class="tg-7od5"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
