import express, { Request, Response, Express } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const db = require('./config/db.config');
const port = process.env.PORT || 8080;
const cors = require('cors');
const authRoutes = require('./routes/auth.routes');

app.use(cors());
app.use(express.json());
app.use(authRoutes);

app.get('/api/test', async (req: Request, res: Response) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
    console.log(`Sever running at http://localhost:${port}`);
});