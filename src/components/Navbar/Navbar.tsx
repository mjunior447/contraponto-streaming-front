'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from '../Logo';
import { MobileMenu } from '../MobileMenu';
import { Badge } from '../Badge';

export function Navbar() {
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <header className="w-full bg-brand-bg/80 backdrop-blur-md border-b border-slate-800/60 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full relative">
                <div className="flex items-center shrink-0">
                    <Logo />
                </div>

                <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
                    <Link
                        href="/"
                        className={`transition-colors focus-ring rounded px-2 py-1 ${isActive('/')
                            ? 'text-brand-accent font-bold'
                            : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        Início
                    </Link>

                    <Link
                        href="/palco"
                        className={`transition-colors focus-ring rounded px-2 py-1 ${isActive('/palco')
                            ? 'text-brand-accent font-bold'
                            : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        Palco
                    </Link>

                    <Link
                        href="/retratos"
                        className={`transition-colors focus-ring rounded px-2 py-1 ${isActive('/retratos')
                            ? 'text-brand-accent font-bold'
                            : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        Retratos
                    </Link>

                    <Link
                        href="/memoria-viva"
                        className={`transition-colors focus-ring rounded px-2 py-1 ${isActive('/memoria-viva')
                            ? 'text-brand-accent font-bold'
                            : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        Memória Viva
                    </Link>

                    <Link
                        href="/sobre"
                        className={`transition-colors focus-ring rounded px-2 py-1 border-l border-slate-800 pl-4 ml-2 ${isActive('/sobre')
                            ? 'text-brand-accent font-bold'
                            : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        Sobre
                    </Link>
                </nav>

                <div className="flex items-center shrink-0 space-x-4">
                    <Badge text="Acervo nacional" variant="brand" />
                    <MobileMenu />
                </div>

            </div>
        </header>
    );
}