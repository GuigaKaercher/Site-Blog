import Link from "next/link"
import { Button } from "../ui/button"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export const FeatureSection = () => {
    return (
        <section className="container grid gap-6 md:grid-col-2 pb-8 pt-8 md:py-10">
            <div className="flex flex-col gap-2 p-6 rounded-lg bg-gray-500 md:p-12">

                <span className="text-body-tag text-blue-200 bg-blue-400 px-2 
            py-1 w-fit rounded-sm uppercase">
                    Simples
                </span>
                <h2 className="text-gray-100 text-heading-lg">
                    Crie um catálogo de produtos online em poucos minutos</h2>
            </div>

             <div className="flex flex-col gap-2 p-6 rounded-lg bg-gray-500 md:p-12">

                <span className="text-body-tag text-blue-200 bg-blue-400 px-2 
            py-1 w-fit rounded-sm uppercase">
                    prático
                </span>
                <h2 className="text-gray-100 text-heading-lg">
                 Venda para seu público através de uma plataforma única</h2>
            </div>


        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 rounded-lg
         bg-gray-500 p-6 md:p-12">

            <div className="flex flex-col gap-4  md:gap-0">

                <span className="text-body-tag text-blue-200 bg-blue-400 px-2 
            py-1 w-fit rounded-sm uppercase">
                    personalizável
                </span>
                <h2 className="text-gray-100 text-heading-lg">
                 Tenha uma loja online personalizada com a cara da sua marca</h2>

                 <Button asChild className="rounded-full mt-4 md:mt-auto md:flex">
                    <Link href='./criar loja'>
                    Criar loja gratis
                    <ArrowRight/>
                    </Link>
                 </Button>
            </div>
            
            <div>
                <Image src='/feature-section.svg' 
                alt="feature img"
                width={440}
                height={330}/>
            </div>
        </div>

        
        </section>

        
    )
}