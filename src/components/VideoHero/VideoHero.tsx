'use client';

import { useState } from 'react';
import Link from 'next/link';
import '@videojs/react/background/skin.css';
import { createPlayer, backgroundFeatures } from '@videojs/react';
import { BackgroundVideoSkin, BackgroundVideo } from '@videojs/react/background';
import { Video } from '@/types/video';
import { Badge } from '../Badge';

const Player = createPlayer({ features: backgroundFeatures });

interface VideoHeroProps {
  video: Video;
}

export function VideoHero({ video }: VideoHeroProps) {
  const [isMuted, setIsMuted] = useState(true);

  if (!video.previewUrl) return null;

  return (
    <section className="relative w-screen left-1/2 -translate-x-1/2 md:w-full md:left-auto md:translate-x-0 h-[60vh] min-h-120 md:h-[80vh] md:min-h-162.5 bg-slate-950 rounded-none md:rounded-2xl overflow-hidden border-b md:border border-slate-800/50 mb-20 md:mb-24 shadow-2xl group/hero">
      <div className="absolute inset-0 w-full h-full opacity-60 md:opacity-50 pointer-events-none select-none z-0">
        <Player.Provider>
          <BackgroundVideoSkin>
            <BackgroundVideo
              src={video.previewUrl}
              playsInline
              poster={video.thumbnailUrl}
              className="w-full h-full object-cover"
              muted={isMuted}
            />
          </BackgroundVideoSkin>
        </Player.Provider>
      </div>

      <div className="absolute inset-0 bg-linear-to-t from-brand-bg via-brand-bg/50 to-transparent z-10" />
      <div className="absolute inset-0 bg-linear-to-r from-brand-bg/95 via-transparent to-transparent z-10" />

      <div className="absolute inset-0 z-20 flex flex-col justify-end p-6 md:p-20 max-w-3xl space-y-5">
        <div className="flex items-center space-x-3">
          <Badge text='Grande destaque' variant='featured' />
        </div>

        <h2 className="text-3xl md:text-6xl font-black text-white tracking-tight leading-none drop-shadow-lg">
          {video.videoTitle}
        </h2>

        <p className="text-slate-300 text-sm md:text-base leading-relaxed font-normal line-clamp-4 drop-shadow max-w-2xl">
          {video.description || "Sem descrição disponível para este arquivo histórico."}
        </p>

        <div className="pt-4">
          <Link
            href={`/watch/${video.videoId}`}
            className="inline-flex items-center space-x-3 bg-white hover:bg-slate-200 text-brand-bg font-bold px-8 py-4 rounded-xl text-sm md:text-base transition-all shadow-xl hover:scale-102 active:scale-98 focus-ring cursor-pointer"
          >
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
            <span>Assistir Agora</span>
          </Link>
        </div>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-20 md:right-20 z-30 flex items-center justify-center">
        <button
          onClick={() => setIsMuted(!isMuted)}
          className="w-12 h-12 rounded-full bg-brand-bg/60 hover:bg-brand-bg/90 border border-slate-700/50 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300 backdrop-blur-md shadow-lg scale-95 group-hover/hero:scale-100 focus-ring cursor-pointer"
          aria-label={isMuted ? "Ativar som do destaque" : "Desativar som do destaque"}
        >
          {isMuted ? (
            <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6L4.5 9H1.5v6h3l4.5 3.75V5.25z" />
            </svg>
          ) : (
            <svg className="w-5 h-5 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z" />
            </svg>
          )}
        </button>
      </div>
    </section>
  );
}