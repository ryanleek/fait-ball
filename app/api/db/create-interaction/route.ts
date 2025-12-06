import connectMongoDB from '@/lib/mongodb/mongodb';
import Interaction from '@/models/interaction';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {

    try {
        //db 연결
        await connectMongoDB();

        //메세지 추가
        const { question, response, type, self_id, user_id } = await request.json();
        await Interaction.create({ question, response, type, self_id, user_id });

        return NextResponse.json({ message: "Interaction Sent" });
    } catch (error) {
        return NextResponse.json({ error: "Failed to send interaction" }, { status: 500 });
    }

}