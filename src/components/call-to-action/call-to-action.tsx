import { ArrowRight, ShoppingBag } from "lucide-react"
import { Button } from "../ui/button"
import Link from "next/link"
import { PT_Sans_Caption } from "next/font/google"

const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700'
})

export const CallToAction = () => {
    return (
        <section className="py-24">
            <div className="container flex flex-col items-center gap-8 text-center">
                <div className="w-16 h-16 rounded-full bg-cyan-300/20 flex items-center justify-center">
                    <ShoppingBag className="w-8 h-8 text-cyan-100" />
                </div>

                <h2 className={`${ptSansCaption.className} text-gray-100 text-balance text-heading-xl max-w-2xl`}>
                    Crie uma loja online e inicie suas vendas ainda hoje
                </h2>

                <Button variant="primary" asChild>
                    <Link href="/criar-loja">
                        Criar loja grátis
                        <ArrowRight className="ml-2" />
                    </Link>
                </Button>
            </div>
        </section>
    )
}
