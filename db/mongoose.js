import mongoose from 'mongoose';

const url = 'mongodb+srv://pedrod:product1@productreview.iwb5l.gcp.mongodb.net/test';

mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  })
  .then(() => console.log('DB Connected'))
  .catch(err => console.log(`Error: ${err}`))

export default url;