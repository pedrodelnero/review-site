import Product from '../models/product.model.js';

export default async function middle (req, res, next) {
  const { pID } = req.params;
  try {

    const product = await Product.findById(pID);

    if(!product) {
      res.status(404).json({ error: 'No product with ID provided' });
    } else {
      req.product = product;
      next();
    }  
  } catch (error) {
      res.status(500).json({ error: error.message })
  }
}