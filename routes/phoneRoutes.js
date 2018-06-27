var express = require('express');
var router = express.Router();
var phoneController = require('../controllers/phoneController.js');

/*
 * GET
 */
router.get('/', phoneController.list);

/*
 * GET
 */
router.get('/:id', phoneController.show);

/*
 * POST
 */
router.post('/', phoneController.create);

/*
 * PUT
 */
router.put('/:id', phoneController.update);

/*
 * DELETE
 */
router.delete('/:id', phoneController.remove);

module.exports = router;
