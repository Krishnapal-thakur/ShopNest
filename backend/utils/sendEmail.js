const nodemailer= require('nodemailer');

const sendEmail =async (to , subject,text)=>{   //sendEmail me send ki h 3 chij wo
    try{
        const transporter =nodemailer.createTransport({ 
            service:'Gmail',
            auth:{
                user:process.env.EMAIL_USER,     //ki user ko kis id se mail send karna he
                pass:process.env.EMAIL_PASS
            }
        });
        const mailOptions = {
            from:process.env.EMAIL_USER,
            to,
            subject,
            text
        };
        await transporter.sendMail(mailOptions);
    }
    catch (error){
        console.log(`Error sending email:` ,error);
    }
};

module.exports =sendEmail