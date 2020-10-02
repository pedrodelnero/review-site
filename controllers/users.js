// import Review from '../models/review.model.js';
// import Product from '../models/product.model.js';
import User from '../models/user.model.js';

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    
    if (user) return res.status(400).send({ message: "User Already Exists" });
    
    user = new User({ name, email, password });
    
    await user.save();
    
    const token = await user.generateAuthToken();
    // sendWelcomeEmail(user.email, user.name);
    res.status(201).send({ user, token });
  } catch (error) {
      res.status(500).json(error);
}
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  
  
  try {
    const user = await User.findByCredentials(email, password);
    await user.populate('products').populate('reviews').execPopulate();
    console.log(user)
    const token = await user.generateAuthToken();
    
    res.send({ user, token });
  } catch (error) {
    res.status(500).send({message: error.message});
  }
}

export const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token);
    
    await req.user.save();

    res.json({ message: 'Logged out' });
  } catch (error) {
    res.status(500).json({ message: error.message});
  }
}

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(id, user, { new: true });

    !updatedUser ? res.status(404).json({ error: 'No user with ID provided' }) : res.status(200).json({ useer: updatedUser, message: 'Product successfully updated.' })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

export const deleteUser = async (req, res) => {
  try {
    await req.user.remove()
    // sendCancellationEmail(req.user.email, req.user.name)
    res.send(req.user)
  } catch (error) {
    res.status(500).json({message: error.message});
  }
}

export const getUser = async (req, res) => {
  const user = req.user;
  console.log(1, user)

  // await user.populate('products').populate('reviews').execPopulate();

  try {
    res.send(user)
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}