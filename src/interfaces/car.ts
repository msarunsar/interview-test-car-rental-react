export interface CarProps {
  id: string;
  name: string;
  price: number;
  discount: number;
}

export interface ResponseProps {
  code: number;
  message: string;
  errorMessage?: string;
  data: any;
}
