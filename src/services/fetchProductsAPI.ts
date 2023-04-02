import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://backend-mypharma-ngohz.ondigitalocean.app',
});

interface Product {
  _id: string;
  productName: string;
  price: number;
  category: string;
  description: string;
  productImageURL: string;
}

export const getProducts = async (): Promise<Product[]> => {
  const response = await instance.get<Product[]>('/products');
  const products = response.data;
  
  return products;
};
