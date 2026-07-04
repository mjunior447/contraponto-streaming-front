import { fetchVideoById } from '@/services/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { VideoPlayer } from '@/components/videoPlayer';

interface WatchPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function WatchPage({ params }: WatchPageProps) {
    const { id } = await params;
    const video = await fetchVideoById(id);

    if (!video || video.status !== 'READY' || !video.hlsUrl) {
        console.log('seu video: ', video);
        notFound();
    }

    return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif', maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1rem' }}>
                <Link href="/">⬅️ Voltar para o Catálogo</Link>
            </div>

            <div style={{ width: '100%', margin: '0 auto', backgroundColor: '#000', borderRadius: '8px', overflow: 'hidden' }}>
                <VideoPlayer src={video.hlsUrl} />
            </div>

            <h1 style={{ marginTop: '1.5rem', marginBottom: '0.5rem' }}>{video.videoTitle}</h1>
            <p style={{ color: '#555', margin: 0 }}>ID do Conteúdo: {video.videoId}</p>
        </div>
    );
}