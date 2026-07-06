export interface Video {
    videoId: string;
    videoTitle: string;
    s3OriginalKey: string;
    description: string;
    previewUrl?: string;
    thumbnailUrl?: string;
    category: string;
    status: 'PENDING' | 'READY';
    hlsUrl?: string;
    createdAt: string;
}