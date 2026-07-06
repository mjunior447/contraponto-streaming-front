'use client';

import { useRef, useState, useEffect } from 'react';
import { Video } from '@/types/video';
import { VideoCard } from '../VideoCard';

interface VideoCarouselProps {
    title: string;
    videos: Video[];
}

export function VideoCarousel({ title, videos }: VideoCarouselProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [isAtStart, setIsAtStart] = useState(true);
    const [isAtEnd, setIsAtEnd] = useState(false);

    if (videos.length === 0) return null;

    const checkScrollPosition = () => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const { scrollLeft, clientWidth, scrollWidth } = container;
        setIsAtStart(scrollLeft <= 0);
        setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 1.5);
    };

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        checkScrollPosition();
        window.addEventListener('resize', checkScrollPosition);
        return () => window.removeEventListener('resize', checkScrollPosition);
    }, [videos]);

    const handleScroll = (direction: 'left' | 'right') => {
        const container = scrollContainerRef.current;
        if (!container) return;

        const scrollAmount = container.clientWidth * 0.75;
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount : scrollAmount,
            behavior: 'smooth',
        });
    };

    return (
        <section className="mb-12 w-full relative group/carousel">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg md:text-xl font-black tracking-tight text-white pl-0 select-none">
                    {title}
                </h3>

                <div className="hidden md:flex items-center space-x-2 pr-1">
                    <button
                        onClick={() => handleScroll('left')}
                        disabled={isAtStart}
                        className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:hover:bg-slate-900 disabled:hover:text-slate-400 focus-ring cursor-pointer"
                        aria-label="Rolar para a esquerda"
                    >
                        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                        </svg>
                    </button>

                    <button
                        onClick={() => handleScroll('right')}
                        disabled={isAtEnd}
                        className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-all disabled:opacity-30 disabled:hover:bg-slate-900 disabled:hover:text-slate-400 focus-ring cursor-pointer"
                        aria-label="Rolar para a direita"
                    >
                        <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2.5" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </div>
            </div>

            <div className="relative w-full">

                <div className="absolute top-0 left-0 bottom-0 w-8 md:w-16 bg-linear-to-r from-brand-bg to-transparent z-20 pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300" />
                <div
                    ref={scrollContainerRef}
                    onScroll={checkScrollPosition}
                    className="flex space-x-4 md:space-x-6 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory relative z-10 scroll-pl-0 cursor-default scroll-smooth"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {videos.map((video, index) => (
                        <div
                            key={video.videoId}
                            className={`flex-none w-[75vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] snap-start transition-all duration-300 hover:opacity-100 focus-within:opacity-100 ${index === 0 ? 'opacity-100' : 'opacity-60 group-hover/carousel:opacity-60'
                                }`}
                        >
                            <VideoCard video={video} />
                        </div>
                    ))}

                    <div className="flex-none w-[25vw] sm:w-[55vw] md:w-[20vw] lg:w-[15vw] pointer-events-none select-none" aria-hidden="true" />
                </div>

                <div className="absolute top-0 right-0 bottom-0 w-8 md:w-16 bg-linear-to-l from-brand-bg to-transparent z-20 pointer-events-none" />
            </div>
        </section>
    );
}