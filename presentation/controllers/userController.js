const { UserRepository } = require("../../infra/db/repository/usersRepository.js")
const {User} = require("../../infra/settings.js")


const getUsers = (req, resp) => {
    const userRepository = new UserRepository(User)
    userRepository.getAllUsers(req, resp)
}
  
const getUserById = (req, resp) => {
  const userRepository = new UserRepository(User)
  userRepository.getOneUser(req, resp)
}
  
const createUser = (req, resp) => {
  const userRepository = new UserRepository(User)
  userRepository.insertUser(req, resp)
}
  

  
const deleteUser = (req, resp) => {
  const userRepository = new UserRepository(User)
  userRepository.deleteUser(req, resp)
}

const findBySex = (req, resp) => {
  const userRepository = new UserRepository(User)
  userRepository.getBySex(req, resp)
}

const findSalaryGreater = (req, resp) => {
  const userRepository = new UserRepository(User)
  userRepository.getBySalaryGreater(req, resp)
}

const findSalaryLower = (req, resp) => {
  const userRepository = new UserRepository(User)
  userRepository.getBySalaryLower(req, resp)
}
  
  
module.exports = {
    getUsers,
    getUserById,
    createUser,
    findBySex,
    deleteUser,
    findSalaryGreater,
    findSalaryLower,
}