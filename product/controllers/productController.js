const productService = require("../service/productService");
const responseMessage = require("../utils/responseMessage");
const { SuccessResponse, ErrorResponse } = require("../utils/success.response");

class ProductController {
  static createInvoice = async (req, res) => {
    try {
      const createInvoice = await productService.createInvoice(req, res);
      return SuccessResponse(res,200,responseMessage.invoiceIsCreated,createInvoice);
    } catch (error) {
      return ErrorResponse(res, 500, error.message);
    }
  };
  
}
module.exports = ProductController;
