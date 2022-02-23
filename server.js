const express = require('express')
const multer = require('multer')


const upload = multer({ dest: 'uploads/' })

const app = express(); 

app.use(express.static('public'))


app.post('/file/upload', upload.single('file'),
(req,res) => res.send('<h2>Upload successfully realized</h2>'))

app.listen(3000, () => console.log('App on port 3000'))