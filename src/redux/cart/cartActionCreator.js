import instance from "../../api/api_instance";

const addtoCartPending = () => {
  return {
    type: "addtoCart/pending",
  };
};

const addtoCartSuccess = () => {
  return {
    type: "addtoCart/success",
  };
};

const addtoCartFailure = (error) => {
  return {
    type: "addtoCart/failure",
    payload: error,
  };
};

export const addtoCart = (data, id, addToCartIcon, deleteHandler = null) => {
  return async (dispatch) => {
    dispatch(addtoCartPending());
    try {
      const res = await instance.put(`/addtocart/${id}`, data);
      if (deleteHandler) {
        deleteHandler(id);
      }
      // dispatch(addtoCart());
      console.log("log1");
      dispatch(addToCartIcon())
      dispatch(addtoCartSuccess());
    } catch (error) {
      console.log(error);
      dispatch(addtoCartFailure(error.response.data.msg));
    }
  };
};
