"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class UserSchema extends Schema {
  up() {
    this.table("users", (table) => {
      // alter table
      table.string("phone", 11);
      table.timestamp("birthday").notNullable().unique();
    });
  }

  down() {
    this.table("users", (table) => {
      // reverse alternations
      table.dropColumn("phone");
      table.dropColumn("birthday");
    });
  }
}

module.exports = UserSchema;
