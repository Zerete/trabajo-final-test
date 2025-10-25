import { createContext, useState, useEffect } from "react";
export const CarritoContext = createContext();
export const CarritoProvider = ({ children }) => {

 const [carrito, setCarrito] = useState(() => {

  const guardado = localStorage.getItem("carrito");

  return guardado ? JSON.parse(guardado) : [];

 });





 useEffect(() => {

  localStorage.setItem("carrito", JSON.stringify(carrito));

 }, [carrito]);




 const agregarCancha = (cancha) => {

  if (!carrito.some((c) => c.id === cancha.id)) {

   setCarrito([...carrito, cancha]);

  }

 };




 const eliminarCancha = (id) => {

  setCarrito(carrito.filter((c) => c.id !== id));

 };




 const vaciarCarrito = () => setCarrito([]);





 const total = carrito.reduce((acc, c) => acc + (c.precioHora || 0), 0);



 return (

  <CarritoContext.Provider

   value={{ carrito, agregarCancha, eliminarCancha, vaciarCarrito, total }}

  >

   {children}

  </CarritoContext.Provider>

 );

};