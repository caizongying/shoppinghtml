var http=require("http");
var express=require("express");
var app=express();
var nodemailer = require("nodemailer");




app.post("/email",function(req,res,next){ 
	  	// 设置邮件内容
      var mailOptions = {
      from: "Fred Foo <13172615419@sina.cn>", // 发件地址
      to: "13172615419@sina.cn", // 收件列表
      subject: "订购成功", // 标题
      html: "<b>thanks  for login!</b>" // html 内容
         };	
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

   // 发送邮件
smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
    console.log(error);
  }else{
    console.log("发送成功");
  }
  smtpTransport.close(); // 如果没用，关闭连接池
});  
});

var server=http.createServer(function(req,res){   
    res.writeHead(200,{'Content-Type':'text/javascript;charset=UTF-8',"Access-Control-Allow-Origin":"*"}); 
    res.write("Hello NodeJs");  
    res.end();  
});

server.listen(8090,"localhost",function(){
         console.log("��ʼ����...");
});