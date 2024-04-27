import express, { Express, Request, Response } from 'express';

const app: Express = express();
const PORT: number | string = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/hello', (req: Request, res: Response) => {
    res.json({ message: 'Hello from the API' });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
