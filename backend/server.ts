import express, { Express, Request, Response } from "express";
import cors from "cors";
const app: Express = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req: Request, res: Response) => {
    res.status(200).json({ message: "Hello World" });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
export default app;
