import "./NavBar.scss";

function NavBar() {
  return (
    <div className="navBar">
      <p className="logo">MovementSnax</p>
      <div className="links">
        <a href="/">Home</a>
        <a href="/Profile">Profile</a>
      </div>
    </div>
  );
}

export default NavBar;
