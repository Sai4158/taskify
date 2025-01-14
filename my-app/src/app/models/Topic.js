// Code for schmea

import mongoose, { mongo, Schema } from "mongoose";

const topicSchema = new Schema(
    
    // all schemas here
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

// if I have the have the modesl it will get this if not it will make it
const topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default topic;
