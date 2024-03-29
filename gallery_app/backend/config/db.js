import mongoose from "mongoose";

const connectToMongo = async () => {
  const res = await mongoose.connect(
    //"mongodb://localhost:27017/gallery_app"
    "mongodb+srv://<username>:<password>@cluster0.o3cxspq.mongodb.net/"
  );
  if (res) {
    console.log("Connected Succesffuly");
  }
};

export default connectToMongo;
//mongodb+srv://vdhipatel77:vidhi2525@cluster0.o3cxspq.mongodb.net/
