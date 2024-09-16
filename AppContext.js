import { useState, createContext } from "react";
import SAMPLE_DATA from "./data.sample";

export const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  const [list, setList] = useState(SAMPLE_DATA);
  const [cart, setCart] = useState([]);
  return (
    <AppContext.Provider
      value={{
        list,
        setList,
        cart,
        setCart,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export default AppProvider;
