import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { useState } from "react";

const PlantsContext = createContext(null);

const PlantsActionTypes = {
  get: "get_all_plants",
  add: "add_new_plant",
};

const reducer = (state, action) => {
  switch (action.type) {
    case PlantsActionTypes.get:
      return action.data;
    case PlantsActionTypes.add:
      fetch("http://localhost:8080/plants", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(action.data),
      });
      return [...state, action.data];
    default:
      return state;
  }
};

const PlantsProvider = ({ children }) => {
  const [loadingData, setLoadingData] = useState(true);
  const [plants, setPlants] = useReducer(reducer, undefined);

  useEffect(() => {
    fetch("http://localhost:8080/plants")
      .then((res) => res.json())
      .then((data) => {
        setPlants({
          type: PlantsActionTypes.get,
          data: data,
        });
        setLoadingData(false);
      });
  }, []);

  return (
    <PlantsContext.Provider
      value={{
        plants,
        setPlants,
        PlantsActionTypes,
        loadingData,
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
};

export { PlantsProvider };
export default PlantsContext;
