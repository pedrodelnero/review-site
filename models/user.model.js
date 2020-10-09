import mongoose from 'mongoose';
import validator from 'validator';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import validate from 'mongoose-validator';

var emailValidator = [
    validate({
      validator: 'isEmail',
      message: 'Must be a valid email address',
    }),
];

var passwordValidator = [
    validate({
      validator: 'isLength',
      arguments: [6],
      message: 'Password should be longer than {ARGS[0]} characters',
    }),
  ]

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minLength: 1
  },
  email: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    lowercase: true,
    validate: emailValidator
  },
  password: {
    type: String,
    validate: passwordValidator 
  },
  tokens: [{
    token: {
        type: String,
        required: true
    }        
  }],
  avatar: {
    type: Buffer
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review',
  }]
});

// Static - You can call created statics on the Model 
userSchema.statics.findByCredentials = async (email, password) => {
  const user = await User.findOne({ email });

  if (!user) throw new Error("No account found with this email");

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) throw new Error("Wrong password");

  return user;
}

// Method - You can call created methods on instances of a schema 
userSchema.methods.generateAuthToken = async function () {
  const user = this;
  const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

  user.tokens = user.tokens.concat({ token });
  await user.save();

  // we have connect the token to the user....

  return token;
}

userSchema.methods.updatePassword = async function () {
  const user = this;
  const { currentPassword, newPassword, confirmNewPassword }  = req.body;

  console.log(currentPassoword, 1);
  
  const hashedNewPassword = await bcrypt.hash(newPassword, 8);

  const isMatch = await bcrypt.compare(currentPassword, user.password);
  if (!isMatch) throw new Error("You entered the wrong password.");
  
  const isConfirmedSame = await bcrypt.compare(confirmNewPassword, hashedNewPassword);
  if (!isConfirmedSame) throw new Error("The passwords do not match.");

  const isOld = (await bcrypt.compare(newPassword, user.password));
  if (!isOld) throw new Error("Must be a new password.");

  return hashedNewPassword;
}


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