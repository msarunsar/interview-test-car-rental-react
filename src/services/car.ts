import axios, { AxiosResponse } from "axios";
import { CarProps, ResponseProps } from "../interfaces/car";

const apiHost = process.env.REACT_APP_API_HOST || "";
const apiUsername = process.env.REACT_APP_API_USERNAME || "";
const apiPassword = process.env.REACT_APP_API_PASSWORD || "";

export const CreateCar = (request: CarProps): Promise<AxiosResponse<ResponseProps, any>> => {
  return axios.post(`${apiHost}/car`, request, {
    headers: {
      Authorization: "Basic " + btoa(`${apiUsername}:${apiPassword}`),
    },
  });
};

export const UpdateCar = (request: CarProps): Promise<AxiosResponse<ResponseProps, any>> => {
  return axios.put(`http://localhost:8080/car-rental/api/v1/car`, request, {
    headers: {
      Authorization: "Basic " + btoa(`${apiUsername}:${apiPassword}`),
    },
  });
};

export const DeleteCar = (carID: string): Promise<AxiosResponse<ResponseProps, any>> => {
  return axios.delete(`${apiHost}/car?car_id=${carID}`, {
    headers: {
      Authorization: "Basic " + btoa(`${apiUsername}:${apiPassword}`),
    },
  });
};

export const GetCar = (carID: string): Promise<AxiosResponse<ResponseProps, any>> => {
  return axios.get(`${apiHost}/car?car_id=${carID}`, {
    headers: {
      Authorization: "Basic " + btoa(`${apiUsername}:${apiPassword}`),
    },
  });
};

export const GetCarList = (): Promise<AxiosResponse<ResponseProps, any>> => {
  return axios.get(`${apiHost}/cars`, {
    headers: {
      Authorization: "Basic " + btoa(`${apiUsername}:${apiPassword}`),
    },
  });
};
