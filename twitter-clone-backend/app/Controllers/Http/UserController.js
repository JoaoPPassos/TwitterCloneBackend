"use strict";

const User = use("App/Models/User");

class UserController {
  async create({ request }) {
    const data = request.only[("username", "email", "password")];

    const user = await User.create(data);

    return user;
  }

  async show({ params, response }) {
    try {
      const data = await User.findByOrFail("email", params.email);
      return response.status(200).send(data);
    } catch (error) {
      return response.status(400).send("error");
    }
  }

  async exist({ params, response }) {
    try {
      const data = await User.findBy("email", params.email);

      if (data) {
        return response.status(200).send({
          exist: true,
        });
      }

      return response.status(404).send({
        exist: false,
      });
    } catch (error) {
      return response.status(400).send("error");
    }
  }

  async index({ response }) {
    console.log("entrou aqui");
    return response.status(200).send("index");
  }

  async store({ response }) {
    return response.status(200).send("store");
  }
}

module.exports = UserController;
