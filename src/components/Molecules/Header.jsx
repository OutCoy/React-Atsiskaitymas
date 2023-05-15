import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import UsersContext from "../../contexts/UsersContext";
import { useContext } from "react";

const StyledHeader = styled.header`
  height: 75px;
  padding: 0 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #a7a7a7;
  border-bottom: 2px solid #3d3d3d;
  box-sizing: border-box;
  > a {
    height: 100%;
  }
  a > img {
    height: 100%;
  }
  > div {
    display: flex;
    gap: 20px;
    > a:hover {
      background-color: #b6b6b66a;
      color: #000;
    }
    > button {
      cursor: pointer;
      border: none;
      padding: 10px;
      border-radius: 5px;
      font-size: 1.1rem;
      background-color: #ffa7a7;
      box-shadow: 0 0 2px black;
    }
    > button:hover {
      background-color: #ff000090;
    }
  }
  .homeLink {
    height: unset;
  }
  div > a,
  .homeLink {
    text-decoration: none;
    color: #8ac1ff;
    padding: 10px;
    background-color: #2525256a;
    border-radius: 5px;
    box-shadow: 0 0 2px black;
    font-size: 1.1rem;
  }
  .active {
    background-color: #7effce93;
    color: #fff;
  }
`;

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UsersContext);

  return (
    <StyledHeader>
      <Link to="/">
        <img
          src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png"
          alt="Logo placeholder"
        />
      </Link>
      {currentUser && (
        <NavLink className="homeLink" to="/">
          Home
        </NavLink>
      )}
      <div>
        {!currentUser ? (
          <>
            <NavLink to="/login">Log In</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        ) : (
          <button
            onClick={() => {
              setCurrentUser(null);
            }}
          >
            Log Out
          </button>
        )}
      </div>
    </StyledHeader>
  );
};

export default Header;
