const {removeModuleScopePlugin, override, addWebpackPlugin, addWebpackAlias, babelInclude, addWebpackExternals} = require("customize-cra");
const path = require('path');
const Dotenv = require("dotenv-webpack");

module.exports = override(
    removeModuleScopePlugin(),
    addWebpackPlugin(new Dotenv()),
    addWebpackAlias({["#"]: path.resolve(__dirname, "src")}),
    babelInclude([path.resolve(path.resolve(__dirname, "src"))])
);