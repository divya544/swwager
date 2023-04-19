const productDataSource= require("../data-source/product.data")
const db= require("../models/index")
class ProductService {
  static createInvoice = async (req, res) => {
    const transaction = await db.sequelize.transaction(); 
    try {
      const createInvoice = await productDataSource.createInvoice(req, res,transaction);
      await transaction.commit();
      return createInvoice;
    } catch (error) {
      await transaction.rollback();
      throw new Error(error.message);
    }
  };

}
module.exports = ProductService;
