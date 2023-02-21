export const handleAddProductToCart = (product, toast, dispatch, callback) => {
  const toastStyle = {
    title: 'Producto agregado',
    description: `¡Se agregó una unidad de ${product.name} al carrito!`,
    status: 'success',
    duration: 3000,
    isClosable: true,
  };
  dispatch(callback(product));
  toast(toastStyle);
}

export const handleDeleteProductFromCart = (product, toast, dispatch, callback) => {
  const toastStyle = {
    title: 'Producto eliminado',
    description: `¡El producto ${product.name} se eliminó del carrito!`,
    status: 'info',
    duration: 3000,
    isClosable: true,
  };
  dispatch(callback(product));
  toast(toastStyle);
}

export const handleDeleteAllProductsFromCart = (toast, dispatch, callback) => {
  const toastStyle = {
    title: 'Productos eliminados',
    description: "¡Se han eliminado todos los productos del carrito!",
    status: 'info',
    duration: 3000,
    isClosable: true,
  };
  dispatch(callback());
  toast(toastStyle);
}