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

            <div className="w-full aspect-video bg-slate-950 rounded-xl overflow-hidden border border-slate-800 shadow-2xl relative">
                <VideoPlayer src={video.hlsUrl} />
            </div>

            <footer className="mt-8 border-t border-slate-800/60 pt-6">
                <div className="max-w-3xl space-y-4">
                    <div className="space-y-1">
                        <h1 className="text-xl md:text-3xl font-black text-slate-100 tracking-tight">
                            {video.videoTitle}
                        </h1>
                    </div>

                    <div className="pt-2">
                        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal">
                            {video.description}
                        </p>
                    </div>

                    <div className="text-xs text-brand-muted pt-2">
                        Publicado em {new Date(video.createdAt).toLocaleDateString('pt-BR', {
                            day: 'numeric',
                            month: 'long',
                            year: 'numeric'
                        })}
                    </div>
                </div>
            </footer>
        </main>
    );
}