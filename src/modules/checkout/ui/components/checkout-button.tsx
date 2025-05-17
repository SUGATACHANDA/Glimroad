import { Button } from "@/components/ui/button"
import { useCart } from "../../hooks/use-cart"
import { cn, generateTenantURL } from "@/lib/utils"
import Link from "next/link"
import { ShoppingCart } from "lucide-react"

interface Props {
    className?: string
    hideEmpty?: boolean
    tenantSlug: string
}

export const CheckoutButton = ({ className, hideEmpty, tenantSlug }: Props) => {
    const { totalItems } = useCart(tenantSlug)

    if (hideEmpty && totalItems === 0) return null


    return (
        <Button
            variant="elevated"
            asChild
            className={cn("bg-white", className)}
        >
            <Link href={`${generateTenantURL(tenantSlug)}/checkout`}>
                <ShoppingCart /> {totalItems > 0 ? totalItems : ""}
            </Link>
        </Button>
    )
}