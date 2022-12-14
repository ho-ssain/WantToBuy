import { app } from "./app.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
// config
dotenv.config({ path: "backEnd/config/config.env" });

// connect database
connectDB();

// listen to app
app.listen(process.env.port, () => {
  console.log(`Server is working on http://localhost:${process.env.port}⌚`);
});
