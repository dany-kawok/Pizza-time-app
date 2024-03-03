export default function reducer(currentPizzas, action) {
  switch (action.type) {
    case "get": {
      const request = new XMLHttpRequest();
      request.open(
        "GET",
        "https://food-delivery-app-two-delta.vercel.app/api/products",
        false
      );
      request.send(null);
      if (request.status !== 200) {
        return;
      }
      return JSON.parse(request.responseText);
    }
  }
}
