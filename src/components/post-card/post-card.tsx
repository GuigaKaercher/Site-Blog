import Image from "next/image"
import Link from "next/link"
import { Post } from ".contentlayer/generated"

interface PostCardProps {
    post: Post
}

export const PostCard = ({ post }: PostCardProps) => {
    const formattedDate = new Date(post.date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    })

    return (
        <Link href={`/blog/${post.slug}`}>
            <article className="bg-gray-800 rounded-lg overflow-hidden hover:ring-2 hover:ring-blue-300 transition-all duration-200 group h-full flex flex-col">
                {/* Imagem */}
                <div className="relative h-48 w-full overflow-hidden">
                    <Image
                        src={post.Image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                    />
                    {/* Data sobreposta */}
                    <div className="absolute top-4 right-4 bg-gray-900/80 backdrop-blur-sm px-3 py-1 rounded text-gray-300 text-body-sm">
                        {formattedDate}
                    </div>
                </div>

                {/* Conteúdo */}
                <div className="p-6 flex flex-col flex-grow">
                    {/* Título */}
                    <h3 className="text-heading-sm text-gray-100 mb-3 group-hover:text-blue-300 transition-colors duration-200">
                        {post.title}
                    </h3>

                    {/* Descrição */}
                    <p className="text-body-base text-gray-300 mb-6 flex-grow line-clamp-3">
                        {post.description}
                    </p>

                    {/* Autor */}
                    <div className="flex items-center gap-3 mt-auto">
                        <div className="relative h-8 w-8 rounded-full overflow-hidden">
                            <Image
                                src={post.authorAvatar}
                                alt={post.authorName}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <span className="text-body-sm text-gray-300">
                            {post.authorName}
                        </span>
                    </div>
                </div>
            </article>
        </Link>
    )
}
