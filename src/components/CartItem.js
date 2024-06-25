import React from "react";

const CartItem = ({ data: { product, count },handleCartChange }) => {
  

  return (
    <div className=" w-[60vw] flex justify-center items-start mt-6 mx-auto">
      <div className="w-5/12">
        <img
          className="w-[20%] mx-auto"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="w-7/12">
        <h1 className="text-2xl font-bold ">{product.title}</h1>
        <p className="text-xs font-bold ">
          <span className="text-green-700">Price : </span>${product.price}
        </p>
        <div className="my-2">
        <button
          type="button"
          className={`bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-800 ${count <= 0 && 'opacity-50 cursor-not-allowed'}`}
          onClick={()=>handleCartChange('decrease',product.id)}
          disabled={count<=0}
        >
          -
        </button>
        <span className="m-2">{count}</span>
        <button
          type="button"
          className="bg-blue-700 text-white font-bold py-2 px-4 rounded-full hover:bg-blue-800"
          onClick={()=>handleCartChange('increase',product.id)}
          >
          +
        </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
