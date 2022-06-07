const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    baseUrl: "http://demowebshop.tricentis.com/",
    loginPath: "login",
    registerPath: "register",
    rightCredentials: {
      firstName: "Anu",
      lastName: "Joseph",
      email: "anujoseph.popy@gmail.com",
      password: "P@ssw0rd",
      gender: "female",
    },
    wrongCredentials: {
      email: "testemail@gmail.com",
      password: "password",
    },
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
