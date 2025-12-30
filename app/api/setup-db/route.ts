import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        // Create the Inquiry table manually if it doesn't exist
        // This SQL matches the schema definition for PostgreSQL
        await prisma.$executeRawUnsafe(`
            CREATE TABLE IF NOT EXISTS "Inquiry" (
                "id" SERIAL NOT NULL,
                "name" TEXT NOT NULL,
                "email" TEXT NOT NULL,
                "company" TEXT,
                "country" TEXT,
                "message" TEXT NOT NULL,
                "vehicle" TEXT,
                "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

                CONSTRAINT "Inquiry_pkey" PRIMARY KEY ("id")
            );
        `);

        return NextResponse.json({
            success: true,
            message: "Database table 'Inquiry' created successfully."
        });
    } catch (error: any) {
        return NextResponse.json(
            { error: error.message, details: "Failed to create table." },
            { status: 500 }
        );
    }
}
