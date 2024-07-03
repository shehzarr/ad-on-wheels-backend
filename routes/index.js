const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');
const carInfoController = require('../controllers/carInfoController');
const brandController = require('../controllers/brandController');
const adAttachmentController = require('../controllers/adAttachmentController');

// User routes
router.post('/users', userController.createUser);
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// CarInfo routes
router.post('/car-info', carInfoController.createCarInfo);
router.get('/car-info', carInfoController.getAllCarInfo);
router.get('/car-info/:id', carInfoController.getCarInfoById);
router.put('/car-info/:id', carInfoController.updateCarInfo);
router.delete('/car-info/:id', carInfoController.deleteCarInfo);

// Brand routes
router.post('/brands', brandController.createBrand);
router.get('/brands', brandController.getAllBrands);
router.get('/brands/:id', brandController.getBrandById);
router.put('/brands/:id', brandController.updateBrand);
router.delete('/brands/:id', brandController.deleteBrand);

// AdAttachment routes
router.post('/ad-attachments', adAttachmentController.createAdAttachment);
router.get('/ad-attachments', adAttachmentController.getAllAdAttachments);
router.get('/ad-attachments/:id', adAttachmentController.getAdAttachmentById);
router.put('/ad-attachments/:id', adAttachmentController.updateAdAttachment);
router.delete('/ad-attachments/:id', adAttachmentController.deleteAdAttachment);

module.exports = router;
