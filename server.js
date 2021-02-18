import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/routers.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
import "./db/mongoose.js";

var corsOptions = {
  origin: ["http://localhost:3000", "https://delnero-review-site.netlify.app/"],
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", routes);

app.listen(process.env.PORT || 8080, () => console.log(`Sever is connected`));
