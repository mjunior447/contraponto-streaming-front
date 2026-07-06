export default function SobreLoading() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 w-full animate-pulse space-y-12">
            <header className="space-y-4 text-center md:text-left mb-12">
                <div className="w-28 h-6 bg-slate-900 rounded-full mx-auto md:mx-0" />
                <div className="w-72 h-12 bg-slate-900 rounded-lg mx-auto md:mx-0" />
                <div className="w-full max-w-xl h-4 bg-slate-900/60 rounded mx-auto md:mx-0" />
            </header>

            {[1, 2, 3].map((section) => (
                <div key={section} className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-900 pt-8">
                    <div className="w-32 h-6 bg-slate-900 rounded" />
                    <div className="md:col-span-2 space-y-3">
                        <div className="w-full h-4 bg-slate-900/60 rounded" />
                        <div className="w-full h-4 bg-slate-900/60 rounded" />
                        <div className="w-4/5 h-4 bg-slate-900/60 rounded" />
                    </div>
                </div>
            ))}
        </main>
    );
}