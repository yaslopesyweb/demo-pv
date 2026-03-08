import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CursoCard } from "@/components/curso-card";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-5xl font-bold text-center mb-6">Turmas Online</h1>
          <p className="text-xl text-gray-600 text-center max-w-4xl mx-auto">
            Prepare-se para os principais vestibulares do país com a estrutura pedagógica 
            e a qualidade reconhecida do curso que é referência e liderança em aprovações. 
            E o melhor: sem sair de casa.
          </p>
        </div>
      </section>

      {/* Cards de Promoções */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Concurso de Bolsas Card */}
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Concurso de Bolsas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Participe da prova e concorra a bolsas de até 100%.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-blue-600 px-0">
                  SAIBA MAIS →
                </Button>
              </CardFooter>
            </Card>

            {/* Bolsa Desempenho Card */}
            <Card className="border-2 border-blue-100 hover:border-blue-300 transition-colors rounded-3xl">
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Bolsa Desempenho</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Envie seu boletim com notas de outros vestibulares (ENEM, FUVEST, Unicamp, etc) 
                  e obtenha descontos pelo seu desempenho.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="link" className="text-blue-600 px-0">
                  SAIBA MAIS →
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Seção: Encontre a turma online ideal */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Encontre a turma online ideal para o tamanho dos seus sonhos
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CursoCard
              titulo="Medicina Online"
              descricao="Se o seu objetivo é ingressar em uma faculdade de Medicina, essa turma é para você. Com foco em física, química e biologia, oferece conteúdos aprofundados e simulados específicos para quem busca uma vaga nas melhores universidades da área."
              inicio="2 de fevereiro de 2026"
              colecao="MED Digital"
              badges={["Enem", "Fuvest", "Unicamp"]}
              cor="#2C77C4" // Azul medicina
            />
            <CursoCard
              titulo="Turma ITA Online"
              descricao="Se o seu objetivo é ingressar em cursos de Engenharia nas instituições mais concorridas, essa turma é para você. Com aulas de nível avançado e professores experientes, o foco é preparar você para os desafios de vestibulares exigentes ITA e IME."
              inicio="12 de janeiro de 2026"
              colecao="ITA Digital"
              badges={["ITA", "IME", "Unicamp"]}
              cor="#4D6C45" // Verde ITA
            />
            <CursoCard
              titulo="Enem Online"
              descricao="Se o seu objetivo é conquistar uma vaga em uma universidade pública ou garantir uma boa pontuação no ENEM, essa turma é para você. Com professores experientes e estratégias para melhorar seu desempenho em todas as áreas do exame."
              inicio="2 de março de 2026"
              colecao="PIT Digital"
              badges={["Enem", "Fuvest", "Unicamp"]}
              cor="#E65B0B" // Laranja Enem
            />
            <CursoCard
              titulo="Extensivo Manhã"
              descricao="Prepare-se ao vivo no turno manha do extensivo com aulas online. Ela trabalha os conteúdos de forma aprofundada, ideal para quem tem mais tempo para se dedicar e quer uma preparação completa para o Enem e principais vestibulares."
              inicio="1 de fevereiro de 2026"
              colecao="PIT Digital"
              badges={["Etra", "Fuvest", "Unicamp"]}
              cor="#1C467E" // Azul escuro Extensivo
            />
          </div>
        </div>
      </section>

      {/* Rodapé com CTA */}
      <section className="py-12 bg-blue-600 text-white">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <h3 className="text-2xl font-semibold mb-4">
            Fale com um consultor para auxiliar na matrícula
          </h3>
          <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
            Falar com Consultor
          </Button>
        </div>
      </section>
    </div>
  );
}