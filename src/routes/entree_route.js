const express = require('express');
const router = express.Router();
const entreeController = require('../controller/entree_controller');


// Exemple http://localhost:3000/entree/3
 router.get("/entree/:id", entreeController.getDataById);
 router.get("/entree", entreeController.getEntree);
 router.post("/entree", entreeController.createData);
 router.put("/entree/:id", entreeController.updateData);
 router.delete("/entree/:id", entreeController.deleteDataById);

module.exports = router;


