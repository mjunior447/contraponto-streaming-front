import { fetchReadyVideos } from '@/services/api';
import Link from 'next/link';

export default async function HomePage() {
  const videos = await fetchReadyVideos();

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Catálogo de Vídeos</h1>

      {videos.length === 0 ? (
        <p>Nenhum vídeo disponível no momento.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '1.5rem',
          marginTop: '2rem'
        }}>
          {videos.map((video) => (
            <Link
              href={`/watch/${video.videoId}`}
              key={video.videoId}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                border: '1px solid #ccc',
                borderRadius: '8px',
                overflow: 'hidden',
                display: 'block'
              }}
            >
              <div style={{
                aspectRatio: '16/9',
                backgroundColor: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                Player Placeholder
              </div>
              <div style={{ padding: '1rem' }}>
                <h3 style={{ margin: 0 }}>{video.videoTitle}</h3>
                <small style={{ color: '#666' }}>
                  Disponível em streaming
                </small>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}