import Link from "next/link";

export function Logo() {
    return (
        <Link
            href="/"
            className="flex flex-col items-start group/logo focus-ring rounded-xl px-3 py-1.5 select-none relative overflow-visible"
        >
            <span className="text-xl font-black tracking-tighter text-transparent bg-clip-text bg-linear-to-r from-white via-brand-accent to-purple-500 bg-size-[200%_auto] animate-text-flow block leading-none relative z-10">
                CONTRAPONTO
            </span>

            <span className="text-[10px] font-bold tracking-[0.25em] text-slate-500 group-hover/logo:text-brand-accent uppercase mt-1.5 transition-colors duration-300 block pl-0.5 leading-none relative z-10">
                streaming
            </span>
        </Link>
    );
}