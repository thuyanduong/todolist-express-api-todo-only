const User = require('../models/User')

const getUsersAPI = async (req, res) => {
  try {
    const users = await User.getUsers()
    res.status(200).json(users)
  } catch {
    res.sendStatus(500);
  }
}

const getUserAPI = async (req, res) => {
  const id = req.params.id
  try {
    const user = await User.getUser(id)
    const usersTasks = await User.getUsersTask(id)
    if(user){
      user.tasks = usersTasks
      res.status(200).json(user)
    } else {
      res.status(404).json({message: "User not found"})
    }
  } catch {
    res.sendStatus(500);
  }
}


module.exports = {
  getUsersAPI,
  getUserAPI
}