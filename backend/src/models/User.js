const mongoose = require("mongoose");
const AutoIncrement = require('mongoose-sequence')(mongoose);
const { Schema, model } = mongoose;

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
  image : {type:String},
  resetPasswordToken: { type: String },
  resetPasswordExpires: { type: Date }
});
UserSchema.plugin(AutoIncrement, { inc_field: 'userId' });

const UserModel = model("user", UserSchema);

module.exports = UserModel;