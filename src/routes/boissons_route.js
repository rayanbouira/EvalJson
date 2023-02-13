const express = require('express');
const router = express.Router();
const boissonsController = require('../controller/boissons_controller');


// Exemple http://localhost:3000/entree/3
 router.get("/boissons/:id", boissonsController.getDataById);
 router.get("/boissons", boissonsController.getBoissons);
 router.post("/boissons", boissonsController.createData);
 router.put("/boissons/:id", boissonsController.updateData);
 router.delete("/boissons/:id", boissonsController.deleteDataById);

module.exports = router;