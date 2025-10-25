import { ISecret } from "@/app/models/Secret";
import connectDB from "@/app/lib/db";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { nanoid } from "nanoid";
export async function GET(req: NextRequest) {
  try {
    await connectDB();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const sort = searchParams.get("sort") || "recent";

    const skip = (page - 1) * limit;
    let sortQuery = {};

    switch (sort) {
      case "trending":
        sortQuery = { likes: -1, views: -1 };
        break;
      case "popular":
        sortQuery = { views: -1 };
        break;
      default:
        sortQuery = { createdAt: -1 };
    }

    const secrets = await ISecret.find({ isActive: true })
      .sort(sortQuery)
      .skip(skip)
      .limit(limit)
      .lean();

    const total = await ISecret.countDocuments({ isActive: true });

    return NextResponse.json({
      success: true,
      data: secrets,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    });
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const session = await getServerSession(authOptions);
    let anonymousId = session?.user?.id || nanoid(16);

    const body = await req.json();
    const { content, category } = body;

    // Validation
    if (!content || content.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Content is required" },
        { status: 400 }
      );
    }

    if (content.length > 5000) {
      return NextResponse.json(
        { success: false, error: "Content too long (max 500 characters)" },
        { status: 400 }
      );
    }
    // Rate limiting: Check recent posts from this anonymous ID
    const recentPosts = await ISecret.countDocuments({
      anonymousId,
      createdAt: { $gte: new Date(Date.now() - 60 * 60 * 1000) }, // Last hour
    });

    if (recentPosts >= 5) {
      return NextResponse.json(
        {
          success: false,
          error: "Rate limit exceeded. Please wait before posting again.",
        },
        { status: 429 }
      );
    }

    const secret = new ISecret({
      userId: anonymousId,
      content: content.trim(),
      category: category.trim() || "other",
    });

    await secret.save();

    const { userId: _, ...secretData } = secret.toObject();

    return NextResponse.json(
      { success: true, data: secretData },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
