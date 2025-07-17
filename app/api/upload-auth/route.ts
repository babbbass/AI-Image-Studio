//@ts-nocheck
import { getUploadAuthParams } from "@imagekit/next/server"

export async function GET() {
  try {
    const { token, expire, signature } = await getUploadAuthParams({
      privateKey: process.env.NEXT_PUBLIC_IMAGEKIT_PRIVATE_KEY,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    })

    return Response.json({
      token,
      expire,
      signature,
      publicKey: process.env.NEXT_PUBLIC_IMAGEKIT_PUBLIC_KEY,
    })
  } catch (error) {
    console.error("Error generating upload auth params:", error)
    return Response.json(
      { error: "Failed to generate upload auth params" },
      { status: 500 }
    )
  }
}
