//const {User} = require("../../settings.js")
const { Op } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

class productRepository{
    constructor(Product){
      this.product = Product
    }
    async getAllProducts(req, resp) {
        try {
          const product = await this.product.findAll();
          resp.status(200).json(product);
        } catch (error) {
          // Lidar com erros de consulta, se houver
          console.error(error);
          resp.status(500).json({ error: 'Erro ao buscar todos os produtos.' });
        }
      }
      async getOneProduct(req, resp) {
        try {
          const id = parseInt(req.params.id);
          console.log(id)
          const product = await this.product.findByPk(id);
          if (product) {
            resp.status(200).json(product);
          } else {
            resp.status(404).json({ error: 'Produto não encontrado.' });
          }
        } catch (error) {
          console.error(error);
          resp.status(500).json({ error: 'Erro ao buscar o usuário unico.' });
        }
      }
      async insertProduct(req, resp) {
        try {
          const {productnome, productquantidade, productpreco,productdesconto,productcategoria,productdescricao} = req.body;
          const newProduct = await this.product.create({
            nome: productnome,
            quantidade: productquantidade,
            preco: productpreco,
            desconto: productdesconto,
            categoria: productcategoria,
            descricao: productdescricao,
              
          });
            resp.status(201).json(newProduct);
          
        } catch (error) {
            console.error(error);
            resp.status(500).json({ error: 'Erro ao adicionar Cliente.' });
        }
      }

    async updateProduct(req, resp){
      try{
        const id = parseInt(req.params.id);
        const product = await this.product.findByPk(id);
        const {productnome, productquantidade, productpreco,productdesconto,productcategoria,productdescricao} = req.body;
        
        product.nome = productnome
        product.quantidade = productquantidade
        product.preco = productpreco
        product.desconto = productdesconto
        product.categoria = productcategoria
        product.descricao = productdescricao
        await jane.save()    
        
      }
      catch(error){
        console.error(error);
        resp.status(500).json({ error: 'Erro ao adicionar Cliente.' });
      }
    }

    
    async  deleteProduct(req, resp) {
      try {
        
        const product = await this.product.findByPk(id);
    
        if (!product) {
          return resp.status(404).send(`User with ID: ${id} not found`);
        }
    
        await product.destroy();
    
        resp.status(200).send(`User deleted with ID: ${id}`);
      } catch (error) {
        console.error(error);
        resp.status(500).send('Error deleting user');
      }
    }


    

}

module.exports = {productRepository}


