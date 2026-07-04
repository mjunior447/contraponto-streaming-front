import Link from 'next/link';
import { Logo } from '../Logo';
import { MobileMenu } from '../MobileMenu';

export function Navbar() {
    return (
        <header className="w-full bg-brand-bg/80 backdrop-blur-md border-b border-slate-800/60 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full relative">
                <div className="flex items-center shrink-0">
                    <Logo />
                </div>

                <nav className="hidden md:flex flex-1 justify-center items-center space-x-6 text-sm font-medium">
                    <Link href="/" className="text-white hover:text-brand-accent transition-colors focus-ring rounded px-2 py-1">
                        Início
                    </Link>

                    <span
                        role="link"
                        aria-disabled="true"
                        className="text-slate-600 cursor-not-allowed select-none px-2 py-1 relative group"
                    >
                        Palco
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] bg-slate-900 border border-slate-800 text-slate-500 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none uppercase whitespace-nowrap tracking-wider font-bold">
                            Em breve
                        </span>
                    </span>

                    <span
                        role="link"
                        aria-disabled="true"
                        className="text-slate-600 cursor-not-allowed select-none px-2 py-1 relative group"
                    >
                        Retratos
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] bg-slate-900 border border-slate-800 text-slate-500 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none uppercase whitespace-nowrap tracking-wider font-bold">
                            Em breve
                        </span>
                    </span>

                    <span
                        role="link"
                        aria-disabled="true"
                        className="text-slate-600 cursor-not-allowed select-none px-2 py-1 relative group"
                    >
                        Memória Viva
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-[8px] bg-slate-900 border border-slate-800 text-slate-500 px-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none uppercase whitespace-nowrap tracking-wider font-bold">
                            Em breve
                        </span>
                    </span>
                </nav>

                <div className="flex items-center shrink-0">
                    <span className="hidden md:inline-block text-[10px] bg-slate-800 text-brand-muted font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                        Acervo Nacional
                    </span>

                    <MobileMenu />
                </div>

            </div>
        </header>
    );
}