const cartChangeHandler = (type,id,cartData) =>{

    let tempObj = {};
    let tempCart = [];
    let finalAmount = 0;
    const keys = Object.keys(cartData);
    for (let i = 0; i < keys.length; i++) {
      if (type == 'decrease' && keys[i] == id) {
        // console.log("Inside decrese");
        tempObj[keys[i]] = {
          count: cartData[keys[i]].count - 1,
          product: cartData[keys[i]].product,
        };
        // console.log(tempObj[keys[i]].count);
      }
      else if (type == 'increase' && keys[i] == id) {
        tempObj[keys[i]] = {
          count: cartData[keys[i]].count + 1,
          product: cartData[keys[i]].product,
        };
      } else {
        tempObj[keys[i]] = {
          count: cartData[keys[i]].count,
          product: cartData[keys[i]].product,
        };
      }

      for(let j=0;j<tempObj[keys[i]].count;j++)
        {
          tempCart.push(tempObj[keys[i]].product);
        }
      finalAmount =
        finalAmount + tempObj[keys[i]].count * tempObj[keys[i]].product.price;
    }

    return {tempObj,finalAmount,tempCart};
}

export default cartChangeHandler;