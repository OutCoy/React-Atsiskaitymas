import styled from "styled-components";

const StyledCard = styled.div`
  height: 500px;
  border: 1px solid black;
  padding: 10px;
  box-sizing: border-box;
  border-radius: 5px;
  width: 300px;
  text-align: center;
  display: flex;
  flex-direction: column;
  >h2{
    margin: 0 0 10px 0;
  }
  >img{
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
`;

const Card = ({data}) => {
  return (
    <StyledCard>
      <h2>{data.name}</h2>
      <img src={data.image} alt="Flower"/>
      <p><span>Family: {data.family}</span></p>
      <p><span>Description: {data.short_description}</span></p>
    </StyledCard>
  );
}
 
export default Card;