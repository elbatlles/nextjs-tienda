import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useRouter } from 'next/router'
import axios, { AxiosResponse } from 'axios'
import AppContext from 'context/AppContext'
 

const ProductPage = () => {
  // state
  const [product, setProduct] = useState<TProduct>()
  const { addToCart } = useContext(AppContext);
  //const [favorites, dispatch] = useReducer({}, []);
  // router
  const {
    query: { id },
  } = useRouter()
  const handleAddToCart = (product: TProduct) => {
    addToCart(product);
  };
  
  useEffect(() => {
    let didCancel=false
    const getProducts =async () =>{
      const responseProducts: AxiosResponse = await axios.get(`/api/avo/${id}`)
      console.log(responseProducts.data)
      !didCancel && setProduct(responseProducts.data)
    }
    getProducts()
    return () => {
      
    }
  }, [id])
  return (
    <section>
     
      <div className="grid grid-cols-3 gap-4 mt-4">
    <div className=" m-auto">
    <img src={product?.image} />
    </div>
    <div className="  col-span-2 p-2">
    <h2> {product?.name} </h2>
    <div>
     <p>
     {product !==undefined &&   product.attributes!==undefined && product.attributes.description}
     <br /> <br />
     {product !==undefined &&   product.attributes!==undefined &&    
     <ul>
     <li><b>Hardiness:</b> {product.attributes.hardiness} </li>
     <li> <b>Shape:</b> {product.attributes.shape} </li>
     <li><b>Taste:</b> {product.attributes.taste} </li>
     </ul>
}
       </p>
       </div>
       <div className="mt-5">
       <input type="button" onClick={() => handleAddToCart(product)} className="btn" value="¡Comprar!" />
       </div>
    </div>
    <div>
      
    </div>
</div>
 
    </section>
  )
}

export default ProductPage