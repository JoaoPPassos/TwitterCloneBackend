"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.alter("users", (table) => {
      // alter table
      table.string("email", 100).alter();
      table.timestamp("birthday").notNullable().alter();
    });
  }

  down() {
    // reverse alternations
    this.alter("users", (table) => {
      // alter table
      table.string("email", 100).alter();
      table.timestamp("birthday").notNullable().alter();
    });
  }
}

module.exports = UserSchema;
