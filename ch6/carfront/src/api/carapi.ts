import axios from "axios";
import { CarResponse, Car, CarEntry } from "../types";

export const getCars = async (): Promise<CarResponse[]> => {
  const token = sessionStorage.getItem('jwt');
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cars`,
    { headers: { 'Authorization': token } 
  });

  return response.data._embedded.cars;
}

export const deleteCar = async (link: string): Promise<CarResponse> => {
  const token = sessionStorage.getItem('jwt');
  const response = await axios.delete(link, {
    headers: {
      'Authorization': token}
  });

  return response.data;
};


export const addCar = async (car: Car) : Promise<CarResponse> => {
  const token = sessionStorage.getItem('jwt');
  const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cars`, car, {
    headers: {
      'Authorization': token}
  });

  return response.data;
}

export const updateCar = async (carEntry : CarEntry) : Promise<CarResponse> => {
  const token = sessionStorage.getItem('jwt');
  const response = await axios.put(carEntry.url, carEntry.car, {
    headers: {
      'Authorization': token}
  });

  return response.data;
}