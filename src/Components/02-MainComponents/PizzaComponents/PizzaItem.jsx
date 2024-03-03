import testImg from "../../../../public/assets/images/testingImages/solo-pizza.webp";
function PizzaItem({ item }) {
  return (
    <div className="pizza-card flex flex-col justify-center items-center gap-3">
      <img src={testImg} className="w-[70%] h-auto" />
      <strong className="text-red-600">Pizza1</strong>
      <strong className="text-gray-500">$20</strong>
      <p>This is your pizza</p>
    </div>
  );
}

export default PizzaItem;
