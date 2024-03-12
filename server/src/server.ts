import express, { Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');

app.use(cors());
app.use(express.json());
app.use(authRoutes);

app.listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`);
});