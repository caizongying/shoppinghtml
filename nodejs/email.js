var nodemailer = require("nodemailer");

// ����һ�� SMTP ���ӳ�
var smtpTransport = nodemailer.createTransport({
  host: "smtp.sina.com", // ����
  secureConnection: true, // ʹ�� SSL
  port: 465, // SMTP �˿�
  auth: {
    user: "13172615419@sina.cn", // �˺�
    pass: "goushi000" // ����
  }
});

// �����ʼ�����
var mailOptions = {
  from: "Fred Foo <13172615419@sina.cn>", // ������ַ
  to: "13172615419@sina.cn", // �ռ��б�
  subject: "�����ɹ�", // ����
  html: "<b>thanks  for login!</b>" // html ����
}

// �����ʼ�
smtpTransport.sendMail(mailOptions, function(error, response){
  if(error){
    console.log(error);
  }else{
    console.log("���ͳɹ�");
  }
  smtpTransport.close(); // ���û�ã��ر����ӳ�
});