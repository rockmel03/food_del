import multer from 'multer'
import path from "path"
import crypto from 'crypto'

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './public/temp')
    },
    filename: function (req, file, cb) {
        const fileName = `${Date.now()}-${crypto.randomBytes(10).toString('hex')}${path.extname(file.originalname)}`
        cb(null, fileName)
    }
})

const upload = multer({ storage: storage })

export default upload