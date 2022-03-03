var userService = require('../services/user-service');
const logger = require('../helpers/logger-middleware');
const uploadImg = require('../utility/fileUpload');

// require dependencies
const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');

module.exports = {
    getAadhaarData: async (req, res, next) => {
        try {
            uploadImg(req, res, async function (error, data) {
                console.log("Aadhaar Number >>>>", req.body.aadhaarNumber);

                var pdfFilePath = await userService.getAadhaarPDF(req.body);
                if (pdfFilePath) {
                    res.status(200).json({
                        status: true,
                        message: "Data get sucessfully",
                        data: pdfFilePath
                    })
                } else {
                    res.status(200).json({
                        status: false,
                        message: "No data found",
                        data: {}
                    })
                }
            })
        }

        catch (error) {
            // log error data
            logger.error('Error message', error);
            res.status(500).json({
                status: false,
                message: error.message,
                data: {}
            });
        };
    },
    wrapperAPICall: async (req, res, next) => {
        try {
            // log request method and url
            logger.info(`Request Method  & URL :----> ${req.method} - ${req.originalUrl}`);

            // log all request data
            logger.info('Request URL :----> ', req);

            var response = await userService.getUsers();

            // console.log("response", response.data);
            logger.info('Response data :---->', response.data);
            if (response.data) {
                res.status(200).json({
                    status: true,
                    message: "Data get sucessfully",
                    data: response.data
                })
            } else {
                res.status(200).json({
                    status: false,
                    message: "No data found",
                    data: {}
                })
            }
        }
        catch (error) {
            // log error data
            logger.error('Error message', error);
            res.status(500).json({
                status: false,
                message: error.message,
                data: {}
            });
        };
    },


} // Module closing
