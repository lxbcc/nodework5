const express = require('express');
const data = require('./data.json');
const router = express.Router();


/* GET home page. */
router.use(express.static('routes')); 
router.get('/login', function(req, res, next) {
  res.type('text/html')
  res.status(200)
  res.sendFile(__dirname+ '/login.html'); 
})
router.get('/list',function(req, res, next) {

  var username=req.query.username;
  var pwd=req.query.pwd
  console.log('cc');
  if( username == data.users[0].username && pwd == data.users[0].password){
    res.type('text/html')
    res.status(200)
    res.sendFile(__dirname+ '/list.html');
  }else{
    res.send('密码错误');
  }
})
router.get('/data',(req,res)=>{
  res.send(data)
})

module.exports = router;
