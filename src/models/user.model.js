import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validate from 'mongoose-validator';

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 1,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate: [validator.isEmail, 'Enter a valid email address.'],
  },
  password: {
    type: String,
    required: [true, 'Enter a password.'],
    minlength: [6, 'Password must be at least 6 characters long'],
  },
  avatar: {
    type: Buffer,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
  ],
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Review',
    },
  ],
});

// Static - You can call created statics on the Model
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error('No account found with this email');

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error('Wrong password');

  return user;
};

// Method - You can call created methods on instances of a schema
userSchema.methods.updatePassword = async function (
  currentPassword,
  newPassword,
  confirmNewPassword
) {
  const user = this;

  try {
    const hashedNewPassword = await bcrypt.hash(newPassword, 8);

    const isMatch = await bcrypt.compare(currentPassword, user.password);
    if (!isMatch) throw new Error('You entered the wrong password.');

    const isConfirmedSame = await bcrypt.compare(
      confirmNewPassword,
      hashedNewPassword
    );
    if (!isConfirmedSame) throw new Error('The passwords do not match.');

    const isOld = await bcrypt.compare(newPassword, user.password);
    if (isOld) throw new Error('Must be a new password.');

    return hashedNewPassword;
  } catch (error) {
    throw new Error(error.message);
  }
};

// A middleware function that happens before 'save'
userSchema.pre('save', async function (next) {
  const user = this;

  if (user.isModified('password')) {
    user.password = await bcrypt.hash(user.password, 8);
  }

  next();
});

const User = mongoose.model('User', userSchema);

export default User;
