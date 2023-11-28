import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  const [username, setUsername] = useState('');
  const [roles, setRoles] = useState('');

  const setUser = (name) => {
    setUsername(name);
  };

const setRol = (rol) => { 
  setRoles(rol);
};

  return (
    <UserContext.Provider value={{ username, setUser, roles, setRol}}>
      {children}
    </UserContext.Provider>
  );
};