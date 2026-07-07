import { Video } from "@/types/video";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchReadyVideos(): Promise<Video[]> {
    const response = await fetch(`${API_BASE_URL}/videos`, {
        cache: 'default'
    });

    if (!response.ok) {
        throw new Error(`Falha ao carregar catálogo: Código ${response.status}`);
    }

    const data = await response.json();

    return data;
}

export async function fetchVideoById(id: string): Promise<Video | null> {
    const response = await fetch(`${API_BASE_URL}/videos/${id}`, {
        cache: 'default'
    });

    if (!response.ok) {
        if (response.status === 404) {
            return null
        }

        throw new Error(`Erro ao buscar video com ID ${id}. Código: ${response.status}`);
    }

    return await response.json();
}