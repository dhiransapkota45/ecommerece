export const addtowishlist = (productid) => {
  const getproductsRAW = localStorage.getItem("wishlistproducts");
  if (getproductsRAW === null) {
    localStorage.setItem("wishlistproducts", JSON.stringify([productid]));
  } else {
    const getproducts = JSON.parse(getproductsRAW);
    const checkproduct = getproducts.includes(productid);
    if (checkproduct === false) {
      const newproductarray = [...getproducts, productid];
      localStorage.setItem("wishlistproducts", JSON.stringify(newproductarray));
    }
  }
};
