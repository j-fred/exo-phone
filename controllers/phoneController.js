var phoneModel = require('../models/phoneModel.js');

/**
 * phoneController.js
 *
 * @description :: Server-side logic for managing phones.
 */
module.exports = {

    /**
     * phoneController.list()
     */
    list: function (req, res) {
        phoneModel.find(function (err, phones) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting phone.',
                    error: err
                });
            }
            res.render("../views/admin/index",{phones:phones,title: 'Phone 974'});
        });
    },

    /**
     * phoneController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        phoneModel.findOne({_id: id}, function (err, phone) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting phone.',
                    error: err
                });
            }
            if (!phone) {
                return res.status(404).json({
                    message: 'No such phone'
                });
            }
            res.render("../views/admin/index",{phones:phones});
        });
    },

    /**
     * phoneController.create()
     */
    create: function (req, res) {
        var phone = new phoneModel({
			marque : req.body.marque,
			modele : req.body.modele,
			prix : req.body.prix,
			img : req.body.img,
			capacite : req.body.capacite,
			dim : req.body.dim
        });

        phone.save(function (err, phone) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating phone',
                    error: err
                });
            }
            //res.redirect("/admin");
        });
    },

    /**
     * phoneController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        phoneModel.findOne({_id: id}, function (err, phone) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting phone',
                    error: err
                });
            }
            if (!phone) {
                return res.status(404).json({
                    message: 'No such phone'
                });
            }

            phone.marque = req.body.marque ? req.body.marque : phone.marque;
			phone.modele = req.body.modele ? req.body.modele : phone.modele;
			phone.prix = req.body.prix ? req.body.prix : phone.prix;
			phone.img = req.body.img ? req.body.img : phone.img;
			phone.capacite = req.body.capacite ? req.body.capacite : phone.capacite;
			phone.dim = req.body.dim ? req.body.dim : phone.dim;
			
            phone.save(function (err, phone) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating phone.',
                        error: err
                    });
                }

                return res.json(phone);
            });
        });
    },

    /**
     * phoneController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        phoneModel.findByIdAndRemove(id, function (err, phone) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the phone.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
