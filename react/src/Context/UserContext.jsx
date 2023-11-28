import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }) => {
  // const [username, setUsername] = useState('');
  // const [roles, setRoles] = useState('');
  const [userData, setUserData] = useState({
    username: '',
    roles: '',
  });

//   const setUser = (name) => {
//     setUsername(name);
//   };

// const setRol = (rol) => { 
//   setRoles(rol);
// };

const setUserInfo = (username, roles) => {
  setUserData({ username, roles });
};

  return (
    <UserProvider value={{ userData, setUserInfo }}>
      {children}
    </UserProvider>
  );
};

// username, setUser, roles, setRol, 