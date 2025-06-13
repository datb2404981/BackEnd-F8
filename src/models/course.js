import mongoose from "mongoose";
import slug from "mongoose-slug-generator";

const Schema = mongoose.Schema;


const Course = new Schema({
  name: { type: String, maxlength:  255, required: true},
  description: { type: String, maxlength:  600},
  image: { type: String, maxlength: 255 },
  videoId: { type: String, maxlength: 255, required: true },
  level: { type: String, maxlength: 255 },
  slug: { type: String, slug : 'name', unique:true },
}, {
  timestamps: true,
})

export default mongoose.model('Course',Course);