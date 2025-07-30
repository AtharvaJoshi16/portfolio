import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const res = await axios.post(
      `${process.env.SERVERLESS_URL}/${process.env.UPLOAD_RESUME_PATH}`,
      formData
    );
    return new NextResponse(null, { status: 204 });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(e?.response?.data, {
      status: e?.response?.status || 500,
    });
  }
}
