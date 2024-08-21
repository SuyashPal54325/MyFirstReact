import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcums from '../Component/Breadcums/Breadcums';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay.jsx';
import DiscriptionBox from '../Component/DiscriptionBox/DiscriptionBox.jsx';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct.jsx';
// import Gh from '../Component/ProductDisplay/Gh.jsx';
const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id===Number(productId));
  return (
    <div>
      <Breadcums product={product}/>
      <ProductDisplay product={product}/>
      <DiscriptionBox/>
      <RelatedProduct/>
    </div>
  )
}

export default Product
