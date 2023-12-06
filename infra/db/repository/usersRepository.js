//const {User} = require("../../settings.js")
const { Op } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

class UserRepository{
    constructor(User){
      this.user = User
    }
    async getAllUsers(req, resp) {
        try {
          const users = await this.user.findAll();
          resp.status(200).json(users);
        } catch (error) {
          // Lidar com erros de consulta, se houver
          console.error(error);
          resp.status(500).json({ error: 'Erro ao buscar todos usuários.' });
        }
      }
      async getOneUser(req, resp) {
        try {
          const id = parseInt(req.params.id);
          console.log(id)
          const user = await this.user.findByPk(id);
          if (user) {
            resp.status(200).json(user);
          } else {
            resp.status(404).json({ error: 'Usuário não encontrado.' });
          }
        } catch (error) {
          console.error(error);
          resp.status(500).json({ error: 'Erro ao buscar o usuário unico.' });
        }
      }
      async insertUser(req, resp) {
        try {
          const {clientenome, clientesexo, clienteidade,clientesalario,clientecidade,clienteestado} = req.body;
          console.log(clientenome)
          if(clientesexo == "M" || clientesexo =="F"){
            console.log("entrou")
            const newUser = await this.user.create({
              Nome: clientenome,
              Sexo: clientesexo,
              idade: clienteidade,
              salario: clientesalario,
              cidade: clientecidade,
              estado: clienteestado,
              
            });
            resp.status(201).json(newUser);
          }
          else{
            console.error(error);
            resp.status(500).json({ error: 'Erro ao adicionar Cliente.' });

          }
        } catch (error) {
          console.error(error);
          resp.status(500).json({ error: 'Erro ao adicionar Cliente.' });
        }
      }

      async getBySex(req, resp){
        try {
          const {clientesexo} = req.body;
          console.log("teste")
          const user = await this.user.findAll({ where: { Sexo: clientesexo } });
          if (user) {
            resp.status(200).json(user);
          } else {
            resp.status(404).json({ error: 'Usuário não encontrado.' });
          }
        } catch (error) {
          console.error(error);
          resp.status(500).json({ error: 'Erro ao buscar o usuário por genero.' });
        }
      }

      async getBySalaryGreater(req, resp){
        try {
          const {clientesalario} = req.body;
          const user = await this.user.findAll({ where: { salario: {[Op.gt]:clientesalario} } });
          if (user) {
            resp.status(200).json(user);
          } else {
            resp.status(404).json({ error: 'Nenhum Cliente não encontrado.' });
          }
        } catch (error) {
          console.error(error);
          resp.status(500).json({ error: 'Erro ao buscar os clientes.' });
        }
      }

      async getBySalaryLower(req, resp){
        try {
          const {clientesalario} = req.body;
          const user = await this.user.findAll({ where: { salario: {[Op.lt]:clientesalario} } });
          if (user) {
            resp.status(200).json(user);
          } else {
            resp.status(404).json({ error: 'Nenhum Cliente não encontrado.' });
          }
        } catch (error) {
          console.error(error);
          resp.status(500).json({ error: 'Erro ao buscar os clientes.' });
        }
      }

    

    
    async  deleteUser(req, resp) {
      try {
        
        const user = await this.user.findByPk(id);
    
        if (!user) {
          return resp.status(404).send(`User with ID: ${id} not found`);
        }
    
        await user.destroy();
    
        resp.status(200).send(`User deleted with ID: ${id}`);
      } catch (error) {
        console.error(error);
        resp.status(500).send('Error deleting user');
      }
    }


    

}

module.exports = {UserRepository}


