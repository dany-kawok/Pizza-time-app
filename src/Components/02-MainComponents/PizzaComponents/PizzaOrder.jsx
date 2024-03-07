/* eslint-disable react/prop-types */
function PizzaOrder({ item }) {
  return (
    <div className="flex justify-center items-center  bg-white py-10">
      <div className=" flex justify-center items-center w-[50%] ">
        <img src={item.img} className="w-[400px]" />
      </div>
      <div className="w-[50%] flex flex-col gap-8">
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <u className="text-2xl text-orange-700">
          {item.prices && item.prices[0]}
        </u>
        <p className="text-xl capitalize">{item.desc}</p>
        <strong className="text-lg">Choose the size</strong>
        <strong className="text-lg">Choose additional ingredients</strong>
        <div className="flex items-center gap-10">
          {item.extraOptions &&
            item.extraOptions.map((el, i) => {
              return (
                <div className="flex items-center justify-center gap-1" key={i}>
                  <input id={i} type="checkbox" />
                  <label
                    htmlFor={i}
                    className="capitalize font-bold text-gray-500"
                  >
                    {el.text}
                  </label>
                </div>
              );
            })}
        </div>
        <div className="flex gap-5 ">
          <input
            type="text"
            className="w-[50px] border-2 px-4"
            defaultValue={1}
          />
          <button className="bg-orange-700 text-white  font-bold p-2">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default PizzaOrder;
