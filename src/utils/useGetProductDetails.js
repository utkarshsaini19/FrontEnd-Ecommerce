import { useState, useEffect, useContext } from "react";
import userContext from "../context/userContext";

const useGetProductDetails = (productId) =>{


    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const userData = useContext(userContext);

    
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const fetchData = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        if (response.status!==200) {
          throw new Error('Network response was not ok');
        }
        const allProducts = await response.json();
        setProduct(allProducts);
        setLoading(false);
        userData.setIsDataLoaded(true);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

  return {product,loading,error};

}

export default useGetProductDetails;