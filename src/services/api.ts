import { Video } from "@/types/video";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchReadyVideos(): Promise<Video[]> {
    try {
        const response = await fetch(`${API_BASE_URL}/videos`, {
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error(`Erro ao buscar videos: ${response.statusText}`);
        }

        const data = await response.json();

        // return data.filter((video: Video) => video.status === 'READY');
        return data;
    } catch (error) {
        console.error('Erro ao buscar lista de videos: ', error);
        return [];
    }
}

export async function fetchVideoById(id: string): Promise<Video | null> {
    try {
        const response = await fetch(`${API_BASE_URL}/videos/${id}`, {
            cache: 'no-store'
        });

        if (!response.ok) {
            if (response.status === 404) {
                return null
            }
            throw new Error(`Erro ao buscar video com ID ${id}`);
        }

        return await response.json();
    } catch (error) {
        console.error(`Erro ao buscar video com ID ${id}: `, error);
        return null;
    }
}