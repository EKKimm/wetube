import app from "./app";
import db from "./db";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 4000;

const handleListeneing = () => console.log(`^,^ Listeneing on: http://localhost:${PORT}`);

app.listen(PORT, handleListeneing);