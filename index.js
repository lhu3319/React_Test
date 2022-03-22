const express = require('express') //패키지.js에 있는 express를 가져옴 
const app = express()
const port = 3000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://lhu3319:lhu3319@awscluster.vdl4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // useNewUrlParser: true, 
    // useUnifiedTopology: true, 
    // useCreateIndex: true, 
    // useFindAndModify: false,
}).then(() => console.log('MongoDb Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})