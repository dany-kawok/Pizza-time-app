import { useParams } from "react-router-dom";
import { usePizzas, usePizzasDispatch } from "../Contexts/PizzaContext";
import { useEffect } from "react";
import axios from "axios";
import PizzaSkeleton2 from "../Components/02-MainComponents/PizzaComponents/PizzaSkeleton2";
import PizzaOrder from "../Components/02-MainComponents/PizzaComponents/PizzaOrder";
function Products() {
  const { pizzaId } = useParams();
  const pizzaObject = usePizzas();
  const dispatch = usePizzasDispatch();

  useEffect(() => {
    const getPizzas = () => {
      axios
        .get(import.meta.env.VITE_API_BASE_URL + `/${pizzaId}`)
        .then((response) => {
          dispatch({ type: "FETCH_SUCCESS", payLoad: response });
        })
        .catch(() => {
          dispatch({ type: "FETCH_ERROR" });
        });
    };
    getPizzas();
  }, [dispatch, pizzaId]);
  // console.log(pizzaObject.data.data);
  if (pizzaObject.loading) {
    console.log(pizzaObject.loading);
    return (
      <div>
        <PizzaSkeleton2 />
      </div>
    );
  }
  if (pizzaObject.data.data) {
    return (
      <div>
        <PizzaOrder item={pizzaObject.data.data} />
      </div>
    );
  }
}

export default Products;
