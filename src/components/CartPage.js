import React, { useContext, useEffect, useState } from "react";
import userContext from "../context/userContext";
import CartItem from "./CartItem";
import cartChangeHandler from "../utils/cartChangeHandler";

const CartPage = () => {
  const userData = useContext(userContext);
  const [cartData, setCartData] = useState({});
  const [totalAmount, settotalAmount] = useState(0);


  const handleCartChange = (type, id) => {

    // Function cartChangeHandler to remove or add items to our cart so that we can update cartItems
    // cartChangeHandler has logic written in it
    const { tempObj, finalAmount, tempCart } = cartChangeHandler(
      type,
      id,
      cartData
    );

    setCartData(tempObj);
    settotalAmount(parseFloat(finalAmount.toFixed(2)));
    userData.setUser({ userName: userData.user.userName, cartData: tempCart });
  };

  useEffect(() => {
    structureData(userData.user.cartData);
  }, []);


  // Function to structure data in format {{id1:{count,product}} , {id2:{count,product}}} so that
  // we can display count of each in our Cart page
  const structureData = (data) => {
    let tempObj = {};
    let finalAmount = 0;
    for (let i = 0; i < data.length; i++) {
      if (tempObj[data[i].id]) {
        tempObj[data[i].id].count = tempObj[data[i].id].count + 1;
        finalAmount += data[i].price;
      } else {
        tempObj[data[i].id] = { count: 1, product: data[i] };
        finalAmount += data[i].price;
      }
    }
    setCartData(tempObj);
    settotalAmount(parseFloat(finalAmount.toFixed(2)));
  };

  return (
    <div className="mx-auto">
      {userData.user.cartData.length === 0 ? (
        <div className="text-center font-bold mt-3">Add Items To Your Cart</div>
      ) : (
        Object.keys(cartData).map((key) => (
          <CartItem
            key={key}
            data={cartData[key]}
            handleCartChange={handleCartChange}
          />
        ))
      )}

      {userData.user.cartData.length !== 0 && (
        <div className="text-xs font-bold w-[50vw] text-start mx-auto my-3">
          Total Amount to be paid:{" "}
          <span className="text-xl text-green-700">${totalAmount}</span>
        </div>
      )}
    </div>
  );
};

export default CartPage;
