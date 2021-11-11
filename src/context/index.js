import React from "react";
import { useLocalStorage } from "hooks";

const AppStateContext = React.createContext({
  polls: {
    counterList: [],
  },
  forums: {
    counterList: [],
  },
});

const AppStateProvider = ({ children }) => {
  const [polls, setPolls] = useLocalStorage("polls", {
    counterList: [],
  });

  const [forums, setForums] = useLocalStorage("forums", {
    counterList: [],
  });

  return (
    <AppStateContext.Provider
      value={{
        polls,
        setPolls,
        forums,
        setForums,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

const useAppState = () => React.useContext(AppStateContext);

export { AppStateProvider, useAppState };
