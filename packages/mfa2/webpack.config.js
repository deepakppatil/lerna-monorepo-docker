const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { config, withPreviews } = require("../../webpack/webpack.mfe.config");

module.exports = withPreviews({
  ...config,

  plugins: [
    new ModuleFederationPlugin({
      name: "app_mfa2",
      library: { type: "var", name: "app_mfa2" },
      filename: "mfa2RemoteEntry.js",
      exposes: {
        "./Mfa2Page": "./src/Mfa2Page",
      },
      remotes: {
        app_mfa1: "app_mfa1",
      },
      // shared: [{ react: { singleton: true }, "react-dom": { singleton: true } }],
      shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
});
