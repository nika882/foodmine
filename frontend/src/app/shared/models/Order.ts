import { LatLng } from "leaflet";
import { CartItem } from "./Cartsitem";


export class Order{
    id!:number;
    item!:CartItem[];
    toralPrice!:number;
    name!:string;
    address!:string;
    addresLatLng?:LatLng
    paymentId!:string;
    createdAt!:string;
    status!:string;
}