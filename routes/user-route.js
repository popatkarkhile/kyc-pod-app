const express = require('express');
const router = express.Router();
const userController = require('../controllers/user-controller');

router.route('/wrapper-api-call').get(userController.wrapperAPICall);
router.route('/get-aadhaar-data').post(userController.getAadhaarData);

module.exports = router;
