import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const headers = new Headers(request.headers);
    let forwardedHeaders: Record<string, any> = {};
    headers.forEach((value, key) => {
      forwardedHeaders[key] = value;
    });
    await axios.post(
      `${process.env.NEXT_PUBLIC_SERVERLESS_URL}/${process.env.NEXT_PUBLIC_UPLOAD_RESUME_PATH}`,
      formData,
      {
        headers: {
          "X-Access-Key": forwardedHeaders["x-access-key"],
        },
      }
    );
    return new NextResponse(null, { status: 204 });
  } catch (e: any) {
    console.log(e);
    return new NextResponse(e?.response?.data, {
      status: e?.response?.status || 500,
    });
  }
}
