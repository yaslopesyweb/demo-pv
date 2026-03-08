import { CursoCard } from "@/components/curso-card";

// Dados dos cursos (pode ser movido para um arquivo separado depois)
const cursosData = [
    {
        titulo: "Medicina Online",
        descricao: "Se o seu objetivo é ingressar em uma faculdade de Medicina, essa turma é para você. Com foco em física, química e biologia, oferece conteúdos aprofundados e simulados específicos para quem busca uma vaga nas melhores universidades da área.",
        inicio: "2 de fevereiro de 2026",
        colecao: "MED Digital",
        badges: ["Enem", "Fuvest", "Unicamp"],
        cor: "#2C77C4"
    },
    {
        titulo: "Turma ITA Online",
        descricao: "Se o seu objetivo é ingressar em cursos de Engenharia nas instituições mais concorridas, essa turma é para você. Com aulas de nível avançado e professores experientes, o foco é preparar você para os desafios de vestibulares exigentes ITA e IME.",
        inicio: "12 de janeiro de 2026",
        colecao: "ITA Digital",
        badges: ["ITA", "IME", "Unicamp"],
        cor: "#4D6C45"
    },
    {
        titulo: "Enem Online",
        descricao: "Se o seu objetivo é conquistar uma vaga em uma universidade pública ou garantir uma boa pontuação no ENEM, essa turma é para você. Com professores experientes e estratégias para melhorar seu desempenho em todas as áreas do exame.",
        inicio: "2 de março de 2026",
        colecao: "PIT Digital",
        badges: ["Enem", "Fuvest", "Unicamp"],
        cor: "#E65B0B"
    },
    {
        titulo: "Extensivo Manhã",
        descricao: "Prepare-se ao vivo no turno manha do extensivo com aulas online. Ela trabalha os conteúdos de forma aprofundada, ideal para quem tem mais tempo para se dedicar e quer uma preparação completa para o Enem e principais vestibulares.",
        inicio: "1 de fevereiro de 2026",
        colecao: "PIT Digital",
        badges: ["Etra", "Fuvest", "Unicamp"],
        cor: "#1C467E"
    }
];

export function CoursesSection() {
    return (
        <section className="py-16 bg-gray-50">
                {/* Div branca com bordas arredondadas */}
                <div className="bg-white rounded-3xl py-10 px-6 md:px-8 shadow-sm">
                    <h2 className="text-3xl text-center mb-12">
                        Encontre a <span className="font-bold">turma online</span> ideal para o tamanho dos seus sonhos
                    </h2>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {cursosData.map((curso, index) => (
                            <CursoCard
                                key={index}
                                titulo={curso.titulo}
                                descricao={curso.descricao}
                                inicio={curso.inicio}
                                colecao={curso.colecao}
                                badges={curso.badges}
                                cor={curso.cor}
                            />
                        ))}
                    </div>
                </div>
        </section>
    );
}