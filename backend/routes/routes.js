var express = require('express');

const router = express.Router();

// Cloth route

var clothController = require('../src/cloth/clothController');

router.route('/cloth/getAll').get(clothController.getDataControllerfn);

router.route('/cloth/create').post(clothController.createClothControllerFn);

router.route('/cloth/update/:id').patch(clothController.updateClothController);

router.route('/cloth/delete/:id').delete(clothController.deleteClothController);

router.route('/cloth/get/:id').get(clothController.findClothController);



module.exports = router;