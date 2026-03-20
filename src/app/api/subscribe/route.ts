import { NextRequest, NextResponse } from "next/server";

const GHL_API_KEY = process.env.GHL_API_KEY;
const GHL_LOCATION_ID = process.env.GHL_LOCATION_ID;

export async function POST(req: NextRequest) {
  try {
    const { email, source } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required." },
        { status: 400 }
      );
    }

    if (!GHL_API_KEY || !GHL_LOCATION_ID) {
      console.error("GHL credentials not configured");
      return NextResponse.json(
        { error: "Email service not configured." },
        { status: 500 }
      );
    }

    // Create or update contact in GoHighLevel
    const ghlRes = await fetch(
      "https://services.leadconnectorhq.com/contacts/",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${GHL_API_KEY}`,
          "Content-Type": "application/json",
          Version: "2021-07-28",
        },
        body: JSON.stringify({
          email,
          locationId: GHL_LOCATION_ID,
          source: source || "website",
          tags: [source || "general", "servantzeromusic.com"],
        }),
      }
    );

    if (!ghlRes.ok) {
      const errorData = await ghlRes.text();
      console.error("GHL API error:", ghlRes.status, errorData);
      // If contact already exists, that's fine
      if (ghlRes.status === 422 || ghlRes.status === 409) {
        return NextResponse.json({ success: true, message: "You're already on the list!" });
      }
      return NextResponse.json(
        { error: "Failed to subscribe. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: "You're in! Watch your inbox.",
    });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again." },
      { status: 500 }
    );
  }
}
