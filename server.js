import next from "next";
import { createServer } from "node:http";
import { Server } from "socket.io";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import mongoose from "mongoose";
import dns from "dns";
dns.setDefaultResultOrder("ipv4first");
dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const expressApp = express();

  // ---------------- MIDDLEWARE ----------------
  expressApp.use(cors());
  expressApp.use(express.json());

  // ---------------- MONGODB ----------------
 try {
  await mongoose.connect(process.env.MongoDB_URL);

  console.log("MongoDB Connected");

} catch (error) {
  console.log("Mongo Error:", error);
}

  // ---------------- NODEMAILER (UNCHANGED) ----------------
  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  expressApp.post("/send", async (req, res) => {
    const { name, email, message } = req.body;

    try {
      const info = await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "abhishek887tripathi@gmail.com",
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

expressApp.use((req, res) => {
  return handle(req, res);
});

  // ---------------- SOCKET.IO (UNCHANGED) ----------------
  const httpServer = createServer(expressApp);
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

  // ---------------- SERVER START ----------------
  httpServer.listen(3000, () => {
    console.log("Running on http://localhost:3000");
  });
});