"use client"

import { Controller, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod"

export default function Home() {
  const router = useRouter();
  const formSchema = z.object({
    name: z.string()
      .min(1, "이름은 최소 1글자 이상")
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "test-user",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    //db에 사용자 추가
    // const userKey = generateKey();
    // const res_createuser = await createUser(values.name, userKey);

    //chat page로 이동
    router.push('/' + values.name);
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative">
      <div className="h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="p-6">
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-white mb-2">사용할 이름을 입력해주세요</h2>
              </div>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-6">
                  <Controller
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }: any) => (
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-white/80">이름</label>
                        <input
                          {...field}
                          className="w-full px-3 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                          aria-invalid={fieldState.invalid}
                          placeholder="test-user"
                        />
                        {fieldState.invalid && (
                          <div className="text-red-400 text-sm">{fieldState.error?.message}</div>
                        )}
                      </div>
                    )}
                  />
                  <button type="submit" className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200">
                    입력
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
