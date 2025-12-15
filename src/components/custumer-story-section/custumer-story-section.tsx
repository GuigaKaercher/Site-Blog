import { PT_Sans_Caption } from "next/font/google"
import Image from "next/image"

const ptSansCaption = PT_Sans_Caption({
    subsets: ['latin'],
    weight: '700'
})

const custumerStory = [{
    content: "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A",
    author: {
        name: 'Annette Bones',
        role: 'CEO na Anne Corp',
        avatar: '/anneteBones.png'
    }
}, {
    content: "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
        name: 'Jacob Jones',
        role: 'CEO na JJ.Org',
        avatar: '/jacobJones.png',
    
    }
}]

export default function CustumerStorySection() {
    return (
        <section className="bg-gray-900 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className={`${ptSansCaption.className} text-4xl text-white text-center mb-12`}>
                    Quem utiliza, aprova!
                </h2>

                <div className="grid gap-8 md:grid-cols-2">
                    {custumerStory.map((story, index) => (
                        <div key={index} className="bg-gray-800 rounded-lg p-8">
                            <p className="text-gray-300 italic mb-8 leading-relaxed">
                                {story.content}
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <div className="w-12 h-12 bg-gray-600 rounded-full overflow-hidden">
                                        {story.author.avatar && (
                                            <Image
                                                src={story.author.avatar}
                                                alt={story.author.name}
                                                width={48}
                                                height={48}
                                            />
                                        )}
                                    </div>
                                </div>
                                <div>
                                    <p className="text-white font-semibold">{story.author.name}</p>
                                    <p className="text-gray-400 text-sm">{story.author.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
