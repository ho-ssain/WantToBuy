import mongoose from "mongoose";
export const connectDB = () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(process.env.dburi)
    .then((data) => {
      console.log(`MongoDB connected!👌`);
    })
    .catch((err) => {
      console.log(`${err}😭`);
    });
};
