import { VideoCarousel } from '@/components/VideoCarousel';
import { VideoHero } from '@/components/VideoHero';
import { fetchReadyVideos } from '@/services/api';
import { Video } from '@/types/video';

const CATEGORY_LABELS: Record<string, string> = {
  'palco': 'Palco e Espetáculos',
  'retratos': 'Retratos Históricos',
  'memoria-viva': 'Memória Viva',
};

export default async function HomePage() {
  const videos = await fetchReadyVideos();

  if (videos.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-6 py-10 w-full">
        <div className="w-full bg-brand-surface border border-slate-800/80 rounded-xl p-12 text-center">
          <p className="text-brand-muted">Nenhum vídeo disponível no catálogo no momento.</p>
        </div>
      </main>
    );
  }

  const featuredVideo = videos.find(video => video.videoId === '3141ca4b-72a3-4d77-a336-e59bf096cb67');

  const videosGroupedByCategory = videos.reduce((acc, video) => {
    const category = video.category || 'outros';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(video);
    return acc;
  }, {} as Record<string, Video[]>);

  const categories = Object.keys(videosGroupedByCategory);

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 w-full overflow-hidden">
      {featuredVideo && <VideoHero video={featuredVideo} />}

      <div className="space-y-4 mt-8">
        {categories.map((categoryKey) => {
          const carouselTitle = CATEGORY_LABELS[categoryKey] || 'Outros Acervos';
          const carouselVideos = videosGroupedByCategory[categoryKey];

          return (
            <VideoCarousel 
              key={categoryKey} 
              title={carouselTitle} 
              videos={carouselVideos} 
            />
          );
        })}
      </div>

    </main>
  );
}