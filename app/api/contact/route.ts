import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, message } = body;

    if (!name || !contact || !message) {
      return NextResponse.json(
        { error: "All fields required" },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>", // Use verified domain later
      to: "raeef.chowdhury23@gmail.com", // Your email
      subject: `New Contact: ${name}`,
      text: `
Name: ${name}
Contact: ${contact}

Message:
${message}
      `,
    });

    return NextResponse.json({ success: true, id: data.data });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
