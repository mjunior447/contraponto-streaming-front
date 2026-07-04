import Image from 'next/image';
import React from 'react';

interface MediaCardProps {
    title: string;
    thumbnail: string;
    duration: string;
    rating: string;
    matchPercentage: number;
    isLoading?: boolean;
}

export const MediaCard: React.FC<MediaCardProps> = ({
    title, thumbnail, duration, rating, matchPercentage, isLoading = false
}) => {
    if (isLoading) {
        return <div className="w-full aspect-video bg-brand-surface animate-pulse rounded-md" />;
    }

    return (
        <div
            className="relative w-full aspect-video rounded-md overflow-hidden bg-brand-surface cursor-pointer transform hover:scale-105 transition-all duration-300 ease-out shadow-lg z-10 hover:z-30 group focus:ring-2 focus:ring-brand-accent focus:outline-none"
            tabIndex={0}
        >
            <Image src={thumbnail} alt={title} className="w-full h-full object-cover group-hover:opacity-40 transition-opacity duration-300" />

            <div className="absolute inset-0 p-4 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-brand-bg via-transparent to-transparent">
                <h4 className="font-bold text-sm text-white mb-1">{title}</h4>
                <div className="flex items-center space-x-2 text-xs">
                    <span className="text-green-400 font-semibold">{matchPercentage}% Relevante</span>
                    <span className="border border-brand-muted px-1 rounded text-brand-muted text-[10px]">{rating}</span>
                    <span className="text-brand-muted">{duration}</span>
                </div>
            </div>
        </div>
    );
};