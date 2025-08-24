import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const TO    = process.env.TO_EMAIL   ?? "dhaneshkmd82@gmail.com";
const FROM  = process.env.FROM_EMAIL ?? "UsefulFormula <onboarding@resend.dev>";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields." }, { status: 400 });
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "Invalid email." }, { status: 400 });
    }

    console.log("Contact message:", { name, email, message });

    if (resend) {
      const { error } = await resend.emails.send({
        from: FROM,
        to: [TO],                 // string | string[]
        subject: `UsefulFormula — Contact from ${name}`,
        replyTo: email,           // <-- camelCase
        text: `From: ${name} <${email}>\n\n${message}`,
      });
      if (error) {
        console.error("Resend error:", error);
        return NextResponse.json({ ok: false, error: "Email service error." }, { status: 500 });
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e: any) {
    console.error(e);
    return NextResponse.json({ ok: false, error: e?.message || "Server error" }, { status: 500 });
  }
}
