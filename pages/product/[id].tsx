import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import axios, { AxiosResponse } from 'axios'

const ProductPage = () => {
  // state
  const [product, setProduct] = useState<TProduct>()
  // router
  const {
    query: { id },
  } = useRouter()

  
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
      <h1>Página producto: {product?.name} </h1>
    </section>
  )
}

export default ProductPage