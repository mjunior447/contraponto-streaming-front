import { Video } from '@/types/video';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '../Badge';

interface VideoCardProps {
    video: Video;
}

export function VideoCard({ video }: VideoCardProps) {
    return (
        <Link
            href={`/watch/${video.videoId}`}
            className="group block bg-brand-surface border border-slate-800/40 rounded-lg overflow-hidden transition-all duration-300 hover:border-brand-accent/50 hover:scale-102 focus-ring"
        >
            <div className="aspect-video bg-slate-950 flex items-center justify-center text-slate-600 relative group-hover:text-brand-accent transition-colors">
                {video.thumbnailUrl ? (
                    <Image
                        src={video.thumbnailUrl}
                        alt={`Miniatura do vídeo ${video.videoTitle}`}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                        priority={false}
                    />
                ) : (
                    <span className="text-4xl opacity-40 group-hover:text-brand-accent transition-colors">🎬</span>
                )}

                <div className="absolute inset-0 bg-linear-to-t from-brand-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-xs text-white font-semibold tracking-wide bg-brand-surface/90 px-2 py-1 rounded backdrop-blur-sm border border-slate-700/50">
                        REPRODUZIR
                    </span>
                </div>
            </div>

            <div className="p-4">
                <h3 className="font-bold text-base text-slate-200 line-clamp-1 group-hover:text-white transition-colors tracking-tight">
                    {video.videoTitle}
                </h3>
                <div className="flex items-center space-x-2 mt-1.5">
                    <Badge text="HLS Adaptive" variant="tech" />
                    <span className="text-xs text-brand-muted">
                        {new Date(video.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                </div>
            </div>
        </Link>
    );
}