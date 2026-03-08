"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";

interface CheckoutFormProps {
    onProximo: () => void;
}

export function CheckoutForm({ onProximo }: CheckoutFormProps) {
    const [formData, setFormData] = useState({
        nomeCompleto: "",
        cpf: "",
        email: "",
        telefone: "",
        aceitaPolitica: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Dados do formulário:', formData);
        // Aqui vamos conectar com o backend depois
    };

    return (
        <Card className="border-2 border-gray-200 shadow-lg">
            <CardHeader className="border-b border-gray-100 pb-6">
                <CardTitle className="text-2xl font-bold text-center text-gray-800">
                    1. Dados do Aluno
                </CardTitle>
            </CardHeader>

            <form onSubmit={handleSubmit}>
                <CardContent className="pt-6 space-y-5">
                    {/* Nome Completo */}
                    <div className="space-y-2">
                        <label
                            htmlFor="nomeCompleto"
                            className="text-sm font-medium text-gray-700 block"
                        >
                            Nome Completo
                        </label>
                        <input
                            id="nomeCompleto"
                            name="nomeCompleto"
                            type="text"
                            value={formData.nomeCompleto}
                            onChange={handleChange}
                            placeholder="Nome Completo"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* CPF */}
                    <div className="space-y-2">
                        <label
                            htmlFor="cpf"
                            className="text-sm font-medium text-gray-700 block"
                        >
                            CPF
                        </label>
                        <input
                            id="cpf"
                            name="cpf"
                            type="text"
                            value={formData.cpf}
                            onChange={handleChange}
                            placeholder="000.000.000-00"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* E-mail */}
                    <div className="space-y-2">
                        <label
                            htmlFor="email"
                            className="text-sm font-medium text-gray-700 block"
                        >
                            E-mail
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="E-mail"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Telefone */}
                    <div className="space-y-2">
                        <label
                            htmlFor="telefone"
                            className="text-sm font-medium text-gray-700 block"
                        >
                            Telefone
                        </label>
                        <input
                            id="telefone"
                            name="telefone"
                            type="tel"
                            value={formData.telefone}
                            onChange={handleChange}
                            placeholder="(00) 00000-0000"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Checkbox de Política de Privacidade */}
                    <div className="flex items-start space-x-3 pt-2">
                        <Checkbox
                            id="aceitaPolitica"
                            name="aceitaPolitica"
                            checked={formData.aceitaPolitica}
                            onCheckedChange={(checked) =>
                                setFormData(prev => ({ ...prev, aceitaPolitica: checked as boolean }))
                            }
                            className="mt-1"
                        />
                        <label
                            htmlFor="aceitaPolitica"
                            className="text-sm text-gray-600 leading-relaxed"
                        >
                            Li e concordo com a <Link href="/politica-de-privacidade" className="text-blue-600 hover:underline font-medium">Política de Privacidade</Link> e Proteção de Dados.
                        </label>
                    </div>
                </CardContent>

                <CardFooter className="flex flex-col space-y-4 border-t border-gray-100 pt-6">
                    {/* Botões de ação */}
                    <div className="flex gap-4 w-full">
                        <Button
                            type="button"
                            variant="outline"
                            className="flex-1 py-6 text-gray-700 border-gray-300 hover:bg-gray-50 rounded-lg"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="submit"
                            className="flex-1 py-6 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                        >
                            Continuar
                        </Button>
                    </div>

                    {/* Ajuda - Fale com consultor */}
                    <div className="text-center pt-4">
                        <p className="text-sm text-gray-500 mb-2">Precisa de ajuda?</p>
                        <Link
                            href="https://wa.me/551239281616"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium"
                        >
                            <Phone className="h-4 w-4" />
                            Fale com um consultor
                        </Link>
                    </div>

                    {/* Botão Próximo */}
                    <button onClick={onProximo}>
                        Próximo
                    </button>
                </CardFooter>
            </form>
        </Card>
    );
}