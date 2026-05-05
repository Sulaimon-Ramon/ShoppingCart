import nodemailer from "nodemailer";
import dotenv from "dotenv"

class EmailService {
  constructor() {
    this.env = dotenv.config()
    this.transporter = nodemailer.createTransport({
      host: "gmail" || 'smtp.gmail.com',
      port: 587,
      secure: true,
      auth: {
        user: "olajidesulaimon339@gmail.com",
        pass: "mjcq rtoa odou sgpm",
      },
    });
  }

  sendEmail = ({userEmail, subject, html}) => {
    try {
      console.log("Email Message");
      const mailOption = {
        from: `ShoppingCart<info@shoppingcart.com>`,
        to: `${userEmail}`,
        subject: `${subject}`,
        html: `${html}`,
      };
      const info = this.transporter.sendMail(mailOption);
      console.log("Email Sent: ", info);
      console.log("Message ID: ", info.messageId);
    } catch (error) {
      console.error('Email sending failed', error);
    }
  };
}


export const emailService = new EmailService();