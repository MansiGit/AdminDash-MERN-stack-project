import Product from "../models/Product.js";
import ProductStat from "../models/ProductStat.js";
import User from "../models/User.js";


export const getProducts = async (req, res) => {
    try {
        const products = await Product.find(); //give us all the products

        const productsWithStats = await Promise.all(
            products.map(async (product) => {
              const stat = await ProductStat.find({
                productId: product._id,
              });
              return { // return array of product objects combined with stats
                ...product._doc,
                stat,
              };
            })
          );
    
    
    } catch (error) {
    res.status(404).json({ message: error.message });
  }
};