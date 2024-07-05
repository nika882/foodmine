import { Router } from "express";
import { sample_foods } from "../data";
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

router.get("/", asynceHandler(
    async(req, res) => {
        const foods=await FoodModel.find();
        res.send(foods)
    }
))
router.get("/search/:searchTerm", asynceHandler(async (req, res) => {
    try {
        const searchRegex = new RegExp(req.params.searchTerm, 'i');
        const foods = await FoodModel.find({ name: { $regex: searchRegex } });
        res.send(foods);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "An error occurred while searching for foods" });
    }
}));
router.get("/tags", asynceHandler(async (req, res) => {
    try {
        const tags = await FoodModel.aggregate([
            { $unwind: '$tags' },
            { 
                $group: {
                    _id: '$tags',
                    count: { $sum: 1 }
                }
            },
            { 
                $project: {
                    _id: 0,
                    name: '$_id',
                    count: 1
                }
            },
            { $sort: { count:-1} } // Sort the tags by count in descending order
        ]);

        const all = {
            name: 'All',
            count: await FoodModel.countDocuments()
        };

        tags.unshift(all); // Prepend the 'ALL' tag to the list of tags

        res.send(tags);
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "An error occurred while fetching tags" });
    }
}));

router.get("/tags/:tagName",asynceHandler(
    async(req, res) => {
        const foods=await FoodModel.find({tags:req.params.tagName})
        res.send(foods);
    }
))
router.get("/:foodId", asynceHandler(
    async(req, res) => {
        const food = await FoodModel.findById(req.params.foodId);
        res.send(food)
    }
))


export default router;