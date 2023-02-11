import "./Profile.scss";
export default function Profile(props) {
  return (
    <div className="profile">
      <div className="userInfo">
        <img
          alt="logo"
          src="/Users/mehmetkahraman/final_project/public/Avatar_Aang.png"
        ></img>
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
