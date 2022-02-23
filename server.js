const express = require('express')
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({

    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },

    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}-${Date.now()}.${path.extname(file.originalname)}`)
    }

})

const upload = multer({ storage })

const app = express(); 

app.use(express.static('public'))


app.post('/file/upload', upload.single('file'),
(req,res) => res.send('<h2>Upload successfully realized</h2>'))

app.listen(3000, () => console.log('App on port 3000'))