import { shippingCost } from "./parameters";

const calculateSubtotal = (products) => products.reduce((acc, product) => acc + product.quantity * product.price, 0 );
const calculateShippingSubtotal = (products) => products.some(product => product.freeShipping === false) ? shippingCost : 0 ;

export function calculateTotal(products){
  return {
    subtotal : calculateSubtotal(products),
    shippingCost: calculateShippingSubtotal(products),
    total: calculateSubtotal(products) + calculateShippingSubtotal(products),
  }
}