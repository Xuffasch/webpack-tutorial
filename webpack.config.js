const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack tutorial",
    })
  ],
  devServer: {
    // Display only errors to reduce output
    stats: "errors-only",
    // Parse host and port from .env 
    // When using Docker, Vagrant or Cloud9 set host: "0.0.0.0"

    // 0.0.0.0 is available to all network devices
    // unlike default `localhost`.
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    open: true, // open the page in browser
  },
}