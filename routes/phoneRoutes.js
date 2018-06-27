var express = require('express');
var router = express.Router();
var phoneController = require('../controllers/phoneController.js');

/*
 * lister les telephones
 */
router.get('/', phoneController.list);

/*
 * affiche un telselon id
 */
router.get('/:id', phoneController.show);

/*
 * Créé un tel dans la bdd
 */
router.post('/', phoneController.create);

/*
 * maj d'un tel
 */
router.post('/:id', phoneController.update);

/*
 * effacer un tel
 */
router.delete('/:id', phoneController.remove);

module.exports = router;
