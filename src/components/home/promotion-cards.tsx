import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function PromotionCards() {
    return (
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
    );
}