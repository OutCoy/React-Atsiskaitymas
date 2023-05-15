import { createContext, useEffect, useReducer, useState } from "react";

const UsersContext = createContext(null);

const UsersActionTypes = {
  get: 'get_all_users'
}

const reducer = (state, action) => {
  switch(action.type){
    case UsersActionTypes.get:
      return action.data;
    default:
      return state;
  }
}

const UsersProvider = ({children}) => {

  const [users, setUsers] = useReducer(reducer, []);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    fetch('http://localhost:8080/users').then(res=>res.json()).then(data=>{
      setUsers({
        type: UsersActionTypes.get,
        data: data
      });
    });
  }, []);

  return (
    <UsersContext.Provider
      value={{
        currentUser,
        users,
        setUsers,
        setCurrentUser
      }}
    >
      {children}
    </UsersContext.Provider>
  );
}
 
export {UsersProvider};
export default UsersContext;