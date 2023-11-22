import { NextResponse } from "next/server";
import connectDB from "../../lib/mongodb";
import Contact from "../../models/contact";
import mongoose from "mongoose";

export async function POST(req) {
  const { name, email, phone, message } = await req.json();

  try {
    await connectDB();
    await Contact.create({ name, email, phone, message });

    return NextResponse.json({
      msg: ["Message sent successfully."],
      success: true,
    });
  } catch (error) {
    if (error instanceof mongoose.Error.ValidationError) {
      let errorList = [];
      for (let e in error.errors) {
        if (e === "email" && error.errors[e].kind === "regexp") {
          // Handle specific email validation error
          errorList.push("Invalid email address.");
        } else {
          errorList.push(error.errors[e].message);
        }
      }
      // console.log(errorList);
      return NextResponse.json({ msg: errorList });
    } else {
      return NextResponse.json({ msg: "Unable to send message." });
    }
  }
}
