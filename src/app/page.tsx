import { VideoCard } from '@/components/VideoCard';
import { VideoHero } from '@/components/VideoHero';
import { fetchReadyVideos } from '@/services/api';

export default async function HomePage() {
  const videos = await fetchReadyVideos();
  const featuredVideo = videos[0];
  const catalogVideos = videos.slice(1);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 w-full">
      {featuredVideo && <VideoHero video={featuredVideo} />}
      <header className="mb-8">
        <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
          Explorar catálogo
        </h1>
        <p className="text-sm text-brand-muted mt-1">
          Assista às transmissões otimizadas via protocolo adaptativo HLS.
        </p>
      </header>

      {videos.length === 0 ? (
        <div className="w-full bg-brand-surface border border-slate-800/80 rounded-xl p-12 text-center">
          <p className="text-brand-muted">Nenhum vídeo disponível no catálogo.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {(catalogVideos.length > 0 ? catalogVideos : videos).map((video) => (
            <VideoCard key={video.videoId} video={video} />
          ))}
        </div>
      )}
    </main>
  );
}