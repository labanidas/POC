import express from "express";
import dotenv from "dotenv";
import cors from 'cors';

import { connectDB } from "./lib/db.js";
import routes from './routes/route.js';

dotenv.config();

const app = express();
// const corsConfig = {
//   credentials : true,
//   origin : "*"
//   }
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(cors());


app.use("/", routes)


const PORT = process.env.PORT

app.listen(PORT, ()=>{
    console.log(`Server is running on port number ${PORT}`);
    connectDB();
})