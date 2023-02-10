export const addProductToCart = (product, cartProducts) => {
  let updatedProducts;
  if (cartProducts.some(cartProduct => cartProduct.id === product.id)){
    updatedProducts = [...cartProducts, {...product, quantity: product.quantity + 1}]
  }else{
    updatedProducts = [...cartProducts, {...product, quantity: 1}]
  }
  return updatedProducts;
}