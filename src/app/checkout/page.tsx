"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckoutLayout } from "@/components/checkout/checkout-layout";
import { CheckoutStepper } from "@/components/checkout/checkout-stepper";
import { CheckoutForm as FormularioCheckout } from "@/components/checkout/checkout-form"; // ← CORRIGIDO

export default function CheckoutPage() {
    const [etapaAtual, setEtapaAtual] = useState<number>(1);

    const irParaProximaEtapa = () => {
        if (etapaAtual < 3) {
            setEtapaAtual(etapaAtual + 1);
        }
    };

    const irParaEtapaAnterior = () => {
        if (etapaAtual > 1) {
            setEtapaAtual(etapaAtual - 1);
        }
    };

    return (
        <CheckoutLayout>
            <div className="max-w-2xl mx-auto w-full">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex flex-col">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/logo-poliedro-curso (2).svg"
                                alt="Poliedro Cursos"
                                width={160}
                                height={40}
                                className="h-10 w-auto"
                                priority
                            />
                        </Link>
                        <span className="text-xs text-gray-500 font-medium tracking-wide mt-0.5">
                            PRÉ-VESTIBULAR ONLINE
                        </span>
                    </div>
                    <CheckoutStepper etapaAtual={etapaAtual as 1 | 2 | 3} />
                </div>

                <div className="w-full">
                    {etapaAtual === 1 && (
                        <FormularioCheckout 
                            onProximo={irParaProximaEtapa}
                            etapaAtual={1}
                        />
                    )}
                    
                    {etapaAtual === 2 && (
                        <div className="text-center py-12">
                            <p className="text-gray-600">Página de Pagamento (em desenvolvimento)</p>
                            <div className="flex gap-4 justify-center mt-8">
                                <button
                                    onClick={irParaEtapaAnterior}
                                    className="px-6 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                                >
                                    Voltar
                                </button>
                                <button
                                    onClick={irParaProximaEtapa}
                                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                                >
                                    Próximo
                                </button>
                            </div>
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
            </div>
        </CheckoutLayout>
    );
}