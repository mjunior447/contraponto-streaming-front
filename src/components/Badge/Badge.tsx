interface BadgeProps {
    text: string;
    variant?: 'tech' | 'disabled' | 'tooltip' | 'brand' | 'featured';
    className?: string;
}

export function Badge({ text, variant = 'tech', className = '' }: BadgeProps) {
    const styles = {
        tech: 'bg-slate-900 border-slate-800 text-slate-400 font-bold px-2 py-0.5',
        disabled: 'bg-slate-950 border-slate-900 text-slate-600 font-extrabold px-2 py-0.5',
        tooltip: 'absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-950 border-slate-800 text-slate-500 font-extrabold px-1.5 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap',
        brand: 'hidden md:inline-block text-[10px] bg-slate-800/80 border border-slate-700/30 text-slate-400 font-bold px-2.5 py-1 rounded tracking-cinematic uppercase',
        featured: 'text-[10px] bg-brand-accent/20 border border-brand-accent/40 text-brand-accent font-black px-2 py-0.5 rounded tracking-cinematic uppercase'
    };

    return (
        <span
            className={`
                text-[9px] md:text-[10px] border rounded tracking-cinematic uppercase select-none
                ${styles[variant]} 
                ${className}
            `}
        >
            {text}
        </span>
    );
}