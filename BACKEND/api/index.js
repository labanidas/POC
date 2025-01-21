import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

import { connectDB } from "./lib/db.js";
import routes from './routes/routes.route.js';

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
const corsConfig = {
    origin: "*", // This allows all origins
    credentials: true, // This allows credentials (cookies, HTTP authentication, etc.)
    methods: ["POST", "GET", "PUT", "DELETE"]
  }
app.options(",", cors(corsConfig));
app.use(cors(corsConfig));
  


app.use("/", routes)


const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server is running on port number ${PORT}`);
    connectDB();
})