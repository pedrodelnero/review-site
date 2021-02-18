import mongoose from "mongoose";

mongoose
  .connect(
    // `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@productreview.iwb5l.gcp.mongodb.net/test?retryWrites=true&w=majority`,
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@productreview.iwb5l.gcp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(`Error: ${err}`));
