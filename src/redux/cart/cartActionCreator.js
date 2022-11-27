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

const addtoCartFailure = () => {
  return {
    type: "addtoCart/failure",
  };
};

export const addtoCart = (data, id) => {
  return async (dispatch) => {
    dispatch(addtoCartPending());
    try {
      const res = await instance.put(`/addtocart/${id}`, data);
      // console.log(response);
      dispatch(addtoCartSuccess());
    } catch (error) {
      console.log(error);
      dispatch(addtoCartFailure());
    }
  };
};
