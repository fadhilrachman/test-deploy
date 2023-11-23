import { NextResponse } from "next/server";
import { fetcherPOST } from "../../../../lib/fethcer";
import { serialize } from "cookie";

export async function POST(request) {
  const body = await request.json(); //harus di jsonkan agar terbaca
  console.log(body);
  console.log(process.env.API_URL);

  // let response = await fetcherPOST("/auth/login", body);

  // if (!response.data) {
  //   return NextResponse.json({ response }, { status: 401 });
  // }

  // const cookieData = response.data;

  const dummyData = {
    token: "initoken123",
    data: body,
  };
  let serialized = serialize(
    process.env.COOKIE_NAME,
    JSON.stringify(dummyData),
    {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "production",
      sameSite: "strict",
      maxAge: 60 * 1000, //one minute
      path: "/",
    }
  );

  const dataResponse = { message: "authenticated" };
  return new Response(JSON.stringify(dataResponse), {
    status: 200,
    headers: { "Set-Cookie": serialized },
  });
}
