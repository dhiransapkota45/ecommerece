import instance from "../../api/api_instance";

const getCartPending = () => {
  return {
    type: "getcart/pending",
  };
};

const getCartSuccess = (data) => {
  return {
    type: "getcart/success",
    payload: data,
  };
};

const getCartFailure = (error) => {
  return {
    type: "getcart/failure",
    payload: error,
  };
};

export const deleteOneCartItem = (id) => {
  return {
    type: "getcart/deleteonecartitem",
    payload: id,
  };
};

export const addToCartIcon = () => {
  return {
    type: "getcart/addtocarticon",
  };
};

export const getCart = () => {
  return async (dispatch) => {
    dispatch(getCartPending());
    try {
      const fetchcartdetails = await instance.get("/usercartproduct");
      // console.log(fetchcartdetails.data);
      dispatch(getCartSuccess(fetchcartdetails.data));
    } catch (error) {
      // console.log(error);
      dispatch(getCartFailure(error.response.data.msg));
    }
  };
};
