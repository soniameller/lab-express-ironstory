const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const storySchema = new Schema({
  content: String,
  writer: String,
  date: { type: Date, default:new Date(Date.now()) /*new Date()will not work*/ }
});

const Story = mongoose.model("Story", storySchema);
module.exports = Story;