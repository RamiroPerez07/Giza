const filterProductsByCategory = (products, category) => {
  return category ? products.filter(product => product.category === category) : products;
}

const filterProductsBetweenTwoPrices = (products, prices) => {
  return prices ? products.filter(product => product.price >= prices[0] && product.price <= prices[1]) : products;
} 

const filterProductsByShipping = (products, shipping) => {
  return shipping ? products.filter(product => product.freeShipping.toString() === shipping) : products;
}


export const filterProducts = (products, filterParameters) => {
  let listOfProducts = [...products];
  listOfProducts = filterProductsByCategory(listOfProducts, filterParameters.category);
  listOfProducts = filterProductsBetweenTwoPrices(listOfProducts, filterParameters.price);
  listOfProducts = filterProductsByShipping(listOfProducts, filterParameters.shipping);
  return listOfProducts;
}