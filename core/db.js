import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect("mongodb://mongo:27017,mongo:27018,mongo:27019/?replicaSet=rs0&readPreference=primary&ssl=false");
  // await mongoose.connect(
  //   "mongodb+srv://nodejs:rHamqoLqxqxeZ7r2@cluster0.l4sky.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  // );
}
