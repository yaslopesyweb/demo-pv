import { CursoCard } from "@/components/curso-card";

export function CoursesSection() {
    const primaryColor = "rgb(204, 64, 20)";

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 max-w-6xl">
                <h2
                    className="text-3xl font-bold text-center mb-12"
                    style={{
                        fontFamily: 'Ubuntu, sans-serif',
                        color: primaryColor,
                        fontWeight: 500
                    }}
                >
                    Encontre a turma online ideal para o tamanho dos seus sonhos
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <CursoCard
                        titulo="Medicina Online"
                        descricao="A melhor preparação online para quem busca medicinas focadas nos principais vestibulares."
                        inicio="2 de Fevereiro de 2022"
                        colecao="MED Digital"
                        badges={["Enem", "Fuvest", "Unicamp"]}
                        cor="#2C77C4" // Azul medicina
                    />
                    <CursoCard
                        titulo="Turma ITA Online"
                        descricao="A escolha perfeita para a gestão de um programa de formação online para profissionais voltados à saúde."
                        inicio="12 de janeiro de 2026"
                        colecao="ITA Digital"
                        badges={["Etra", "Fuvest", "Unicamp"]}
                        cor="#54734C" // Verde ITA
                    />
                    <CursoCard
                        titulo="Enem Online"
                        descricao="Prepare-se ao vivo no turno noturno com aulas online. Focadas no Enem e principais vestibulares."
                        inicio="2 de março de 2026"
                        colecao="PIT Digital"
                        badges={["Enem", "Fuvest", "Unicamp"]}
                        cor="#E65B0B" // Laranja Enem
                    />
                    <CursoCard
                        titulo="Extensivo Manhã"
                        descricao="Prepare-se ao vivo no turno noturno com aulas online. Focadas no Enem e principais vestibulares."
                        inicio="1º fev de 2026"
                        colecao="PIT Digital"
                        badges={["Etra", "Fuvest", "Unicamp"]}
                        cor="#1C467E" // Azul escuro Extensivo
                    />
                </div>
            </div>
        </section>
    );
}