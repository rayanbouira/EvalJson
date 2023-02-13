const express = require('express');
const router = express.Router();
const classiqueController = require('../controller/classique_controller');


// Exemple http://localhost:3000/entree/3
 router.get("/classique/:id", classiqueController.getDataById);
 router.get("/classique", classiqueController.getClassique);
 router.post("/classique", classiqueController.createData);
 router.put("/classique/:id", classiqueController.updateData);
 router.delete("/classique/:id", classiqueController.deleteDataById);

module.exports = router;