import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const data = await req.json();
  const transport = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 587,
    secure: false,
    auth: {
      user: process.env.NEXT_SENDER_EMAIL,
      pass: process.env.NEXT_SENDER_PASSWORD,
    },
  });
  try {
    await transport.sendMail({
      from: process.env.NEXT_SENDER_EMAIL,
      to: process.env.NEXT_RECEIVER_EMAIL,
      subject: "Get in touch - Shreya Shrestha",
      html: `
        <p>Name: ${data?.full_name}</p>
        <p>Email: ${data?.email}</p>
        <p>Company's Name: ${data?.company_name}</p>
        <p>Company's Address: ${data?.company_address}</p>
        <p>Message: ${data?.message}</p>
      `,
    });
    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
}
