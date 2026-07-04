export function VideoCardSkeleton() {
    return (
        <div className="w-full border border-slate-800/60 rounded-lg overflow-hidden bg-brand-surface flex flex-col h-61">
            <div className="aspect-video w-full bg-slate-900/80 animate-pulse" />

            <div className="p-4 flex-1 flex flex-col justify-center space-y-3">
                <div className="h-4 bg-slate-800 rounded w-5/6 animate-pulse" />
                <div className="h-3 bg-slate-800 rounded w-2/5 animate-pulse" />
            </div>
        </div>
    );
}