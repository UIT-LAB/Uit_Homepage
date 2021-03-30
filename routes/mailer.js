var nodemailer = require('nodemailer');



//smtp 서버를 사용하기 위한 모듈이다.

var smtpPool=require('nodemailer-smtp-pool');



//nodemailer 의 createTransport는 transporter 객체를 만드는 메소드인데 

//아래 메소드 참조값 변수 smtpTransport 는 nodemailer-smtp-pool 객체 인스턴스에 인자값으로 쓰인다.

var smtpTransport=nodemailer.createTransport(smtpPool( {
    service:'Gmail',
    host:'localhost',
    port:'465',
    tls:{
        rejectUnauthorize:false
    },

    //이메일 전송을 위해 필요한 인증정보

    //gmail 계정과 암호 
    auth:{
        user:'20171302@gmail.com',
        pass:'1q2w3e4r~!'
    },
    maxConnections:5,
    maxMessages:10
}) );

var mailOpt={
    from:req.session.user_id,
    to:req.session.email,
    subject:req.session.title,
    html:req.session.content,
}
smtpTransport.sendMail(mailOpt, function(err, res) {
    if( err ) {
        console.log(err);
    }else{
        console.log('Message send :'+ res);
    }

    smtpTransport.close();
})