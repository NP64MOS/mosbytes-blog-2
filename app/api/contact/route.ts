
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  // Create a transporter object using the default SMTP transport
  // In a real application, you would use a real email provider like SendGrid, Mailgun, etc.
  // and you would use environment variables to store your credentials.
  const transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "maddison53@ethereal.email", // generated ethereal user
      pass: "jn7jnAPss4f63QBp6D", // generated ethereal password
    },
  });

  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "mossfon64@gmail.com", // Change this to your email address
      subject: "New Contact Form Submission",
      text: message as string,
      html: `<p>${message}</p>`,
    });

    console.log("Message sent: %s", info.messageId);
    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

    return NextResponse.json(
      {
        message: "Your message has been sent successfully!",
        previewUrl: nodemailer.getTestMessageUrl(info),
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "There was an error sending your message." },
      { status: 500 }
    );
  }
}
