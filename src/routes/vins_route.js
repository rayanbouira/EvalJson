const express = require('express');
const router = express.Router();
const vinsController = require('../controller/vins_controller');


// Exemple http://localhost:3000/entree/3
 router.get("/vins/:id", vinsController.getDataById);
 router.get("/vins", vinsController.getVins);
 router.post("/vins", vinsController.createData);
 router.put("/vins/:id", vinsController.updateData);
 router.delete("/vins/:id", vinsController.deleteDataById);

module.exports = router;