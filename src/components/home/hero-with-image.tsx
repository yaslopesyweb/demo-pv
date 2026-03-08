import { PromotionCards } from "./promotion-cards";

export function HeroWithImage() {
    return (
        <section className="relative bg-linear-to-b from-blue-50 to-white py-16 overflow-hidden">
            {/* Imagem de fundo posicionada à direita */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: 'url(/banner-poliedro.webp)',
                    backgroundPosition: 'right center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    opacity: 0.7,
                }}
            />

            {/* Conteúdo sobreposto à imagem */}
            <div className="relative z-10 container mx-auto px-4 max-w-6xl">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Lado esquerdo com texto e cards promocionais */}
                    <div className="space-y-8">
                        <h1 className="text-5xl font-bold mb-6">Turmas Online</h1>
                        <p className="text-xl text-gray-600 max-w-xl">
                            Prepare-se para os principais vestibulares do país com a estrutura pedagógica
                            e a qualidade reconhecida do curso que é referência e liderança em aprovações.
                            E o melhor: sem sair de casa.
                        </p>

                        {/* Cards de Promoções dentro da hero */}
                        <div className="grid md:grid-cols-2 gap-6 mt-8">
                        </div>
                    </div>

                    {/* Lado direito vazio para a imagem ocupar */}
                    <div className="hidden lg:block" />
                </div>
            </div>
        </section>
    );
}