import next from "next";
import { createServer } from "node:http";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const expressApp = express();

  // Middlewares
  expressApp.use(cors());
  expressApp.use(express.json());

  // 📩 EMAIL ROUTE
  expressApp.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "abhishek887tripathi@gmail.com", // fix this email 😄
        subject: `New message from ${name}`,
        text: `From: ${name} (${email})\n\n${message}`,
      });

      console.log("Message sent:", info.messageId);

      res.json({ status: "success" });
    } catch (error) {
      console.error(error);
      res.json({ status: "fail" });
    }
  });

  // Next.js handler
  expressApp.use((req, res) => {
  return handle(req, res);
});

  // Create server
  const httpServer = createServer(expressApp);

  // 🔌 SOCKET.IO
  const io = new Server(httpServer);

  io.on("connection", (socket) => {
    console.log("user connected");

    socket.on("chat message", (msg) => {
      io.emit("chat message", msg);
    });

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  // 🚀 ONE PORT ONLY
  httpServer.listen(3000, () => {
    console.log("Running on http://localhost:3000");
  });
});



// import NodeMailer from 'nodemailer';
// import express from 'express';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app=express();
// app.use(cors());
// app.use(express.json());

// app.post("/send", async(req,res)=>{
//     const {name,email,message}=req.body;
//     try{
//        const transporter = NodeMailer.createTransport({
//   host: "smtp.ethereal.email",
//   port: 587,
//   secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
//   auth: {
//     user: process.env.EMAIL_USER,
//     pass: process.env.EMAIL_PASS,
//   },
// });
// (async()=> {
//     const info = await transporter.sendMail({
//         from: process.env.EMAIL_USER,
//         to:'abhishek887tripathi@getMaxListeners.com',
//         subject: `New message from ${name}`,
//         text: `You have received a new message from ${name} (${email}):\n\n${message}`,
//     });
//     console.log("Message sent: %s", info.messageId);
// })();
// res.json({status:'success'});
//     } 
//     catch(error){
//         console.error("Error sending email:", error);
//         res.json({status:'fail'});
//     }
// });

// app.listen(5000,()=>{
//     console.log("Server is running on port 5000");
// }) integrate it with this server and also make this nodemailer to run on same 