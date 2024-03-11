import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;
const authRoutes = require('./routes/auth.routes');

app.use(express.json());
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`);
});