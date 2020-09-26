const express   = require('express');
const router    = express.Router();
const costumerController = require('../controllers/costumer-controller');

router.post('/', costumerController.post);

router.get('/', costumerController.getAll);

router.get('/:costumerId', costumerController.getById);

module.exports = router;