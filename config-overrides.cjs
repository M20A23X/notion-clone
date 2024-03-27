const {removeModuleScopePlugin, override, addWebpackPlugin} = require("customize-cra");
const Dotenv = require("dotenv-webpack");

module.exports = override(removeModuleScopePlugin(), addWebpackPlugin(new Dotenv()),);