const multer = require("multer");

const storagePath = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, req.body.aadhaarNumber + ".png");
    },
});
var uploadImg = multer({ storage: storagePath }).array("aadhaarImage", 1);

module.exports = uploadImg;