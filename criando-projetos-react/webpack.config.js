const HtmlWebPackPlugin = require("html-webpack-plugin"); // puxa configurações do webpack
module.exports = { // síntaxe de export antiga do JS para garantir que seja compreendida em tdos os lugares
  devtool: "source-map", // ferramentas de desenvolvimento
  entry: "./src/index", // ponto de entrada da aplicação
  module: { // múdulos que vamos utilizar para criar as regras
    rules: [
      {
        test: /\.js$/, // validação do arquivos js que tem na aplicação
        exclude: /node_modules/, // exclui arquivos js dentro do node_modules 
        use: { loader: "babel-loader" }, // utiliza o babel-loader
      },
      {
        test: /\.html$/, 
        use: [{ loader: "html-loader" }],
      },
      {
        test: /\.css$/,
        use: [ "style-loader", "css-loader" ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i, // i: para maiúsculo e minúsculo
        use: ["file-loader"],
      }
    ],
  },
  resolve: { // quais arquvos vão ser tratados
    extensions: [".js", ".jsx"],
  },
  plugins: [ 
    new HtmlWebPackPlugin({ // utilizando variável HtmlWebPackPlugin
        template: './public/index.html' // onde os arquivos vão ser exportados
    })
  ]
};
