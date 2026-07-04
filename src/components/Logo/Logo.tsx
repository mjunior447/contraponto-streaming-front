import Link from "next/link";

export function Logo() {
    return (
        <Link href="/" className="text-xl font-black tracking-tighter text-white hover:text-brand-accent transition-colors focus-ring rounded px-2 py-1">
            CONTRA<span className="text-brand-accent">PONTO</span>
        </Link>
    );
}