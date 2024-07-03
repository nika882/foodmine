import { Food } from "./Food";

export class CartItem{
    constructor(public food:Food){ }
    quantity:number=1
    price:number=this.food.price;
}
/* მეორე ხერხი ჩაწერის
export class CartItem{
    constructor(food:Food){
        this.food=food;
    }
    food!:Food;
    quantity:number=1
    price:number=this.food.price;

 */