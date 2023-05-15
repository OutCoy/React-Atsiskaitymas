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
  justify-content: space-evenly;
  >img{
    width: 100%;
    height: 300px;
    object-fit: contain;
  }
  >*{
    padding: 0;
    margin: 0;
  }
`;

const Card = ({data}) => {
  return (
    <StyledCard>
      <img src={data.image} alt="Flower"/>
      <h2>{data.name}</h2>
      <p><span>Family:</span> {data.family}</p>
      <p><span>Description:</span> {data.short_description}</p>
    </StyledCard>
  );
}
 
export default Card;