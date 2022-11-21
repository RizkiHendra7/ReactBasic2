import axios from "axios";

export const GET_LIST_KOTA = "GET_LIST_KOTA";
export const ADD_KOTA = "ADD_KOTA";

export const getListKota = () => {
  console.log("2.masuk action");
  return (dispatch) => {
    //loading
    dispatch({
      type: GET_LIST_KOTA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "get",
      url: "http://localhost:3000/data",
      timeout: 120000,
    })
      .then((response) => {
        console.log("3. berhasil dapet feedback =>", response);
        //berhasil get api
        dispatch({
          type: GET_LIST_KOTA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3.gagal ", error);
        //gagal getr API
        dispatch({
          type: GET_LIST_KOTA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.Message,
          },
        });
      });
  };
};

export const addKota = (paramData) => {
  console.log("2.masuk action addKota dengan param",paramData);
  return (dispatch) => {
    //loading
    dispatch({
      type: ADD_KOTA,
      payload: {
        loading: true,
        data: false,
        errorMessage: false,
      },
    });

    //get API
    axios({
      method: "post",
      url: "http://localhost:3000/data",
      timeout: 120000,
      data: {
        name : paramData.nama,
        latitude : paramData.latitude,
        longitude : paramData.longitude,
      },
    })
      .then((response) => {
        console.log("3. berhasil dapet feedback =>", response);
        //berhasil get api
        dispatch({
          type: ADD_KOTA,
          payload: {
            loading: false,
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch((error) => {
        console.log("3.gagal ", error);
        //gagal getr API
        dispatch({
          type: ADD_KOTA,
          payload: {
            loading: false,
            data: false,
            errorMessage: error.Message,
          },
        });
      });
  };
};
