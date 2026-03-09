"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckoutLayout } from "@/components/checkout/checkout-layout";
import { CheckoutStepper } from "@/components/checkout/checkout-stepper";
import { CheckoutForm } from "@/components/checkout/checkout-form";

export default function CheckoutPage() {
    const [etapaAtual, setEtapaAtual] = useState<1 | 2 | 3>(1);

    return (
        <CheckoutLayout>
            {/* Container principal - centralizado */}
            <div className="max-w-2xl mx-auto w-full">
                {/* Logo e stepper na mesma linha */}
                <div className="flex items-center justify-between mb-8">
                    {/* Logo com texto abaixo */}
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

                    {/* Stepper */}
                    <CheckoutStepper etapaAtual={etapaAtual} />
                </div>

                {/* Formulário da etapa atual */}
                <div className="w-full">
                    <CheckoutForm 
                        onProximo={() => setEtapaAtual((etapaAtual + 1) as 2 | 3)} 
                        etapaAtual={etapaAtual}
                    />
                </div>
            </div>
        </CheckoutLayout>
    );
}