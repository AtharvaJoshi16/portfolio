import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { accessKey } = body ?? {};
    const res = await axios.post(
      `${process.env.SERVERLESS_URL}/${process.env.VERIFY_ACCESS_KEY_PATH}`,
      {
        accessKey,
      }
    );
    return NextResponse.json(res?.data, { status: res?.status });
  } catch (e: any) {
    console.log(e);
    return NextResponse.json(e?.response?.data, {
      status: e?.response?.status || 500,
    });
  }
}
