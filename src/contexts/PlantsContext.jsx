import { useEffect } from "react";
import { useReducer } from "react";
import { createContext } from "react";

const PlantsContext = createContext(null);

const PlantsActionTypes = {
  get: 'get_all_plants'
}

const reducer = (state, action) => {
  switch(action.type){
    case PlantsActionTypes.get:
      return action.data;
    default:
      return state;
  }
}

const PlantsProvider = ({children}) => {

  const [plants, setPlants] = useReducer(reducer, []);

  useEffect(() => {
    fetch('http://localhost:8080/plants').then(res=>res.json()).then(data=>{
      setPlants({
        type: PlantsActionTypes.get,
        data: data
      });
    });
  }, []);

  return (
    <PlantsContext.Provider
      value={{
        plants
      }}
    >
      {children}
    </PlantsContext.Provider>
  );
}
 
export {PlantsProvider};
export default PlantsContext;