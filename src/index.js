const app = require("./app");


async function main() {
    //await https.createServer(sslOptions, app).listen(app.get("port"));
    await app.listen(app.get("port")); //volver
  
    console.log("Server on Port " + app.get("port"));
  }
  
  main();