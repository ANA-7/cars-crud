const router = require('express').Router();
let Car = require('../models/car.model');

router.route('/').get((req, res) => {
    Car.find()
        .then(cars => res.json(cars))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const make = req.body.make;
    const model = req.body.model;
    const category = req.body.category;
    const year = Number(req.body.year);
    const price = Number(req.body.price);

    const newCar = new Car({
        make: make,
        model: model,
        category: category,
        year: year,
        price: price
    });

    newCar.save()
        .then(() => res.json('Car added successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
    Car.findById(req.params.id)
        .then(car => res.json(car))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
    Car.findByIdAndDelete(req.params.id)
        .then(() => res.json('Car deleted successfully!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
    Car.findById(req.params.id)
        .then(car => {
            car.make = req.body.make;
            car.model = req.body.model;
            car.category = req.body.category;
            car.year = Number(req.body.year);
            car.price = Number(req.body.price);

            car.save()
                .then(() => res.json('Car updated successfully!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
