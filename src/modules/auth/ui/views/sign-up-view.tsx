"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Poppins } from "next/font/google"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { registerSchema } from "../../schemas"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useTRPC } from "@/trpc/client"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import { useRouter } from "next/navigation"
import { Loader2 } from "lucide-react"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"]
})


export const SignUpView = () => {

    const trpc = useTRPC()
    const router = useRouter()
    const queryClient = useQueryClient()
    const register = useMutation(trpc.auth.register.mutationOptions({
        onError: (err) => {
            toast.error(err.message)
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries(trpc.auth.session.queryFilter())
            router.push("/")
        }
    }))

    const form = useForm<z.infer<typeof registerSchema>>({
        mode: "all",
        resolver: zodResolver(registerSchema),
        defaultValues: {
            email: "",
            password: "",
            username: ""
        }
    })

    const onSubmit = (values: z.infer<typeof registerSchema>) => {
        register.mutate(values)
    }

    const username = form.watch("username")
    const usernameErrors = form.formState.errors.username

    const showPreview = username && !usernameErrors

    return (
        <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="bg-[#F4F4F0] h-screen w-full lg:col-span-3 overflow-y-auto">
                <Form {...form}>
                    <form
                        onSubmit={form.handleSubmit(onSubmit)}
                        className="flex flex-col gap-8 p-4 lg:p-16"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <Link href="/">
                                <span className={cn("text-2xl font-semibold", poppins.className)}>
                                    Glimroad
                                </span>
                            </Link>
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="text-base border-none underline"
                            >
                                <Link prefetch href="/sign-in">
                                    Sign In
                                </Link>
                            </Button>
                        </div>
                        <h1 className="text-4xl font-medium">
                            Join over 210,870 creators who have earned over $1,081,144,150 on Glimroad selling digital products and memberships.
                        </h1>
                        <FormField
                            name="username"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base">Username</FormLabel>
                                    <FormControl>
                                        <Input {...field} />
                                    </FormControl>
                                    <FormDescription
                                        className={cn("hidden", showPreview && "block")}
                                    >
                                        Your store will be available at&nbsp;
                                        <strong>{username}</strong>.glimroad.com
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base">Email</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="email" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-base">Password</FormLabel>
                                    <FormControl>
                                        <Input {...field} type="password" required />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button
                            disabled={register.isPending}
                            type="submit"
                            size="lg"
                            variant="elevated"
                            className="bg-black text-white hover:bg-pink-400 hover:text-primary"
                        >
                            {register.isPending ?
                                <>
                                    <div className="flex items-center gap-2">
                                        <Loader2 className="animate-spin" size={16} />
                                        Registering please wait...
                                    </div>
                                </> : "Create Account"}
                        </Button>
                        <p className="font-semibold">You agree to our <Link href="#" className="underline">Terms of Use</Link> and <Link className="underline" href="#">Privacy Policy</Link> .</p>
                    </form>

                </Form>
            </div>
            <div
                className="h-screen w-full lg:col-span-2 hidden lg:block"
                style={{
                    backgroundImage: "url('/auth_background.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            />
        </div>
    )
}