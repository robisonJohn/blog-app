import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav>
      <div className="nav">
        <NavLink className="logo" to="/">
          The CoolestKidsontheBlock App
        </NavLink>
        <div className="navlinks">
          <NavLink className="link" to="/blog">
            Blogs
          </NavLink>
          <NavLink className="link" to="/add-blog">
            Add Blog
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
