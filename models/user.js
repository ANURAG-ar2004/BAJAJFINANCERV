import { Schema, model } from "mongoose";

const UserSchema = new Schema({
  userId: { type: String, required: true },
  email: { type: String, required: true },
  rollNumber: { type: String, required: true },
  data: { type: Array, required: true },
});

export default model("User", UserSchema);
