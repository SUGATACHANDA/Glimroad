"use client"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import { useTRPC } from "@/trpc/client"
import { useQuery } from "@tanstack/react-query"
import Link from "next/link"

interface NavbarItems {
    href: string
    children: React.ReactNode
}

interface Props {
    items: NavbarItems[]
    open: boolean
    onOpenChangeAction: (open: boolean) => void
}

export const NavbarSidebar = ({ items, onOpenChangeAction, open }: Props) => {
    const trpc = useTRPC()
    const session = useQuery(trpc.auth.session.queryOptions())
    return (
        <Sheet open={open} onOpenChange={onOpenChangeAction}>
            <SheetContent
                side="left"
                className="p-0 transition-none"
            >
                <SheetHeader className="p-4 border-b">

                    <SheetTitle>
                        Menu
                    </SheetTitle>

                </SheetHeader>
                <ScrollArea className="flex flex-col overflow-y-auto h-full pb-2">
                    {items.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            onClick={() => onOpenChangeAction(false)}
                        >
                            {item.children}
                        </Link>
                    ))}
                    {session.data?.user ? (
                        <div className="border-t">
                            <Link
                                href="/admin"
                                className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                                onClick={() => onOpenChangeAction(false)}
                            >
                                Dashboard
                            </Link>
                        </div>
                    ) : (<div className="border-t">
                        <Link
                            href="/sign-in"
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            onClick={() => onOpenChangeAction(false)}
                        >
                            Login
                        </Link>
                        <Link
                            href="/sign-up"
                            className="w-full text-left p-4 hover:bg-black hover:text-white flex items-center text-base font-medium"
                            onClick={() => onOpenChangeAction(false)}
                        >
                            Start selling
                        </Link>
                    </div>)}
                </ScrollArea>
            </SheetContent>
        </Sheet>
    )
}