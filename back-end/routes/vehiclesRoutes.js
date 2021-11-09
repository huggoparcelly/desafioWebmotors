const router = require('express').Router();
const vehicleController = require('../controllers/vehiclesController');

router.get('/', vehicleController.listVehicles);
router.get('/:id', vehicleController.getVehicleById);

router.post('/', vehicleController.createVehicle);

router.put('/:id', vehicleController.updateVeihcle);

router.delete('/:id', vehicleController.removeVehicle);


module.exports = router;