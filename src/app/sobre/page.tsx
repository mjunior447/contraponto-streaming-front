import { Badge } from "@/components/Badge";

export default function SobrePage() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-12 w-full">
            <header className="mb-12 text-center md:text-left">
                <Badge text="Nossa História" variant="about" />
                <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight mt-3 mb-4">
                    Sobre a ContraPonto
                </h1>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-2xl">
                    Uma plataforma de streaming dedicada a salvaguardar, digitalizar e difundir acervos audiovisuais históricos, artísticos e culturais.
                </p>
            </header>

            <div className="space-y-12 text-slate-300 font-normal leading-relaxed text-sm md:text-base">

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-800/60 pt-8">
                    <h2 className="text-xl font-bold text-slate-100 tracking-tight">
                        O Propósito
                    </h2>
                    <div className="md:col-span-2 space-y-4">
                        <p>
                            A ContraPonto nasceu da necessidade de criar uma ponte sólida entre a tecnologia de distribuição moderna (HLS/Streaming) e a riqueza contida em arquivos históricos e manifestações culturais independentes.
                        </p>
                        <p>
                            Mais do que um catálogo de vídeos, estruturamos um ambiente digital seguro e otimizado para que espetáculos, entrevistas, documentários e memórias continuem acessíveis para pesquisadores, estudantes e entusiastas das artes.
                        </p>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-800/60 pt-8">
                    <h2 className="text-xl font-bold text-slate-100 tracking-tight">
                        Pilares Técnicos
                    </h2>
                    <div className="md:col-span-2">
                        <ul className="space-y-3 list-disc list-inside text-slate-300">
                            <li><strong className="text-slate-100">Preservação Ativa:</strong> Transcodificação automática de arquivos de vídeo para formatos adaptativos digitais estáveis.</li>
                            <li><strong className="text-slate-100">Acessibilidade Interativa:</strong> Interfaces projetadas para garantir fluidez de navegação em múltiplos dispositivos, priorizando a semântica e a clareza visual.</li>
                            <li><strong className="text-slate-100">Fluidez de Entrega:</strong> Uso de protocolos modernos de transmissão para que acervos densos carreguem instantaneamente.</li>
                        </ul>
                    </div>
                </section>

                <section className="grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-slate-800/60 pt-8">
                    <h2 className="text-xl font-bold text-slate-100 tracking-tight">
                        O Acervo
                    </h2>
                    <div className="md:col-span-2 space-y-4">
                        <p>
                            Nossa curadoria divide-se em eixos fundamentais que documentam desde a expressividade efêmera do <span className="text-brand-accent font-medium">Palco</span> até o registro biográfico contido nos <span className="text-brand-accent font-medium">Retratos</span> e a tradição oral resgatada pela <span className="text-brand-accent font-medium">Memória Viva</span>.
                        </p>
                        <p>
                            Acreditamos que democratizar o acesso a esses arquivos é um ato essencial de fortalecimento da identidade cultural coletiva.
                        </p>
                    </div>
                </section>

            </div>
        </main>
    );
}