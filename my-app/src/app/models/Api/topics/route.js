import connectMongoDB from "@/app/LIBS/DB";
import Topic from "../../Topic";
import { NextResponse } from "next/server";

// Post method
export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();

  await Topic.create({ title, description });

  return NextResponse.json({ Message: "Topic Created" }, { status: 201 });
}

// Get method
export async function GET() {
  await connectMongoDB();

  const topics = await Topic.find();

  return NextResponse.json(topics);
}

// Update method
export async function PUT(request) {
  const { id, title, description } = await request.json();
  await connectMongoDB();

  const updatedTopic = await Topic.findByIdAndUpdate(
    id,
    { title, description },
    { new: true } // Return the updated document
  );

  if (!updatedTopic) {
    return NextResponse.json({ Error: "Topic not found" }, { status: 404 });
  }

  return NextResponse.json({ Message: "Topic Updated", updatedTopic });
}

// Delete method
export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Topic.findByIdAndDelete(id);
  return NextResponse.json({ MSG: "Done" });
}


