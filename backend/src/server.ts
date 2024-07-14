import dotenv from 'dotenv';
dotenv.config();
import express from "express";
import cors from "cors";
import foodRouter from './routers/food.router';
import userRouter from './routers/user.router';
import { dbConnect } from './configs/database.config';
import orderRouter from './routers/order.router';
import router from './routers/food.router';
dbConnect();
const app = express();
app.use(express.json());
//http://localhost:4200/frontend
//http://localhost:5000/backend
app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]
}));
app.use("/api/foods",foodRouter);
app.use("/api/users",userRouter);
app.use("/api/orders",orderRouter);


const port = 5000;
app.listen(port, () => {
    console.log("Website served on http://localhost:" + port);
})
export default router;