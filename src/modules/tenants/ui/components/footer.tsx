import { cn } from "@/lib/utils"
import { Poppins } from "next/font/google"
import Link from "next/link"

const poppins = Poppins({
    subsets: ["latin"],
    weight: ["700"]
})

export const Footer = () => {
    return (
        <footer className="border-t font-medium bg-white">
            <div className="max-w-(--breakpoint-xl) mx-auto flex gap-2 justify-center lg:justify-start items-center h-full p-3 lg:p-5">
                <p >Powered by</p>
                <Link href={process.env.NEXT_PUBLIC_APP_URL!}>
                    <span className={cn("text-2xl font-semibold", poppins.className)}>
                        Glimroad
                    </span>
                </Link>
            </div>
        </footer>
    )
}