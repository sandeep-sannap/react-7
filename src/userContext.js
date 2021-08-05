import React, {useState} from "react";

let UserContext = React.createContext();

export default UserContext;

export const UserProvider = ({ children }) => {
 const [users,setUsers] = useState([])
  return (
    <>
      <UserContext.Provider value={{ users,setUsers }}>{children}</UserContext.Provider>
    </>
  );
};
