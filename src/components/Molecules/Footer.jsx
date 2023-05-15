import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 75px;
  background-color: #a7a7a7;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 700;
  color: #3a3a3a;
  border-top: 2px solid #3d3d3d;
  box-sizing: border-box;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; All Rights Reserved by PL/\NTs, 2023</p>
    </StyledFooter>
  );
}
 
export default Footer;