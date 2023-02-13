const express = require('express');
const router = express.Router();
const platsController = require('../controller/plats_controller');


// Exemple http://localhost:3000/entree/3
 router.get("/plats/:id", platsController.getDataById);
 router.get("/plats", platsController.getPlats);
 router.post("/plats", platsController.createData);
 router.put("/plats/:id", platsController.updateData);
 router.delete("/plats/:id", platsController.deleteDataById);

module.exports = router;