import * as carTypes from "../../types/carTypes";

const addCar = carDetails => ({
  type: carTypes.ADD_CAR,
  payload: carDetails.data
});

const editCar = carDetails => ({
  type: carTypes.EDIT_CAR,
  payload: carDetails.data
});

const deleteCar = carDetails => ({
  type: carTypes.DELETE_CAR,
  payload: carDetails.data
});

const fetchCar = data => ({
  type: carTypes.FETCH_CARS,
  payload: data
});

const carErrors = error => ({
  type: carTypes.CAR_ERROR,
  error
});

export { addCar, editCar, deleteCar, fetchCar, carErrors };
