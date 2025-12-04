import Link from "next/link"
import { Button } from "../ui/button"

import { ActiveLink } from "../active-link"
import { Logo } from "../logo"

export const Header = () => {

    return(
        <header className="fixed top-0 z-50 w-full border-b p-2
        border-white/10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/0">
         <div className="max-auto max-w-7xl px-8 sm:px-6 lg:px-4 text-2xl"></div>

        <div className="flex h-16 items-center justify-between">
        <Logo />

            <nav className="flex items-center gap-6">
                <ActiveLink href={'/'}>Inicio</ActiveLink>
                <ActiveLink href={'/blog'}>Blog</ActiveLink>
                <Button variant="secondary" asChild>
                <Link href ="/comecar">começar</Link> 
                </Button>    
            </nav>
        </div>
        </header>
    )
}