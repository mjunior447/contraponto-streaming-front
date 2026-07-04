import Link from 'next/link';
import { Logo } from '../Logo';

export function Navbar() {
    return (
        <header className="w-full bg-brand-bg/80 backdrop-blur-md border-b border-slate-800/60 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between w-full">
                <Logo />

                <nav className="flex items-center space-x-6 text-sm font-medium text-slate-300">
                    <Link href="/" className="hover:text-white transition-colors focus-ring rounded px-2 py-1">
                        Início
                    </Link>
                    <span className="text-xs bg-slate-800 text-brand-muted font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                        v1.0 BETA
                    </span>
                </nav>
            </div>
        </header>
    );
}