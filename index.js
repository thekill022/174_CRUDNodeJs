import express from 'express'
import bodyParser from 'body-parser'
import mobilRoute from './mobil.js'

const app = express()
const port = 8080


app.get('/', function(req,res) {
    res.send('welcome to the jungle')
})

app.use(bodyParser.json());
app.use('/', mobilRoute);

app.listen(port, () => console.log(`server berjalan di port : http://localhost:${port}`));