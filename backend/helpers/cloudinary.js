const cloudinary = require('cloudinary')
const multer = require('multer')
const cloudinaryStorage = require('multer-storage-cloudinary')

cloudinary.config({
  cloud_name:   process.env.CLOUDINARY_CLOUD_NAME,
  api_key:      process.env.CLOUDINARY_API_KEY,
  api_secret:   process.env.CLOUDINARY_API_SECRET
});

let storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: 'BuenaReceta',
  allowedFormats: ['jpg', 'png', 'gif'],
  filename: function(req, file, cb) {
    cb(null, file.originname)
  }
});

const parser = multer({ storage });

module.exports = parser