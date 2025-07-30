import axios from "axios";
import { NextResponse } from "next/server";
export async function GET() {
  try {
    const res = await axios.get(
      `${process.env.SERVERLESS_URL}/${process.env.DOWNLOAD_RESUME_PATH}`
    );
    return NextResponse.json(res?.data, { status: res?.status });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(e?.response?.data, {
      status: e?.response?.status || 500,
    });
  }
}
