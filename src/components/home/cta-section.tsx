import { Button } from "@/components/ui/button";

export function CtaSection() {
    return (
        <section className="py-12 bg-blue-600 text-white">
            <div className="container mx-auto px-4 max-w-6xl text-center">
                <h3 className="text-2xl font-semibold mb-4">
                    Fale com um consultor para auxiliar na matrícula
                </h3>
                <Button variant="secondary" size="lg" className="bg-white text-blue-600 hover:bg-gray-100 rounded-full">
                    Falar com Consultor
                </Button>
            </div>
        </section>
    );
}