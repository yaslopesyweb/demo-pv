interface CheckoutStepperProps {
    etapaAtual: 1 | 2 | 3;
}

export function CheckoutStepper({ etapaAtual }: CheckoutStepperProps) {
    const etapas = [
        { numero: 1, nome: "Dados Pessoais" },
        { numero: 2, nome: "Pagamento" },
        { numero: 3, nome: "Confirmação" }
    ];

    return (
        <div className="w-full py-8">
            <div className="flex items-center justify-center gap-4 md:gap-8">
                {etapas.map((etapa, index) => (
                    <div key={etapa.numero} className="flex items-center">
                        {/* Etapa */}
                        <div className="flex flex-col items-center">
                            <div
                                className={`
                    w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg
                    ${etapa.numero === etapaAtual
                                        ? 'bg-blue-600 text-white'
                                        : etapa.numero < etapaAtual
                                            ? 'bg-green-500 text-white'
                                            : 'bg-gray-200 text-gray-500'
                                    }
                `}
                            >
                                {etapa.numero < etapaAtual ? '✓' : etapa.numero}
                            </div>
                            <span className={`
                text-sm mt-2 font-medium
                ${etapa.numero === etapaAtual
                                    ? 'text-blue-600'
                                    : etapa.numero < etapaAtual
                                        ? 'text-green-500'
                                        : 'text-gray-400'
                                }
                `}>
                                {etapa.nome}
                            </span>
                        </div>

                        {/* Linha entre etapas (exceto após a última) */}
                        {index < etapas.length - 1 && (
                            <div className={`
                w-12 md:w-24 h-0.5 mx-2 md:mx-4
                ${etapa.numero < etapaAtual
                                    ? 'bg-green-500'
                                    : 'bg-gray-200'
                                }
                `} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}