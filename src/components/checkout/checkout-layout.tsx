import Link from "next/link";
import Image from "next/image";

interface CheckoutLayoutProps {
    children: React.ReactNode;
    etapaAtual?: 1 | 2 | 3;
}

export function CheckoutLayout({ children, etapaAtual = 1 }: CheckoutLayoutProps) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header simplificado - sem navbar */}
            <header className="bg-white border-b border-gray-200 py-6">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="flex flex-col items-center">
                        {/* Logo centralizado */}
                        <Link href="/" className="inline-block mb-4">
                            <Image
                                src="/logo-poliedro-curso (2).svg"
                                alt="Poliedro Cursos"
                                width={200}
                                height={50}
                                className="h-12 w-auto"
                                priority
                            />
                        </Link>

                        {/* Texto "PRÉ-VESTIBULAR ONLINE" */}
                        <p className="text-sm text-gray-600 tracking-wide mb-2">
                            PRÉ-VESTIBULAR ONLINE
                        </p>
                    </div>
                </div>
            </header>

            {/* Conteúdo principal */}
            <main className="container mx-auto px-4 py-8 max-w-2xl">
                {children}
            </main>

            {/* Footer simples */}
            <footer className="border-t border-gray-200 py-6 mt-12">
                <div className="container mx-auto px-4 max-w-4xl text-center text-sm text-gray-600">
                    <p>© 2026 Poliedro Cursos. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    );
}