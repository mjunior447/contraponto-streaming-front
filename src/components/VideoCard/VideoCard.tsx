import Link from 'next/link';
import { Video } from '@/types/video';

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
                <span className="text-4xl">🎬</span>
                <div className="absolute inset-0 bg-linear-to-t from-brand-bg/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3">
                    <span className="text-xs text-white font-semibold tracking-wide bg-brand-surface/90 px-2 py-1 rounded backdrop-blur-sm border border-slate-700/50">
                        REPRODUZIR
                    </span>
                </div>
            </div>

            <div className="p-4">
                <h3 className="font-bold text-base text-slate-100 line-clamp-1 group-hover:text-brand-accent transition-colors">
                    {video.videoTitle}
                </h3>
                <div className="flex items-center space-x-2 mt-1.5">
                    <span className="text-[10px] bg-slate-800 text-slate-400 font-extrabold px-1.5 py-0.5 rounded tracking-wide uppercase">
                        HLS Adaptive
                    </span>
                    <span className="text-xs text-brand-muted">
                        {new Date(video.createdAt).toLocaleDateString('pt-BR')}
                    </span>
                </div>
            </div>
        </Link>
    );
}