/* eslint-disable react/prop-types */
import { useState } from "react";
import pizzaSizeImg from "../../../../public/assets/images/pizzaSize.webp";
function PizzaOrder({ item }) {
  const [size, setPizzaSize] = useState(item.prices[0]);
  return (
    <div className="flex justify-center items-center  bg-white py-10">
      <div className=" flex justify-center items-center w-[50%] ">
        <img src={item.img} className="w-[400px]" />
      </div>
      <div className="w-[50%] flex flex-col gap-8">
        <h1 className="text-4xl font-bold">{item.title}</h1>
        <span className="text-2xl text-orange-700 border-b-2 border-orange-700 w-fit">
          ${size}
        </span>
        <p className="text-xl capitalize">{item.desc}</p>
        <strong className="text-lg">Choose the size</strong>
        <div className="flex justify-around items-end w-[40%] h-[50px] ">
          <div className=" w-[40px] h-[40px] relative">
            <span className="absolute text-amber-100 bg-teal-600 font-bold px-1 rounded text-[10px] top-[-5px] right-[-20px]">
              small
            </span>
            <img
              src={pizzaSizeImg}
              className="w-fit h-fit cursor-pointer"
              onClick={() => {
                setPizzaSize(item.prices[0]);
              }}
            />
          </div>
          <div className="relative w-[50px] h-[50px]">
            <span className="absolute text-amber-100 bg-teal-600 font-bold px-1 rounded text-[11px] top-[-5px] right-[-25px]">
              Medium
            </span>
            <img
              src={pizzaSizeImg}
              className="w-fit h-fit cursor-pointer"
              onClick={() => {
                setPizzaSize(item.prices[1]);
              }}
            />
          </div>
          <div className="relative w-[60px] h-[60px]">
            <span className="absolute text-amber-100 bg-teal-600 font-bold px-1 rounded text-[14px] top-[-5px] right-[-20px]">
              Large
            </span>
            <img
              src={pizzaSizeImg}
              className="w-fit h-fit cursor-pointer"
              onClick={() => {
                setPizzaSize(item.prices[2]);
              }}
            />
          </div>
        </div>
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
