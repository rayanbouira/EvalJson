const express = require('express');
const router = express.Router();
const dessertsController = require('../controller/desserts_controller');


// Exemple http://localhost:3000/entree/3
 router.get("/desserts/:id", dessertsController.getDataById);
 router.get("/desserts", dessertsController.getDesserts);
 router.post("/desserts", dessertsController.createData);
 router.put("/desserts/:id", dessertsController.updateData);
 router.delete("/desserts/:id", dessertsController.deleteDataById);

module.exports = router;