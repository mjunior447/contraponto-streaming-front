export default function HomeLoading() {
    return (
        <main className="max-w-7xl mx-auto px-6 py-10 w-full overflow-hidden animate-pulse">
            <div className="w-screen relative left-1/2 -translate-x-1/2 md:w-full md:left-auto md:translate-x-0 h-[60vh] min-h-120 md:h-[80vh] md:min-h-162.5 bg-slate-900/60 rounded-none md:rounded-2xl border border-slate-800/40 mb-20 md:mb-24 flex flex-col justify-end p-6 md:p-20 space-y-4">
                <div className="w-24 h-5 bg-slate-800 rounded" />
                <div className="w-3/4 md:w-1/2 h-10 md:h-14 bg-slate-800 rounded-lg" />
                <div className="space-y-2 max-w-xl">
                    <div className="w-full h-4 bg-slate-800 rounded" />
                    <div className="w-5/6 h-4 bg-slate-800 rounded" />
                </div>
                <div className="w-40 h-12 bg-slate-800 rounded-xl pt-4" />
            </div>

            <div className="space-y-12 mt-8">
                {[1, 2].map((row) => (
                    <div key={row} className="space-y-4">
                        <div className="w-48 h-6 bg-slate-900 rounded" />

                        <div className="flex space-x-4 md:space-x-6 overflow-hidden">
                            {[1, 2, 3, 4].map((card) => (
                                <div
                                    key={card}
                                    className="flex-none w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] aspect-video bg-slate-900/50 rounded-xl border border-slate-800/40"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}