import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
  firstname: { type: String, length: 30, null: false },
  middlename: { type: String, length: 30, null: false },
  lastname: { type: String, length: 30, null: false },
  nickname: { type: String, length: 30, null: true },
  sex: { type: String, length: 10, null: true, default: "Male" },
  dob: { type: Date, null: false },
  email: { type: String, length: 30, null: true, unique: true },
  mobile: { type: String, length: 30, null: true, unique: true },
  avatar: { type: String, length: 255, null: true, default: "placeholder.jpg" },
  cover: { type: String, length: 255, null: true, default: "placeholder.jpg" },
  bio: { type: String, length: 255, null: true },
  category: { type: String, null: true, default: "Is Driver" },
  isActive: { type: Boolean, null: true, default: true },
});

export default mongoose.model("User", UserSchema);
