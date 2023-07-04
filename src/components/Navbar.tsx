import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="main-navigation">
        <Link to="/" className="nav-link">
          <img src={`${process.env.PUBLIC_URL}/img/home.png`} alt="Home" />
        </Link>
      </nav>
    </>
  );
}
