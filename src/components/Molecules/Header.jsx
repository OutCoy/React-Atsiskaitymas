import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledHeader = styled.header`
height: 75px;
padding: 0 5%;
display: flex;
justify-content: space-between;
align-items: center;
background-color: #a7a7a7;
>a{
  height: 100%;
}
a>img{
  height: 100%;
}
>div{
  display: flex;
  gap: 20px;
  >a{
    text-decoration: none;
    color: #8ac1ff;
    padding: 10px;
    background-color: #2525256a;
    border-radius: 5px;
    box-shadow: 0 0 2px black;
    font-size: 1.1rem;
  }
  >a:hover{
    background-color: #b6b6b66a;
    color: #000;
  }
  .active{
    background-color: #7effce93;
    color: #fff;
  }
}
`;

const Header = () => {
  return (
  <StyledHeader>
    <Link to="/"><img src="https://www.kadencewp.com/wp-content/uploads/2020/10/alogo-1.png" alt="Logo image placeholder" /></Link>
    <div>
      <NavLink to="/login" >Log In</NavLink>
      <NavLink to="/register" >Register</NavLink>
    </div>
  </StyledHeader>
  );
};

export default Header;
