const app = require('./app');
const port = 3000;

app.listen(port, () => {
  console.log("L'application tourne sur le port" + port);
});