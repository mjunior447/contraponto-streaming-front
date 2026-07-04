export function Footer() {
    return (
        <footer className="w-full bg-brand-bg border-t border-slate-800/40 mt-auto">
            <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-brand-muted w-full">

                <div>
                    <p>© {new Date().getFullYear()} ContraPonto Streaming. Todos os direitos reservados.</p>
                </div>

                <div className="flex items-center">
                    <span>
                        Feito com <span className="text-red-500 animate-pulse">❤️</span> por{' '}
                        <a
                            href="https://www.linkedin.com/in/mauricio-antero"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-brand-accent font-semibold transition-colors focus-ring rounded px-1.5 py-0.5 inline-block"
                        >
                            Mauricio Antero
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}