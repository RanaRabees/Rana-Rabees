import { NextRequest, NextResponse } from "next/server";
import { db, usersTable } from "../../../lib/drizzle";
export async function POST(request: NextRequest) {
    const body = await request.json();
    const data = await db.insert(usersTable).values(body).returning();
    console.log(data);

    return new NextResponse(
        JSON.stringify({
            message: "Data Added",
            data,
        })
    );
}