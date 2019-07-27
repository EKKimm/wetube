import dotenv from "dotenv";
import "./db";
import app from "./app";

import "./models/Video";
import "./models/Comment";
import "./models/User";

dotenv.config();
const PORT = process.env.PORT || 4000;

const handleListeneing = () =>
  console.log(`^,^ Listeneing on: http://localhost:${PORT}`);

app.listen(PORT, handleListeneing);
