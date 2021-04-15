import React, { useContext, useEffect, useReducer, useState } from 'react'
import { useRouter } from 'next/router'
import axios, { AxiosResponse } from 'axios'
import AppContext from 'context/AppContext'
import {GetStaticProps} from 'next'
import { URL } from 'pages/api/avo'


export const getStaticProps:GetStaticProps = async ({params}) => {
  const id = params?.id as string
  // la función fetch debe de venir desde una libreria que nos ayude con la tarea
	const response = await fetch(`${URL}/api/avo/${id}`)
  const    product : TProduct = await response.json()
	// Devuelve un objecto el cual luego se pasara como prop
	// en el componente
  console.log(product)
  return {
    props: {
      product,
    },
  }
}
export const getStaticPaths = async () => {
  const response = await fetch(`${URL}/api/avo`)
  const { data: productList }: TAPIAvoResponse = await response.json()

  const paths = productList.map(({ id }) => ({
    params: {
      id,
    },
  }))

  return {
    paths,
    // Incremental static generation
    // 404 for everything else
    fallback: false,
  }
}

const ProductPage = ({product}) => {
  console.log(product)
  // state
 // const [product, setProduct] = useState<TProduct>()
  const { addToCart } = useContext(AppContext);
  //const [favorites, dispatch] = useReducer({}, []);
  // router
  const {
    query: { id },
  } = useRouter()
  const handleAddToCart = (product: TProduct) => {
    addToCart(product);
  };
  /*
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
  }, [id])*/
  return (
    <section>
     
      <div className="grid   grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
    <div className="col-span-2 sm:col-span-1 m-auto">
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
       <div className="text-center sm:text-left mt-5">
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