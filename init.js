import app from "./app";

const PORT = 4000;

const handleListeneing = () => console.log(`^,^ Listeneing on: http://localhost:${PORT}`);

app.listen(PORT, handleListeneing);