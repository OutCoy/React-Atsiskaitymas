import { useContext } from "react";
import styled from "styled-components";
import PlantsContext from "../../contexts/PlantsContext";
import Card from "../Atoms/Card";
import { Link } from "react-router-dom";

const StyledHome = styled.main`
  min-height: calc(100vh - 150px);
  padding: 0 5%;
  position: relative;
  > h1 {
    text-align: center;
    padding: 20px 0;
    margin: 0;
  }
  .allCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 25px;
    margin-bottom: 20px;
  }
  > a {
    position: fixed;
    top: 100px;
    right: 5%;
    background-color: #5f5f5fca;
    padding: 15px;
    border: none;
    border-radius: 10px;
    font-size: 1rem;
    color: #fff;
    cursor: pointer;
    box-shadow: 0 0 2px black;
    text-decoration: none;
  }
  > a:hover {
    background-color: #5e5e5e68;
    color: #000;
  }
`;

const Home = () => {
  const { plants, loadingData } = useContext(PlantsContext);
  console.log(plants);

  return (
    <StyledHome>
      <Link to="/addNewPlant">Add New Plant</Link>
      {loadingData ? (
        <h1>Loading...</h1>
      ) : plants.length === 0 ? (
        <h1>Currently there are no plants, feel free to add some!</h1>
      ) : (
        <>
          <h1>All plants</h1>
          <div className="allCards">
            {plants.map((plant) => (
              <Card data={plant} key={plant.id} />
            ))}
          </div>
        </>
      )}
    </StyledHome>
  );
};

export default Home;