import { Request, Response } from 'express';

exports.test = async (req: Request, res: Response) => {
    await res.send("Your test worked!");
}