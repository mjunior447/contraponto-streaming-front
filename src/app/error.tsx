'use client';

import { useEffect } from 'react';

interface ErrorProps {
    error: Error & { digest?: string };
    reset: () => void;
}

export default function GlobalError({ error, reset }: ErrorProps) {
    useEffect(() => {
        console.error('Erro no error boundary: ', error);
    }, [error]);

    return (
        <div style={{
            padding: '3rem',
            fontFamily: 'sans-serif',
            textAlign: 'center',
            backgroundColor: '#fff',
            border: '1px solid #ffccd5',
            borderRadius: '8px',
            maxWidth: '500px',
            margin: '4rem auto',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)'
        }}>
            <h2 style={{ color: '#d90429', marginTop: 0 }}>Opaaaa! Deu ruim aqui, hein!</h2>
            <p style={{ color: '#555', lineHeight: '1.6' }}>
                Não foi possível comunicar com o servidor de streaming.
                O serviço pode estar temporariamente indisponível.
            </p>

            <div style={{ marginTop: '2rem' }}>
                <button
                    onClick={() => reset()}
                    style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#000',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1rem'
                    }}
                >
                    Tentar Novamente
                </button>
            </div>
        </div>
    );
}