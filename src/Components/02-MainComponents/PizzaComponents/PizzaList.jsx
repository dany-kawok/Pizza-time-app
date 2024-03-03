import { useEffect } from "react";
import PizzaItem from "./PizzaItem";
import { usePizzas, usePizzasDispatch } from "../../../Contexts/PizzaContext";

function PizzaList() {
  const pizzaList = usePizzas();
  const dispatch = usePizzasDispatch();
  useEffect(() => {
    dispatch({ type: "get" });
  }, [dispatch]);

  console.log(pizzaList.length);

  return (
    <div className="flex justify-center items-center  mt-[40px]">
      {pizzaList.map((el, i) => {
        return <PizzaItem key={i} item={el} />;
      })}
    </div>
  );
}

export default PizzaList;
