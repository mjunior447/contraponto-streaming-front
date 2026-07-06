import { VideoCard } from '@/components/VideoCard';
import { fetchReadyVideos } from '@/services/api';

export default async function RetratosPage() {
    const allVideos = await fetchReadyVideos();
    const videos = allVideos.filter(v => v.category === 'retratos');

    return (
        <main className="max-w-7xl mx-auto px-6 py-10 w-full">
            <header className="mb-10">
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight mb-2">
                    Retratos Históricos
                </h1>
                <p className="text-brand-muted text-sm md:text-base max-w-2xl">
                    Uma imersão em perfis, trajetórias documentadas e acervos visuais que capturam a essência de épocas e personagens marcantes.
                </p>
            </header>

            {videos.length === 0 ? (
                <div className="w-full bg-brand-surface border border-slate-800/80 rounded-xl p-12 text-center">
                    <p className="text-brand-muted">Nenhum vídeo disponível nesta categoria no momento.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {videos.map((video) => (
                        <VideoCard key={video.videoId} video={video} />
                    ))}
                </div>
            )}
        </main>
    );
}