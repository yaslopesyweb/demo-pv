"use client";

import { useState } from "react";
import Link from "next/link"; // Adicione esta importação
import { CheckoutLayout } from "@/components/checkout/checkout-layout";
import { CheckoutStepper } from "@/components/checkout/checkout-stepper";
import { CheckoutForm } from "@/components/checkout/checkout-form";

export default function CheckoutPage() {
    const [etapaAtual, setEtapaAtual] = useState<1 | 2 | 3>(1);

    return (
        <CheckoutLayout etapaAtual={etapaAtual}>
            {/* Stepper de etapas */}
            <CheckoutStepper etapaAtual={etapaAtual} />

            {/* Formulário da etapa atual */}
            <div className="mt-8">
                {etapaAtual === 1 && (
                    <CheckoutForm onProximo={() => setEtapaAtual(2)} />
                )}
                {etapaAtual === 2 && (
                    <div className="text-center py-12">
                        <p className="text-gray-600">Página de Pagamento (em desenvolvimento)</p>
                        <button
                            onClick={() => setEtapaAtual(3)}
                            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg"
                        >
                            Simular pagamento
                        </button>
                    </div>
                )}
                {etapaAtual === 3 && (
                    <div className="text-center py-12">
                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                        <h2 className="text-2xl font-bold text-gray-800 mb-2">Confirmação</h2>
                        <p className="text-gray-600 mb-6">Sua matrícula foi realizada com sucesso!</p>
                        <Link href="/" className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg">
                            Voltar para a página inicial
                        </Link>
                    </div>
                )}
            </div>
        </CheckoutLayout>
    );
}