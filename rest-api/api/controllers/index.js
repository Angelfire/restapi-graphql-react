const db = require('../../data/db-users.js');

class UsersController {

  wrongRoute(req, res) {
    res.status(404).send({
      message: "Not found"
    });
  }

  /**
   * Get all user
   * @param {*} req 
   * @param {*} res 
   */
  getAllUsers(req, res) {
    res.status(200).send({
      success: 'true',
      data: db
    });
  }

  /**
   * Get user based on its id
   * @param {*} req 
   * @param {*} res 
   */
  getUser(req, res) {
    const id = parseInt(req.params.id, 10);

    db.map(user => {
      if(user.id === id) {
        res.status(200).send({
          success: 'true',
          data: user
        });
      }
    });
  }
}

const UserController = new UsersController();

module.exports = UserController;
