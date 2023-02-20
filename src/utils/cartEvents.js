export const handleAddProductToCart = (product, toast, dispatch, callback) => {
  const toastStyle = {
    title: 'Producto agregado',
    description: `¡Se agrego una unidad de ${product.name} al carrito!`,
    status: 'success',
    duration: 4000,
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
    duration: 4000,
    isClosable: true,
  };
  dispatch(callback(product));
  toast(toastStyle)
}