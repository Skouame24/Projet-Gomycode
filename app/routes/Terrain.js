module.exports = (app) => {
    const App = require("../controllers/controller.js");
  
  
    app.post("/create", App.create);
  
    app.get("/get-all", App.findAll);
  
    app.get("/terrain/:terrainId", App.findOne);
  
    app.put("/terrain/:terrainId", App.update);
  
    app.delete("/message/:terrainId", App.delete);
  };