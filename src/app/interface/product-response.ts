import {IProduct} from "./product";

export interface IProductResponse{
  status: string;
  code: number;
  total: number;
  data: IProduct[];
}
