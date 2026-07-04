export default function LoadingWatchPage() {
    return (
        <div className="max-w-7xl mx-auto px-6 py-10 w-full">
            <div className="mb-6 text-sm text-brand-muted animate-pulse">
                Carregando player de transmissão...
            </div>

            <div className="w-full aspect-video bg-brand-surface border border-slate-800 rounded-xl animate-pulse" />

            <div className="h-7 bg-brand-surface border border-slate-800/50 rounded w-1/2 mt-8 animate-pulse" />
            <div className="h-4 bg-brand-surface border border-slate-800/50 rounded w-1/4 mt-3 animate-pulse" />
        </div>
    );
}