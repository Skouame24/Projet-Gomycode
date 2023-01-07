module.exports = (app) => {
    const App = require("../controllers/FormController");
  
  
    app.post("/creer-user", App.create);
  
    app.get("/tout-user", App.findAll);
  
    app.get("/user/:userId", App.findOne);
  
    app.put("/user/:userId", App.update);
  
    app.delete("/user/:userId", App.delete);
  };