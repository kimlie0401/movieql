import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  language: {
    type: String,
    required: true
  },
  medium_cover_image: {
    type: String,
    required: true
  }
});
mongoose.set("useFindAndModify", false);
export default mongoose.model("movie", MovieSchema);
