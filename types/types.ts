
  
  export interface ProductType {
    id: string;
    image: [{
      url:string,
      name:string
    }];
    title: string;
    price: number;
    description: string;
   
  }
  export type Cart = {
    addToCart: (payload: any) => void;
    removeFromCart: (payload: any) => void;
    addToBuyer: (payload: any) => void;
    addNewOrder: (payload: any) => void;
    products: ProductType[];
    state: {
      cart: ProductType[];
      buyer: any;
      orders: any[];
     
    };
  };
  