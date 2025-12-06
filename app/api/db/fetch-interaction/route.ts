import connectMongoDB from '@/lib/mongodb/mongodb';
import Interaction from '@/models/interaction';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {

    try {
        //db 연결
        await connectMongoDB();

        const { user_id } = await req.json();

        //메세지 전체 불러오기
        const interactions = await Interaction.find({ user_id })

        return NextResponse.json({ interactions });
    } catch (error) {
        return NextResponse.json({ error: "Failed to connect to MongoDB" }, { status: 500 });
    }

}