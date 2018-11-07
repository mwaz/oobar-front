import { fetchCar, carErrors } from "../carActions/carCRUD";
import axiosInstance from "../../../apiCalls/axiosInstance";

const addCars = data => {
  return async dispatch => {
    try {
      const axiosRes = await axiosInstance.post("oober/api/cars", data);
      dispatch(fetchCar(axiosRes));
    } catch (error) {
      dispatch(carErrors(error.response.data.message));
    }
  };
};

const getCars = () => {
  return async dispatch => {
    try {
      const axiosRes = await axiosInstance.get("oober/api/cars");
      dispatch(fetchCar(axiosRes));
    } catch (error) {
      dispatch(carErrors(error.response.data.message));
    }
  };
};

export { addCars, getCars };
