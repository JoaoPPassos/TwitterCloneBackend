"use strict";

const User = use("App/Models/User");

const moment = use("moment");

class UserController {
  async create({ request }) {}

  async show({ params, response }) {
    const { id } = params;

    try {
      const data = await User.findByOrFail("id", id);

      return response.status(200).send(data);
    } catch (error) {
      return response.status(404).send(error);
    }
  }

  async exist({ request, response }) {
    const { email, phone, username } = request.all();

    try {
      const data = await User.query()
        .where("email", email)
        .orWhere("phone", phone)
        .orWhere("username", username)
        .fetch();

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
    return response.status(200).send("index");
  }

  async store({ response, request }) {
    try {
      const data = request.only([
        "username",
        "phone",
        "email",
        "password",
        "birthday",
      ]);

      const user = await User.create(data);

      return response.status(200).send(user);
    } catch (error) {
      return response.status(404).send(error);
    }
  }
}

module.exports = UserController;
