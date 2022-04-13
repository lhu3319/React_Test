const express = require('express') //패키지.js에 있는 express를 가져옴 
const app = express()
const port = 3000

const bodyParser = require('body-parser');
const {User} = require("./models/user");

const config = require('./config/key');

//applicat /
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI, {
//mongoose.connect('mongodb+srv://lhu3319:lhu3319@awscluster.vdl4i.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
    // useNewUrlParser: true, 
    // useUnifiedTopology: true, 
    // useCreateIndex: true, 
    // useFindAndModify: false,
}).then(() => console.log('MongoDb Connected...'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World2!')
})

app.post('/register',(req,res) =>{
  //회원가입 정보 DB 삽입
  const user = new User(req.body);
  user.save((err,userInfo) =>{
    if(err) return res.json({success: false,err})
    return res.status(200).json({//status 200은 성공
      success:true
    })
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})