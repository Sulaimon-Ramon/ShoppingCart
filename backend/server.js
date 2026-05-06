import express from "express";
import nodemailer from "nodemailer";
import cors from 'cors'

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
}))

app.get("/", (req, res) => {
  res.json({ status: 200, Success: true });
});


app.post("/api/send-email", async (req, res) => {
  const { userEmail, subject, html } = req.body;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "olajidesulaimon339@gmail.com",
      pass: "utqd hkoz vlzq qyls",
    },
  });

  try {
    await transporter.sendMail({
        from: `ShoppingCart<info@shoppingcart.com>`,
        to: userEmail,
        subject: subject,
        html: html
    })
    res.json({status: 200, Success: true});
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message});
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
