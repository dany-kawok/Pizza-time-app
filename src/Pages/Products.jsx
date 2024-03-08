import { useParams } from "react-router-dom";
import { usePizzas } from "../Contexts/PizzaContext";
import PizzaOrder from "../Components/02-MainComponents/PizzaComponents/PizzaOrder";
function Products() {
  const { pizzaId } = useParams();
  const pizzaObject = usePizzas();
  const renderedItem = pizzaObject.data.data.filter((el) => el._id == pizzaId);
  console.log(renderedItem);
  if (pizzaId) {
    return (
      <div>
        <PizzaOrder item={renderedItem[0]} />
      </div>
    );
  } else {
    return (
      <div className="flex  justify-center items-center h-[50%] md:h-[85dvh] ">
        <h1 className="text-xl sm:text-7xl  font-bold  text-white ">
          Products Page
        </h1>
      </div>
    );
  }
}

export default Products;
