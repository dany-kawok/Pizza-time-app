import { useEffect } from "react";
import PizzaItem from "./PizzaItem";
import { usePizzas, usePizzasDispatch } from "../../../Contexts/PizzaContext";

function PizzaList() {
  const pizzaList = usePizzas();
  const dispatch = usePizzasDispatch();
  useEffect(() => {
    dispatch({ type: "get" });
  }, [dispatch]);

  console.log("PIZAAAAAAAA LIST : " + pizzaList);

  return <div className="flex justify-center items-center  mt-[40px]"></div>;
}

export default PizzaList;
