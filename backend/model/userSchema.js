import  mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  emial: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  re_password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('USER', userSchema);

// module.exports = User
export default User
