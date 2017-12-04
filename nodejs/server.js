var express=require("express");
var app=express();
var nodemailer = require("nodemailer"); 
var mysql = require('mysql');
var bodyParser=require('body-parser');
 

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
//连接数据库
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'test'
});    

//发送邮箱请求
app.post("/email",function(req,res){ 
     console.log(req.body.email); 
	 // 开启一个 SMTP 连接池
var smtpTransport = nodemailer.createTransport({
  host: "smtp.sina.com", // 主机
  secureConnection: true, // 使用 SSL
  port: 465, // SMTP 端口
  auth: {
    user: "13172615419@sina.cn", // 账号
    pass: "goushi000" // 密码
  }
});

// 设置邮件内容
     var mailOptions = {
  from: "Fred Foo <13172615419@sina.cn>", // 发件地址
  to: req.body.email, // 收件列表
  subject: "订购成功", // 标题
  html: "<b>thanks  for login!</b>" // html 内容
};

smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
    console.log(error);
  }else{
    console.log("发送成功");
  }
  smtpTransport.close(); // 如果没用，关闭连接池
});
});

//登录请求
app.post("/login",function(req,res){ 
       var username=req.body.username;
       connection.connect();  
       var query=connection.query('SELECT * FROM user where username=?',req.body.username, function (error, results, fields) {
        if (error) throw error;
		if(results[0].password==req.body.password){ 
		console.log("登录成功");}
		else{
		console.log("登录失败");}
});
        connection.release();
}); 

app.post("/contact",function(req,res){
       connection.connect();  
        var query=connection.query('INSERT INTO `contact`(`firstname`, `lastname`, `city`, `email`, `phone`, `contacttext`) VALUES(?,?,?,?,?,?)',[req.body.firstname,req.body.lastname,req.body.city,req.body.email,req.body.phone,req.body.username], function (error, results, fields) {
        if (error) throw error;
		console.log("发送成功");
        connection.release();
		});
});
 
app.listen(8090,"localhost",function(){
         console.log("...");
});