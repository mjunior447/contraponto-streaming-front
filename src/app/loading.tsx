import { VideoCardSkeleton } from "@/components/VideoCardSkeleton";

export default function LoadingCatalog() {
    const skeletonItems = Array.from({ length: 8 });

    return (
        <div className="max-w-7xl mx-auto px-6 py-10 w-full">
            <header className="mb-8">
                <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
                    Explorar catálogo
                </h1>
                <div className="h-4 bg-brand-surface border border-slate-800/50 rounded w-1/4 mt-2 animate-pulse" />
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {skeletonItems.map((_, index) => (
                    <VideoCardSkeleton key={index} />
                ))}
            </div>
        </div>
    );
}