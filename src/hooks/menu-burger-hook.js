import { useEffect } from "react";
import { useSelector } from "react-redux";

export const useOnClickOutside = (ref, handler) => {
  //llamo a mi estado en redux para saber si el menu esta abierto
  const {showBurgerMenu} = useSelector(state => state.menuManager)

  useEffect(()=>{
    //planteo la funcion listener: si la referencia es la actual o bien, contiene al elemento interactuado, return (no hagas nada)
    const listener = event => {
      //si el menu esta cerrado, esto no tiene efecto... retorno si es false
      if (!showBurgerMenu) return
      if (!ref.current || ref.current.contains(event.target)) return 
      //si no es el elemento seleccionado o el elemento interactuado esta fuera del perimetro aplica la funcion pasada como callback
      handler(event);
    }
  document.addEventListener("mousedown", listener); //configuro el oyente
  document.addEventListener("scroll", listener);
  return () => {
    document.removeEventListener("mousedown", listener);
    document.removeEventListener("scroll", listener);
  } //se elimina el detector de eventos cuando se desmonta el componente
  }, [ref, handler, showBurgerMenu])
}

