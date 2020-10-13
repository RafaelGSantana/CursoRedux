// Cada produto terá o seguinte formato
export interface IProduct {
  id: number;
  title: string;
  price: number;
}

// Cada item terá um produto e uma quantidade
export interface ICartItem {
  product: IProduct;
  quantity: number;
}

// As informações disponíveis no estado do carrinho terão o seguinte formato
export interface ICartState {
  items: ICartItem[];
}
