export interface Video {
    videoId: string;
    videoTitle: string;
    s3OriginalKey: string;
    status: 'PENDING' | 'READY';
    hlsUrl?: string;
    createdAt: string;
}