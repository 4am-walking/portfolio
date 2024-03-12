import { Request, Response } from 'express';

exports.test = async (req: Request, res: Response) => {
    res.send("Your test worked!");
}