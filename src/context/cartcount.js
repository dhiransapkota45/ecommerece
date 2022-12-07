import { createContext, useState } from "react";

export const CartCountContext = createContext();

const CartCount = (props) => {
  const [cartnumber, setCountnumber] = useState(0);
  return (
    <CartCountContext.Provider value={{cartnumber, setCountnumber}}>{props.children}</CartCountContext.Provider>
  );
};

export default CartCount;
