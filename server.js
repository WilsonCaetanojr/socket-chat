const express = require("express");
const path = require("path");

const app = express();

//definições de protocolos http e Web socket
const server = require("http").createServer(app);
const io = require("socket.io")(server);

//configura o node para observar os arquivos frontend na pasta public
//é necessário a lib ejs para concluir esta etapa
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "public"));
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

app.use("/", (req, res) => {
  res.render("index.html");
});
