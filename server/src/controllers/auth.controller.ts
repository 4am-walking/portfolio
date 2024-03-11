import { Request, Response } from 'express';

const bcrypt = require('bcrypt');
const db = require('../config/db.config');

exports.signup = async (req: Request, res: Response) => {
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