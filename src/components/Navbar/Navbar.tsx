import Link from 'next/link';
import { Logo } from '../Logo';
import { MobileMenu } from '../MobileMenu';
import { Badge } from '../Badge';

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

                    <Link href="/palco" className="text-slate-300 hover:text-white transition-colors focus-ring rounded px-2 py-1">
                        Palco
                    </Link>

                    <Link href="/retratos" className="text-slate-300 hover:text-white transition-colors focus-ring rounded px-2 py-1">
                        Retratos
                    </Link>

                    <Link href="/memoria-viva" className="text-slate-300 hover:text-white transition-colors focus-ring rounded px-2 py-1">
                        Memória Viva
                    </Link>

                    <Link href="/sobre" className="text-slate-300 hover:text-white transition-colors focus-ring rounded px-2 py-1 border-l border-slate-800 pl-4 ml-2">
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