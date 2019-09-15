import mongoose from "mongoose";
const Schema = mongoose.Schema;
const MovieSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: true
  },
  score: {
    type: Number
  },
  year: {
    type: Number
  }
});
mongoose.set("useFindAndModify", false);
export default mongoose.model("movie", MovieSchema);
