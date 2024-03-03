/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useReducer, useContext, createContext } from "react";
import PizzaReducer from "../Reducers/PizzaReducer";
export const PizzaContext = createContext([]);
export const PizzaContextDispatch = createContext(null);
const PizzaProvider = ({ children }) => {
  const [pizzaList, dispatch] = useReducer(PizzaReducer, []);
  return (
    <PizzaContext.Provider value={pizzaList}>
      <PizzaContextDispatch.Provider value={dispatch}>
        {children}
      </PizzaContextDispatch.Provider>
    </PizzaContext.Provider>
  );
};
export const usePizzas = () => {
  return useContext(PizzaContext);
};

export const usePizzasDispatch = () => {
  return useContext(PizzaContextDispatch);
};

export default PizzaProvider;
