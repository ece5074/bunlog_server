const nodemailer = require('nodemailer')
const config = require('../config/mailer')

module.exports.mailing = async ({ email, newPassword }) => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            prot: 587,
            host: 'smtp.gmlail.com',
            secure: false,
            requireTLS: true,
            auth: {
                user: config.email,  // gmail 계정 아이디를 입력
                pass: config.password         // gmail 계정의 비밀번호를 입력
            }
        });

        const mailOptions = {
            from: config.email,    // 발송 메일 주소 (위에서 작성한 gmail 계정 아이디)
            to: email,                     // 수신 메일 주소
            subject: 'Hello Your Password Reset~',   // 제목
            text: `Your New Password is ${newPassword}`  // 내용
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return error
            }
            else {
                console.log('Email sent: ' + info.response);
            }
        });
    }catch(error){
        return error
    }
}