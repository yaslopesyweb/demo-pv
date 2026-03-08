import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function PromotionCards() {
    const primaryColor = "rgb(204, 64, 20)";

    return (
        <section className="py-12 bg-white">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="grid md:grid-cols-2 gap-8">
                    {/* Concurso de Bolsas Card */}
                    <Card
                        className="border-2 hover:border-opacity-80 transition-colors rounded-3xl overflow-hidden"
                        style={{ borderColor: primaryColor }}
                    >
                        <CardHeader className="pb-2">
                            <CardTitle
                                className="text-2xl"
                                style={{
                                    fontFamily: 'Ubuntu, sans-serif',
                                    color: primaryColor,
                                    fontWeight: 500
                                }}
                            >
                                Concurso de Bolsas
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p
                                className="text-base"
                                style={{
                                    fontFamily: 'Ubuntu, sans-serif',
                                    color: 'rgb(60, 60, 60)',
                                    lineHeight: '1.5'
                                }}
                            >
                                Participe da prova e concorra a bolsas de até 100%.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="link"
                                className="px-0 text-base font-medium hover:opacity-80 transition-opacity"
                                style={{
                                    fontFamily: 'Ubuntu, sans-serif',
                                    color: primaryColor
                                }}
                            >
                                SAIBA MAIS →
                            </Button>
                        </CardFooter>
                    </Card>

                    {/* Bolsa Desempenho Card */}
                    <Card
                        className="border-2 hover:border-opacity-80 transition-colors rounded-3xl overflow-hidden"
                        style={{ borderColor: primaryColor }}
                    >
                        <CardHeader className="pb-2">
                            <CardTitle
                                className="text-2xl"
                                style={{
                                    fontFamily: 'Ubuntu, sans-serif',
                                    color: primaryColor,
                                    fontWeight: 500
                                }}
                            >
                                Bolsa Desempenho
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p
                                className="text-base"
                                style={{
                                    fontFamily: 'Ubuntu, sans-serif',
                                    color: 'rgb(60, 60, 60)',
                                    lineHeight: '1.5'
                                }}
                            >
                                Envie seu boletim com notas de outros vestibulares (ENEM, FUVEST, Unicamp, etc)
                                e obtenha descontos pelo seu desempenho.
                            </p>
                        </CardContent>
                        <CardFooter>
                            <Button
                                variant="link"
                                className="px-0 text-base font-medium hover:opacity-80 transition-opacity"
                                style={{
                                    fontFamily: 'Ubuntu, sans-serif',
                                    color: primaryColor
                                }}
                            >
                                SAIBA MAIS →
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    );
}