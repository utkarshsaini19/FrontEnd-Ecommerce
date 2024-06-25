import React,{ useContext} from 'react'
import useGetProductDetails from '../utils/useGetProductDetails'
import { useParams } from 'react-router-dom';
import userContext from '../context/userContext';

const ProductDetails = () => {

  const {productId} = useParams();
  const userData = useContext(userContext);
  
  const {product,loading,error} = useGetProductDetails(productId)

  if (loading)
    return <div className="text-center font-bold py-4">Loading...</div>;

  if (error) {
    return <div className="text-center font-bold py-4">Error: {error}</div>;
  }

  const handleClick = (product) =>{
    const tempData = [...userData.user.cartData,product]
    userData.setUser({...userData.user,cartData:tempData})

  }
  
  return (
    <div className='h-[90vh] w-[80vw] flex justify-center items-start mt-6 mx-auto'>
      <div className='mr-2'>
        <img className='w-[60%] h-[50%]' src={product.image} alt={product.title} />
      </div>
      <div>
        <h1 className='text-2xl font-bold my-2'>{product.title}</h1>
        <p className='text-xs font-bold my-2'><span className='text-green-700'>Description :{' '}</span>{product.description}</p>
        <p className='text-xs font-bold my-2'><span className='text-green-700'>Category :{' '}</span>{product.category.substring(0,1).toUpperCase()+product.category.substring(1)}</p>
        <p className='text-xs font-bold my-2'><span className='text-green-700'>Price :{' '}</span>${product.price}</p>
        <div className='my-2'>
          <span className="text-green-700">Rating :{' '}{product.rating.rate}/5{' '}({product.rating.count} users)</span>
        </div>
        <button type='button' onClick={()=>handleClick(product)} className='text-white bg-blue-700 hover:bg-blue-800 rounded-lg text-sm px-5 py-2'>Add to Cart</button>
      </div>
    </div>
  )
}

export default ProductDetails