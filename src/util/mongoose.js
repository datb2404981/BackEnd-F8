import mongoose from "mongoose";

function mutipleMongooseToObject(mongooses) {
  return mongooses.map(item => item.toObject());
}

function mongooseToObject(mongoose) {
  return mongoose ? mongoose.toObject() : mongoose;
}

export { mutipleMongooseToObject, mongooseToObject };