import axios, { AxiosResponse } from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import AppContext from 'context/AppContext';
import { URL } from './api/avo';

//getServerSideProps
export const getStaticProps = async () => {
 
  // la función fetch debe de venir desde una libreria que nos ayude con la tarea
	const response = await fetch(`${URL}/api/avo`)
  const { data: products }: TAPIAvoResponse = await response.json()
	// Devuelve un objecto el cual luego se pasara como prop
	// en el componente

  return {
    props: {
      products,
    },
  }
}

const HomePage = ({products}) => {
 // const [products, setproducts] = useState<TProduct[] >([])
 // const { products} = useContext(AppContext);
 /* useEffect(() => {
    let didCancel=false
    const getProducts =async () =>{
      const responseProducts: AxiosResponse = await axios.get("/api/avo")
      console.log(responseProducts.data)
      !didCancel && setproducts(responseProducts.data.data)
    }
  getProducts()
    return () => {
      
    }
  }, [])*/

useEffect(() => {
  console.log(products)
}, [products])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-4 gap-4  mt-4">
    
    
    {products.map((product:TProduct) =>{
  return (<div key={product.id} className="text-center border-2 border-gray-100  product "> 
  <h4>{product.name}</h4> 
   <Link  href={`/product/${product.id}`} passHref>
     <a><Image src={product.image} width={333} height={333} /> </a></Link>
  <div className="h-8 sm:h-9 border-t-2  flex justify-center   border-gray-100">
   
    <b>{product.price}€</b> 
   </div>
  </div>)
 })}


    </div>
  )
}

export default HomePage
 