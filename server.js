import NodeMailer from 'nodemailer';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json());

app.post("/send", async(req,res)=>{
    const {name,email,message}=req.body;
    try{
       const transporter = NodeMailer.createTransport({
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
(async()=> {
    const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to:'abhishek887tripathi@getMaxListeners.com',
        subject: `New message from ${name}`,
        text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    });
    console.log("Message sent: %s", info.messageId);
})();
res.json({status:'success'});
    } 
    catch(error){
        console.error("Error sending email:", error);
        res.json({status:'fail'});
    }
});

app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})