import { Router } from "express";
import { sample_foods, sample_tags } from "../data";
import asynceHandler from 'express-async-handler';
import { FoodModel } from "../models/food.model";
const router=Router();



router.get("/seed",asynceHandler(async(req,res)=>{
    const foodCount=await FoodModel.countDocuments();
    if(foodCount>0){
    res.send("Seed is already done!");
    return;
}
await FoodModel.create(sample_foods);
res.send("Seed is Done");
}))

router.get("/", (req, res) => {
    res.send(sample_foods)
})
router.get("/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    res.send(foods)
})
router.get("/tags", (req, res) => {
    res.send(sample_tags);
})
router.get("/tags/:tagName", (req, res) => {
    const tagName = req.params.tagName.toLowerCase();
    const foods = sample_foods.filter(food =>
        food.tags.some((tag: any) => tag.toLowerCase().includes(tagName))
    );
    res.send(foods);
})
router.get("/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food)
})


export default router;