import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface PromotionCardsProps {
    variant?: 'default' | 'hero';
}

export function PromotionCards({ variant = 'default' }: PromotionCardsProps) {
    if (variant === 'hero') {
        return (
            <div className="grid grid-cols-2 gap-4 mt-4">
                {/* Concurso de Bolsas Card - Personalizado */}
                <div
                    className="rounded-2xl p-5 flex flex-col items-center text-center"
                    style={{
                        backgroundColor: '#E04816',
                        border: 'none'
                    }}
                >
                    <h3 className="text-lg font-bold mb-2" style={{ color: '#FDFAF8' }}>
                        Concurso de Bolsas
                    </h3>
                    <p className="text-sm mb-3" style={{ color: '#FDFAF8' }}>
                        Participe da prova e concorra a bolsas de até 100%.
                    </p>
                    <button
                        className="font-bold text-sm px-4 py-2 rounded-full transition-all hover:opacity-90"
                        style={{
                            backgroundColor: '#FDFAF8',
                            color: '#E04816'
                        }}
                    >
                        SAIBA MAIS →
                    </button>
                </div>

                {/* Bolsa Desempenho Card - Mantido original */}
                <div className="border-2 border-blue-100 hover:border-blue-300 transition-colors rounded-2xl p-5">
                    <h3 className="text-lg text-blue-600 font-bold mb-2">Bolsa Desempenho</h3>
                    <p className="text-sm text-gray-600 mb-3">
                        Envie seu boletim com notas de outros vestibulares e obtenha descontos.
                    </p>
                    <button className="text-blue-600 font-bold text-sm hover:opacity-80">
                        SAIBA MAIS →
                    </button>
                </div>
            </div>
        );
    }




}