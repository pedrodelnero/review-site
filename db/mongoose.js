import mongoose from 'mongoose';

// export const connect = () => {
//   return new Promise((resolve, reject) => {
//     mongoose
//       .connect(
//         `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@productreview.iwb5l.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
//         {
//           useNewUrlParser: true,
//           useCreateIndex: true,
//           useFindAndModify: false,
//           useUnifiedTopology: true,
//         }
//       )
//       .then((res, err) => {
//         if (err) return reject(err);
//         console.log('mogoose up');
//         resolve();
//       })
//       .catch((err) => console.log(`Error: ${err}`));
//   });
// };

// export const close = () => {
//   console.log('mongoose will close');
//   return mongoose.connection.close();
//   // return mongoose.disconnect();
// };

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@productreview.iwb5l.gcp.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log('DB Connected'))
  .catch((err) => console.log(`Error: ${err}`));
