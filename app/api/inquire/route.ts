import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        console.log("Received inquiry:", body);

        const { name, email, company, country, message, vehicle } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // 1. Save to Database (Optional for Vercel deployment if using SQLite)
        let inquiry = null;
        try {
            inquiry = await prisma.inquiry.create({
                data: {
                    name,
                    email,
                    company,
                    country,
                    message,
                    vehicle,
                },
            });
            console.log("Inquiry saved:", inquiry);
        } catch (dbError) {
            console.warn("Database save failed (continuing to email):", dbError);
            // In Vercel serverless with SQLite, this might fail. We allow it to proceed to email.
        }

        // 2. Send Email
        // Note: For production, use environment variables for credentials
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, // e.g., 'your-email@gmail.com'
                pass: process.env.EMAIL_PASS, // e.g., 'your-app-password'
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: "martin@jchauto.co.kr",
            subject: `[New Inquiry-Spera Korea] From ${name} (${company || "Individual"})`,
            text: `
New Distributor Inquiry Received:

Name: ${name}
Email: ${email}
Company: ${company || "-"}
Country: ${country || "-"}
Vehicle Interest: ${vehicle || "-"}

Message:
${message}
            `,
        };

        await transporter.sendMail(mailOptions);
        console.log("Email sent successfully");

        return NextResponse.json({ success: true, inquiry }, { status: 201 });
    } catch (error: any) {
        console.error("FULL ERROR DETAILS:", JSON.stringify(error, null, 2));
        console.error("Error Message:", error?.message);
        console.error("Error Stack:", error?.stack);
        return NextResponse.json(
            { error: error?.message || "Internal Server Error" },
            { status: 500 }
        );
    }
}
