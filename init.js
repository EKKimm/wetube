import app from "./app";
import db from "./db";

const PORT = 4000;

const handleListeneing = () => console.log(`^,^ Listeneing on: http://localhost:${PORT}`);

app.listen(PORT, handleListeneing);