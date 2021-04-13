import axios, { AxiosResponse } from 'axios'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
 
const HomePage = () => {
  const [products, setproducts] = useState<TProduct[] >([])
 
  useEffect(() => {
    let didCancel=false
    const getProducts =async () =>{
      const responseProducts: AxiosResponse = await axios.get("/api/avo")
      console.log(responseProducts.data)
      !didCancel && setproducts(responseProducts.data.data)
    }
    getProducts()
    return () => {
      
    }
  }, [])
useEffect(() => {
  console.log(products)
}, [products])

  return (
    <div className="grid grid-cols-4 gap-4">
    
    
 {products.map((product:TProduct) =>{
  return (<div className="text-center border-2 border-gray-100  product "> 
  <h4>{product.name}</h4> 
   <Link  href={`/product/${product.id}`}>
     <a><img src={product.image} /></a></Link>
  <div className=" h-9 border-t-2  flex justify-center items-center  border-gray-100">
   
    <b>{product.price}€</b> 
   </div>
  </div>)
 })}


    </div>
  )
}

export default HomePage
 