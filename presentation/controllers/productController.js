const { productRepository } = require("../../infra/db/repository/productRepository.js")
const {Product} = require("../../infra/settings.js")


const getProducts = (req, resp) => {
    const ProductRepository = new productRepository(Product)
    ProductRepository.getAllProducts(req, resp)
}
  
const getProductById = (req, resp) => {
  const ProductRepository = new productRepository(Product)
  ProductRepository.getOneProduct(req, resp)
}
  
const createProduct = (req, resp) => {
  const ProductRepository = new productRepository(Product)
  ProductRepository.insertProduct(req, resp)
}
  
const updateProduct = (req, resp) => {
  const ProductRepository = new productRepository(Product)
  ProductRepository.updateProduct(req, resp)
}
  
const deleteProduct = (req, resp) => {
  const ProductRepository = new productRepository(Product)
  ProductRepository.deleteProduct(req, resp)
}


  
  
module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct,
}