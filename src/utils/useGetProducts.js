import { useState, useEffect } from "react";

const useGetProducts = (searchValue) =>{


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productsCopy, setProductsCopy] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const filterProducts = productsCopy.filter((product)=> product.title.toLowerCase().includes(searchValue));
    setProducts(filterProducts)
  }, [searchValue])
  

  const fetchData = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      if (response.status!==200) {
        throw new Error('Network response was not ok');
      }
      const allProducts = await response.json();
      setProducts(allProducts);
      setProductsCopy(allProducts);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  return {products,loading,error,setProducts,productsCopy,setProductsCopy};

}

export default useGetProducts;