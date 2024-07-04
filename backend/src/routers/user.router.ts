import { Router } from "express";
import { sample_users } from "../data";
import  Jwt from  'jsonwebtoken';
const router=Router();


router.post("/login", (req, res) => {
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
    const token = Jwt.sign({
        email: user.email,
        isAdmin: user.isAdmin
    }, "SomeRandomText", {
        expiresIn: "30d"
    });
    return token;
};
export default router;