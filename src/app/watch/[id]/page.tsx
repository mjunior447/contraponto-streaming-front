import { fetchVideoById } from '@/services/api';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { VideoPlayer } from '@/components/VideoPlayer';

interface WatchPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function WatchPage({ params }: WatchPageProps) {
    const { id } = await params;
    const video = await fetchVideoById(id);

    if (!video || video.status !== 'READY' || !video.hlsUrl) {
        notFound();
    }

    return (
        <main className="max-w-7xl mx-auto px-6 py-10 w-full">
            <div className="mb-6">
                <Link
                    href="/"
                    className="inline-flex items-center space-x-2 text-sm text-brand-muted hover:text-brand-accent font-medium transition-colors focus-ring rounded py-1 px-2 -ml-2"
                >
                    <span>←</span> <span>Voltar para o Catálogo</span>
                </Link>
            </div>

            <div className="w-full bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl">
                <VideoPlayer src={video.hlsUrl} />
            </div>

            <footer className="mt-8 border-t border-slate-800/60 pt-6">
                <div className="space-y-1">
                    <h1 className="text-xl md:text-3xl font-black text-white tracking-tight">
                        {video.videoTitle}
                    </h1>
                    <p className="text-xs text-brand-muted">
                        ID do Recurso: <code className="text-slate-400 bg-slate-900 px-1.5 py-0.5 rounded border border-slate-800">{video.videoId}</code>
                    </p>
                </div>
            </footer>
        </main>
    );
}