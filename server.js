import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/routers.js";
import "./db/mongoose.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

var corsOptions = {
  origin: ["http://localhost:3000", "https://delnero-review-site.netlify.app/"],
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(PORT, () => console.log(`Sever is connected`));
