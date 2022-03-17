import { createContext, useState, useContext } from "react";

const DataContext = createContext();
export const DataProvider = ({ children }) => {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const values = {
    city,
    setCity,
    data,
    setData,
    notFound,
    setNotFound,
  };

  return <DataContext.Provider value={values}>{children}</DataContext.Provider>;
};

export const useData = () => useContext(DataContext);
