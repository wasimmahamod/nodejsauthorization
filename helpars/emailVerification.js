const nodemailer = require("nodemailer");

async function emailVerification(email,emailTamplate){

    let transporter = nodemailer.createTransport({
        service:'gmail',
        auth: {
            user: process.env.USER, // generated ethereal user
            pass: process.env.PASS,
          },
      });
      let info = await transporter.sendMail({
        from: "InterVew", // sender address
        to: email, // list of receivers
        subject: "Intervew", // Subject line
        html:emailTamplate// html body
      });
}

module.exports=emailVerification;