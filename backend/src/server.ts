import express from "express";
import cors from "cors";
import { sample_foods, sample_tags, sample_users } from "./data";
import jwt from "jsonwebtoken";
const app = express();
app.use(express.json());
//http://localhost:4200/frontend
//http://localhost:5000/backend
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}))
app.get("/api/foods", (req, res) => {
    res.send(sample_foods)
})
app.get("/api/foods/search/:searchTerm", (req, res) => {
    const searchTerm = req.params.searchTerm;
    const foods = sample_foods.filter(food => food.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()));
    res.send(foods)
})
app.get("/api/foods/tags", (req, res) => {
    res.send(sample_tags);
})
app.get("/api/foods/tags/:tagName", (req, res) => {
    const tagName = req.params.tagName.toLowerCase();
    const foods = sample_foods.filter(food =>
        food.tags.some((tag: any) => tag.toLowerCase().includes(tagName))
    );
    res.send(foods);
})
app.get("/api/foods/:foodId", (req, res) => {
    const foodId = req.params.foodId;
    const food = sample_foods.find(food => food.id == foodId);
    res.send(food)
})
app.post("/api/users/login", (req, res) => {
    const { email, password } = req.body;

    // Find user in sample_users array
    const user = sample_users.find(user =>
        user.email === email && user.password === password
    );

    if (user) {
        const token = generateTokenResponse(user);
        res.json({ token }); // Send token as JSON response
    } else {
        res.status(400).json({ error: "Username or password is not valid!" });
    }
});

const generateTokenResponse = (user: { email: any; isAdmin: any; }) => {
    const token = jwt.sign({
        email: user.email,
        isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d"
    });
    return token;
};
const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})