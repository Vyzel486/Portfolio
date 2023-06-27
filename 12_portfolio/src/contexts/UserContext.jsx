import { useState, createContext } from "react";

const userContext = createContext({
  user: null,
  handleLogin: () => null,
  handleLogout: () => null,
});

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <userContext.Provider value={{ user, handleLogin, handleLogout }}>
      {children}
    </userContext.Provider>
  );
};

export { userContext, UserProvider };
