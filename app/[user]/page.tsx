"use client";

import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/components/ui/tabs"
import { useParams } from "next/navigation";

import BallPage from "@/components/ball/_main";
import DataPage from "@/components/data/_main";
import HistoryPage from "@/components/history/_main";

export default function UserPage() {
    const params = useParams();
    const user = typeof params.user === "string" ? params.user : "test-user";

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
            <Tabs defaultValue="ball" className="h-full">
                <div className="h-screen flex items-center justify-center p-4 pb-20">
                    <div className="w-full max-w-md flex justify-center">
                        <TabsContent value="ball" className="mt-0">
                            <BallPage user={user} />
                        </TabsContent>
                        <TabsContent value="data" className="mt-0">
                            <DataPage />
                        </TabsContent>
                        <TabsContent value="hist" className="mt-0">
                            <HistoryPage user={user} />
                        </TabsContent>
                    </div>
                </div>
                <div className="fixed bottom-0 left-0 right-0 p-4 flex justify-center bg-gradient-to-t from-black/20 to-transparent">
                    <TabsList>
                        <TabsTrigger value="ball">매직 8볼</TabsTrigger>
                        <TabsTrigger value="data">나의 정보</TabsTrigger>
                        <TabsTrigger value="hist">사용 기록</TabsTrigger>
                    </TabsList>
                </div>
            </Tabs>
        </div>
    );
}
