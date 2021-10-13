const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const { config, withPreviews } = require("../../webpack/webpack.mfe.config");

module.exports = withPreviews((usePreviews) => ({
  ...config,

  plugins: [
    ...config.plugins,
    new ModuleFederationPlugin({
      name: "app_mfa1",
      library: { type: "var", name: "app_mfa1" },
      filename: "mfa1RemoteEntry.js",
      exposes: {
        "./Mfa1Page": "./src/Mfa1Page",
        "./ShowModal": "./src/ShowModal",
      },
      // make dependencies eager for preview to work
      shared: [
        {
          react: { eager: usePreviews, singleton: true },
          "react-dom": { eager: usePreviews, singleton: true },
          "react-router-dom": { eager: usePreviews, singleton: true },
        },
      ],
      // shared: ["react", "react-dom", "react-router-dom"],
    }),
  ],
}));
