import Review from "../models/review.model.js";
import Product from "../models/product.model.js";
import User from "../models/user.model.js";
// import bcrypt from 'bcryptjs';

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
    res.status(500).send({ messages: error.message });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  console.log(email);

  try {
    const user = await User.findByCredentials(email, password);
    const token = await user.generateAuthToken();

    res.send({ user, token });
  } catch (error) {
    res.status(500).send({ messages: error.message });
  }
};

export const logoutUser = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter(
      (token) => token.token !== req.token
    );

    await req.user.save();

    res.json({ message: "Logged out" });
  } catch (error) {
    res.status(500).send({ messages: error.message });
  }
};

// export const deleteUser1 = async (req, res) => {
//     const { products, reviews, _id } = req.user;

//     user.remove((err) => {
//         if(!err) {
//             Product.update({ _id: { $in: products }}, { $pull: { project: project._id }},
//                              (err, numberAffected) => {
//                              console.log(numberAffected);
//                        }) else {
//                          console.log(err);
//                      }
//                    });
//              });
//  }

export const updateUser = async (req, res) => {
  const { user } = req;
  const { currentPassword, newPassword, confirmNewPassword } = req.body;

  try {
    user.password = await user.updatePassword(
      currentPassword,
      newPassword,
      confirmNewPassword
    );
    const updatedUser = await User.findByIdAndUpdate(user._id, user, {
      new: true,
    });

    !updatedUser
      ? res.status(404).json({ error: "No user with ID provided" })
      : res.status(200).json({
          user: updatedUser,
          message: "User successfully updated.",
        });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ messages: error.message });
  }
};

export const deleteUser = async (req, res) => {
  const { products, reviews, _id } = req.user;

  try {
    if (products.length > 0) {
      for (let i = 0; i < products.length; i++) {
        const product = await Product.findById(products[i]);

        if (product.reviews.length > 0) {
          for (let j = 0; j < product.reviews.length; j++) {
            const review = await Review.findById(product.reviews[j]);
            const user = await User.findById(review.authorID);
            user.reviews.splice(user.reviews.indexOf(product.reviews[j]), 1);
            await user.save();
            await Review.findByIdAndRemove(product.reviews[j]);
          }
        }
        await Product.findByIdAndRemove(products[i]);
      }
    }

    if (reviews.length > 0) {
      for (let i = 0; i < reviews.length; i++) {
        const review = await Review.findById(reviews[i]);
        const product = await Product.findById(review.authorID);
        product.reviews.splice(product.reviews.indexOf(reviews[i]), 1);

        await Review.findByIdAndRemove(reviews[i]);
      }
    }

    await User.findByIdAndRemove(_id);
    // sendCancellationEmail(req.user.email, req.user.name)
    res.send({ message: "user deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  const user = req.user;

  await user.populate("products").populate("reviews").execPopulate();

  try {
    res.send(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
