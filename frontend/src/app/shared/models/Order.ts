import { CartItem } from "./Cartsitem";


export class Order{
    id!:number;
    item!:CartItem[];
    toralPrice!:number;
    name!:string;
    address!:string;
    paymentId!:string;
    createdAt!:string;
    status!:string;
}