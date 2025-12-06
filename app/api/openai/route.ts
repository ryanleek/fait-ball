import { NextRequest, NextResponse } from "next/server";
import { OpenAI } from "openai";

const client = new OpenAI(
    { apiKey: process.env.FB_OPENAI_API_KEY }
);

export async function POST(req: NextRequest) {

    const { instructions, input } = await req.json();

    try {
        const requestOptions: any = {
            model: "gpt-4o-mini",
            instructions,
            input,
        };
        const response = await client.responses.create(requestOptions);

        const text = response.output_text
        return NextResponse.json({ text })
    } catch (error) {
        console.error("OpenAI API Error:", error);
        return NextResponse.json({
            text: "OpenAI API 에서 오류가 발생했습니다.",
            error: true
        });
    }
}