import { Request, Response } from 'express';

const test = async (req: Request, res: Response) => {
    await res.send("Your test worked!");
}

export default { test };