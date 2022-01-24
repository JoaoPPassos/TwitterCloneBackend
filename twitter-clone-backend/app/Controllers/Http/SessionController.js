"use strict";

const User = use("App/Models/User");

class SessionController {
  async create({ request, auth, response }) {
    const { email, phone, username, password } = request.all();
    try {
      const user = await User.query()
        .where("email", email ?? "")
        .orWhere("phone", phone ?? "")
        .orWhere("username", username ?? "")
        .fetch();

      const token = await auth.attempt(user.email || user.phone, password);

      return response.status(200).send(token);
    } catch (error) {
      return response.status(404).send(error);
    }
  }
}

module.exports = SessionController;
