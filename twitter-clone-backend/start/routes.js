"use strict";

const { RouteGroup } = require("@adonisjs/framework/src/Route/Manager");

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.get("/", () => {
  return { greeting: "Hello world in JSON" };
});

//Route.resource("user", "UserController").apiOnly();

Route.group(() => {
  Route.get("/user/:id", "UserController.show");
  Route.post("/user_exist", "UserController.exist");
  Route.post("/user", "UserController.store");
});

Route.group(() => {
  Route.post("/sessions", "SessionController.create");
});
