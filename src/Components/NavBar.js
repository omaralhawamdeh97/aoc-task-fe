import { ThemeButton, NavItem, Logo, Button, NavButtons } from "../styles";
import library from "../library.png";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/actions/authActions";

const NavBar = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const handleSignOut = () => {
    dispatch(signOut(history));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <Logo to="/" className="navbar-brand">
        <img src={library} alt="logo" />
      </Logo>
      <div className="navbar-nav ml-auto">
        {user && (
          <NavItem
            className="nav-item"
            to="/books"
            style={{ padding: "0.25em 1em" }}
          >
            Books
          </NavItem>
        )}

        <NavButtons>
          {user ? (
            <>
              <h3>Hello {user.username} </h3>
              <Button onClick={handleSignOut}> Sign out</Button>
              <Link to="/cart">
                <Button>Cart</Button>
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup">
                <Button>Sign up</Button>
              </Link>
              <Link to="/signin">
                <Button>Sign in</Button>
              </Link>
            </>
          )}

          <ThemeButton className="nav-item" onClick={props.toggleTheme}>
            {localStorage.getItem("color") === "light" ? "Dark" : "Light"} Mode
          </ThemeButton>
        </NavButtons>
      </div>
    </nav>
  );
};

export default NavBar;
