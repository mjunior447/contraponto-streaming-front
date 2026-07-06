export default function CategoryLoading() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-10 w-full animate-pulse">
            <header className="mb-10 space-y-3">
                <div className="w-64 h-10 bg-slate-900 rounded-lg" />
                <div className="w-full max-w-xl h-4 bg-slate-900/60 rounded" />
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
                    <div key={item} className="space-y-3">
                        <div className="w-full aspect-video bg-slate-900/50 rounded-xl border border-slate-800/40" />
                        <div className="w-3/4 h-5 bg-slate-900 rounded" />
                        <div className="w-1/2 h-3 bg-slate-900/60 rounded" />
                    </div>
                ))}
            </div>
        </main>
    );
}