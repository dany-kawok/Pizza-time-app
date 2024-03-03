export default function reducer(currentPizzas, action) {
  switch (action.type) {
    case "get": {
      const pizzaAPI = async () => {
        try {
          const res = await fetch(
            "https://food-delivery-app-two-delta.vercel.app/api/products"
          );
          const data = await res.json();
          console.log(data);
          return data;
        } catch (error) {
          console.log(error);
        }
      };
      pizzaAPI();
    }
  }
}
