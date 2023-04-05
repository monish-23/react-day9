import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <nav>
      <h1>Music World</h1>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/singers">Singers</Link>
        </li>
        <li>
          <Link to="/albums">Albums</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
