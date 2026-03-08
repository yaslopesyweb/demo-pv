import { Button } from "@/components/ui/button";

export function CtaSection() {
    const primaryColor = "rgb(204, 64, 20)";

    return (
        <section className="py-12" style={{ backgroundColor: primaryColor }}>
            <div className="container mx-auto px-4 max-w-6xl text-center">
                <h3
                    className="text-2xl font-semibold mb-4 text-white"
                    style={{
                        fontFamily: 'Ubuntu, sans-serif',
                        fontWeight: 400
                    }}
                >
                    Fale com um consultor para auxiliar na matrícula
                </h3>
                <Button
                    variant="secondary"
                    size="lg"
                    className="hover:opacity-90 transition-opacity rounded-full px-8 py-6 text-base font-medium"
                    style={{
                        fontFamily: 'Ubuntu, sans-serif',
                        backgroundColor: 'white',
                        color: primaryColor,
                        border: 'none'
                    }}
                >
                    Falar com Consultor
                </Button>
            </div>
        </section>
    );
}