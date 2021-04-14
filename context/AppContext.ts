import { ProductType } from './../types/types';
import React from 'react';


const AppContext = React.createContext<Cart>({
  addToCart: () => {},
  addToBuyer: () => {},
  addNewOrder: () => {},

  removeFromCart: () => {},
  products: [],
  state: {
    cart: [],
    orders: [],
    buyer: [],
   
    
  },
});

export default AppContext;

/*
    removeFromCart: (payload: any) => void;
    state: {
        cart: any[];
        products: {
            id: string;
            image: string;
            title: string;
            price: number;
            description: string;
        };
     
} */
