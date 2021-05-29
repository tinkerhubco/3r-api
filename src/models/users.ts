import mongoose from 'mongoose';

// TODO - Sample model from mongoose
const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export const UsersModel =
  mongoose.models.Events || mongoose.model('Users', schema);
export const UsersSchema = schema;
