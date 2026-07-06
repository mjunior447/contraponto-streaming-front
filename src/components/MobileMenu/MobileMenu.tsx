'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (path: string) => pathname === path;

    return (
        <div className="md:hidden">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-white focus-ring rounded relative z-50 transition-colors"
                aria-label="Abrir menu de navegação"
                aria-expanded={isOpen}
            >
                <div className="w-6 h-6 relative flex items-center justify-center">
                    <span className={`absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`} />
                    <span className={`absolute w-6 h-0.5 bg-current rounded-full transition-all duration-200 ease-in-out ${isOpen ? 'opacity-0 -translate-x-4' : 'opacity-100'}`} />
                    <span className={`absolute w-6 h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${isOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`} />
                </div>
            </button>

            <div
                className={`absolute top-full left-0 w-full bg-brand-bg/98 backdrop-blur-xl border-b border-slate-800/80 px-6 py-8 flex flex-col space-y-6 z-40 transition-all duration-300 ease-out ${isOpen
                    ? 'opacity-100 translate-y-0 visible'
                    : 'opacity-0 -translate-y-4 pointer-events-none invisible'
                    }`}
            >
                <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className={`font-bold text-xl py-1 transition-colors ${isActive('/') ? 'text-brand-accent' : 'text-white active:text-brand-accent'
                        }`}
                >
                    Início
                </Link>

                <div className="flex flex-col space-y-5 border-t border-slate-800/50 pt-6">
                    <Link
                        href="/palco"
                        onClick={() => setIsOpen(false)}
                        className={`font-semibold text-lg transition-colors py-1 ${isActive('/palco') ? 'text-brand-accent' : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        Palco
                    </Link>

                    <Link
                        href="/retratos"
                        onClick={() => setIsOpen(false)}
                        className={`font-semibold text-lg transition-colors py-1 ${isActive('/retratos') ? 'text-brand-accent' : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        Retratos
                    </Link>

                    <Link
                        href="/memoria-viva"
                        onClick={() => setIsOpen(false)}
                        className={`font-semibold text-lg transition-colors py-1 ${isActive('/memoria-viva') ? 'text-brand-accent' : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        Memória Viva
                    </Link>

                    <Link
                        href="/sobre"
                        onClick={() => setIsOpen(false)}
                        className={`font-semibold text-lg transition-colors py-1 border-t border-slate-800/30 pt-4 ${isActive('/sobre') ? 'text-brand-accent' : 'text-slate-300 hover:text-white'
                            }`}
                    >
                        Sobre
                    </Link>
                </div>
            </div>
        </div>
    );
}