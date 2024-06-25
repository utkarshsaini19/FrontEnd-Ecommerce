import React, { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../context/userContext";

const ProductCard = ({ product }) => {


  const { image, title, price, id } = product;

  const userData = useContext(userContext);


  const handleClick = (product) =>{
    const tempData = [...userData.user.cartData,product]
    userData.setUser({...userData.user,cartData:tempData})

  }


  return (
    <div className="w-[100%] md:w-3/12 border-2 border-solid rounded m-2 cursor-pointer p-4 flex flex-col justify-center items-center">
      <Link to={`/product/${id}`}>
        <div className="w-40 m-auto">
          <img className="w-72" src={image} alt={title} />
        </div>
        <div className="text-center text-xl font-bold">{title}</div>
        <div className="text-center text-2xl font-bold">
          Price :<span className="text-green-500">${price}</span>
        </div>
      </Link>
      <div className="text-center mt-2">
          <button
            type="button"
            onClick={() => handleClick(product)}
            className="text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2"
          >
            Add to Cart
          </button>
        </div>
    </div>
  );
};

export default ProductCard;
