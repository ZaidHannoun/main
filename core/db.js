import mongoose from "mongoose";

export default async function connect() {
  await mongoose.connect("mongodb+srv://zaid:zaid@cluster0.s23iwuk.mongodb.net/?retryWrites=true&w=majority");
  
}
