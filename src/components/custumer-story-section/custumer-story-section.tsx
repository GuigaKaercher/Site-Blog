import { Content, PT_Sans_Caption } from "next/font/google"

const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700'
})

const custumerStory = [{
    Content: "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos." ,
    author:{name:'Annette Bones',
            role:'CEO na Anne Corp',
            avatar:''
    }   
}]
export const CustumerStorySection = () => {
    return (
        <section className="container py-8 md:py-10 ">
            <div className="flex flex-col items-center gap-12">
                <h2 className={`${ptSansCaption.className} text-heading-xl text-gray-100 `}>
                    Quem utiliza,aprova!</h2>

                <div className="grid gap-8 md:grid-cols-2">

                </div>
            </div>
        </section>
    )
}