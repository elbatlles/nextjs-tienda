//import { Cart, URLSTRAPI } from './../type/Types';
import { useEffect, useState } from 'react';
//import initialState from '../initialState';
import axios, { AxiosResponse } from 'axios';
const initialState={
    cart: [],
  buyer: [],
  orders: [],
  products: [],
   
}
 
const useInitialState = () => {
  const [state, setstate] = useState(initialState);
 
  const [products, setproducts] = useState([])

  useEffect(() => {
    let didCancel =false
    /*
 const getProducts = async () =>{
   
const productsResponse = await axios(URLSTRAPI)
!didCancel && setproducts(productsResponse.data)
 }*/
 const getProducts =async () =>{
    const responseProducts: AxiosResponse = await axios.get("/api/avo")
    console.log(responseProducts.data)
    !didCancel && setproducts(responseProducts.data.data)
  }
 //getProducts()
    return () => {
     didCancel =true
    }
  }, [])

  
  const addToCart = (payload: any) => {
    setstate({ ...state, cart: [...state.cart, payload] });
  };

  const removeFromCart = (payload: any) => {
    setstate({
      ...state,
      cart: [...state.cart.filter((items) => items.id !== payload.id)],
    });
  };

  const addToBuyer = (payload: any) => {
    setstate({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };
  const addNewOrder = (payload: any) => {
    setstate({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    addToCart,
    removeFromCart,
    addToBuyer,
    addNewOrder,
    products,
    state,
    
  };
};

export default useInitialState;
