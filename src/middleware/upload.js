const multer = require('multer');
const path = require('path');

const storageProductsImage = multer.diskStorage({
    destination : function (req,file,callback) {
        callback(null, './public/images/products')
    },
    filename: function (req,file,callback) {
        callback(null, `${Date.now()}_products_${path.extname(file.originalname)}`)
    }
});

const uploadProductsImage = multer({
    storage: storageProductsImage
    /* ,limits : {
        files : 3
    } */
});

module.exports = {
    uploadProductsImage
}