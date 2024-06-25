import useGetProducts from "../utils/useGetProducts";
import ProductCard from "./ProductCard";
import userContext from "../context/userContext";
import { useContext } from "react";
import ScrollToTopButton from "./ScrollToTopButton";

const HomePage = () => {
  const { searchValue } = useContext(userContext);

  // Getting Data from custom Hooks useGetProducts so that we are concerned with UI Part Only
  const { products, loading, error } = useGetProducts(searchValue);

  if (loading)
    return <div className="text-center font-bold py-4">Loading...</div>;

  if (error) {
    return <div className="text-center font-bold py-4">Error: {error}</div>;
  }


  return (
    <div>
      <h1 className="text-center font-bold mt-3">Products</h1>
      <div className="flex flex-wrap justify-center">
        {products.length !== 0 ?
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          )) : <div className="text-center font-bold mt-3">No Items to Display</div> } 
      </div>
      {/* Sticky Button to scroll to top when we move to the end of page  */}
      <ScrollToTopButton />
    </div>
  );
};

export default HomePage;
