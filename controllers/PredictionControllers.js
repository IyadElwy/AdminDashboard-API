const catchAsync = require("../utils/catchAsync");
const axios = require("axios").default;
const AppError = require('../utils/appError');


/////////////////////////////////////////////////////////////

exports.getAllPredictions = catchAsync(async (req, res, next) => {
    let predictions;

    try {
        predictions = await axios.get(process.env.PREDICTIONSAPIURL);

    } catch (error) {
        next(new AppError('Error occurred while making predictions.', 500));
    }


    res.status(201).json({
        status: "Success",
        data: predictions.data.data,
    });

});

//////////////////////////////////////////////////////////////////

exports.getData = catchAsync(
    async (req, res, next) => {

        let carts;
        try {
            carts = await axios.get(`http://localhost:5005/api/v1/cart/`);
        } catch (error) {
            next(new AppError('Error occurred while getting data.', 500));
        }


        const products = carts.data.data.data.map(x => x.products.map(j => j.name));

        res.status(200).json({
            status: 'success',
            data: {
                data: products
            }
        });

    }
);
