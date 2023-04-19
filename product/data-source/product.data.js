const db= require("../models/index")
const { QueryTypes } = require("sequelize");
class ProductDataSource {
  static createInvoice = async (req, res,t) => {

    try {
        let {product_id,product_name,product_price,invoice_id,invoice_no,invoice_date,quantity,rate}=req.body;
        let queryForProduct = `insert into products(product_id,product_name,product_price,created_at,updated_at) values (:product_id,:product_name,:product_price,now(),now()) `;
        let queryForInvoiceDetails = `insert into invoice_details(invoice_id,product_id,quantity,rate,created_at,updated_at) values (:invoice_id,:product_id,:quantity,:rate,now(),now()) `;
        let queryForInvoiceHeader = `insert into invoice_headers(invoice_id,invoice_no,invoice_date,created_at,updated_at) values (:invoice_id,:invoice_no,:invoice_date,now(),now()) `;

      await db.sequelize.query(queryForProduct,{
        type: QueryTypes.INSERT,
        transaction: t,
        replacements: { product_id,product_name,product_price},
      });
      await db.sequelize.query(queryForInvoiceDetails, {
        type: QueryTypes.INSERT,
        transaction: t,
        replacements: { invoice_id,product_id,quantity,rate},
      });
      await db.sequelize.query(queryForInvoiceHeader, {
        type: QueryTypes.INSERT,
        transaction: t,
        replacements: { invoice_id,invoice_no,invoice_date},
      });
    return true;     
    } catch (error) {
      throw new Error(error.errors[0].message);
    }
  };

}
module.exports = ProductDataSource;
