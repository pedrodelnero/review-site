import mongoose from "mongoose";

const uri = `'mongodb+srv://pedrod:${process.env.MONGODB_PW}@productreview.iwb5l.gcp.mongodb.net/test?retryWrites=true&w=majority'`;
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(`Error: ${err}`));
