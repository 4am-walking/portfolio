import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import db from '../config/db.config';

const signup = async (req: Request, res: Response) => {
    try {
        const hashedPassword: string = await bcrypt.hash(req.body.password, 10);
        const data: string[] = [req.body.username, req.body.email, hashedPassword];
        const insertQuery: string = `INSERT INTO users (username, email, password_hash) VALUES ($1,$2,$3);`
        
        await db.query(insertQuery, data);
        res.status(200).send(data);
    } catch(err) {
        res.status(500).send('Unable to register')
    }
}

const signin = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    try {
        const queryResult = await db.query(`SELECT * FROM users WHERE username = $1;`, [
            username,
        ]);
        const user = queryResult.rows;
        if (user.length === 0) {
            res.status(400).json({
                error: "User is not registered",
            });
        } else {
            bcrypt.compare(password, user[0].password_hash, (err: any, result: boolean) => {
                if (err) {
                    res.status(500).json({
                        error: "Server error",
                    });
                } else if (result === true) {
                    const token = jwt.sign(
                        {
                            user_id: user[0].user_id,
                            username: username,
                        },
                        (process.env as any).JWT_SECRET_KEY
                    );
                    res.status(200).json({
                        message: "User signed in",
                        token: token,
                    });
                } else {
                    if (result === false) {
                        res.status(400).json({
                            error: "Enter correct password",
                        });
                    }
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error occured",
        });
    }
};

export default { signin, signup };