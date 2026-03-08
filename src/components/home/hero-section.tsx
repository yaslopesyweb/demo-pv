import { Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({
    weight: ['400', '500', '700'],
    subsets: ["latin"],
});

export function HeroSection() {
    return (
        <section className="bg-gradient-to-b from-orange-50 to-white py-16">
            <div className="container mx-auto px-4 max-w-6xl">
                <h1
                    className="text-5xl font-bold text-center mb-6"
                    style={{
                        fontFamily: 'Ubuntu, sans-serif',
                        color: 'rgb(204, 64, 20)'
                    }}
                >
                    Turmas Online
                </h1>
                <p
                    className="text-xl text-center max-w-4xl mx-auto"
                    style={{
                        fontFamily: 'Ubuntu, sans-serif',
                        color: 'rgb(60, 60, 60)',
                        fontWeight: 400,
                        lineHeight: '1.6'
                    }}
                >
                    Prepare-se para os principais vestibulares do país com a estrutura pedagógica
                    e a qualidade reconhecida do curso que é referência e liderança em aprovações.
                    E o melhor: sem sair de casa.
                </p>
            </div>
        </section>
    );
}