type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string

type TProductAttributes = {
  description: string
  shape: string
  hardiness: string
  taste: string
}

type TProduct = {
  id: TProductId
  name: string
  sku: string
  price: number
  image: Url
  attributes: TProductAttributes
}

type TAPIAVODetailResponse = TProduct

type TAPIAvoResponse = {
  lenght: number
  data: TProduct[]
  error?: string
}
type Cart = {
  addToCart: (payload: any) => void;
  removeFromCart: (payload: any) => void;
  addToBuyer: (payload: any) => void;
  addNewOrder: (payload: any) => void;
  products: TProduct[];
   
  state: {
    cart: TProduct[];
    buyer: any;
    orders: any[];
   
  };
}