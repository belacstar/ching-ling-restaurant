'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function ExperienciaSection() {
    return (
        <section className="py-20 bg-gradient-to-br from-red-900 to-black text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }} />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Logo */}
                    <div className="mb-8">
                        <Image
                            src="/logo-ching.png"
                            alt="Ching Ling Logo"
                            width={120}
                            height={120}
                            className="mx-auto opacity-90"
                        />
                    </div>

                    {/* Title */}
                    <h2 className="text-4xl md:text-6xl font-bold mb-6">
                        Experiência CHING LING
                    </h2>

                    {/* Description */}
                    <p className="text-xl md:text-2xl mb-8 leading-relaxed opacity-90">
                        O Ching Ling está à sua espera para sua melhor experiência gastronômica.
                        Faça seu pedido ou reserve sua mesa.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                        <Link
                            href="https://wa.me/5531999999999?text=Olá! Gostaria de fazer uma reserva no Ching Ling"
                            target="_blank"
                            className="bg-white text-red-900 hover:bg-gray-100 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
                        >
                            RESERVA
                        </Link>

                        <Link
                            href="https://wa.me/5531999999999?text=Olá! Gostaria de fazer um pedido"
                            target="_blank"
                            className="border-2 border-white text-white hover:bg-white hover:text-red-900 px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            DELIVERY
                        </Link>
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Horário</h3>
                            <p className="opacity-90">
                                Segunda a Domingo<br />
                                18h às 23h
                            </p>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Delivery</h3>
                            <p className="opacity-90">
                                (31) 9999-9999<br />
                                Até 23h
                            </p>
                        </div>

                        <div className="p-6">
                            <h3 className="text-xl font-bold mb-2">Localização</h3>
                            <p className="opacity-90">
                                Belo Horizonte - MG<br />
                                Centro da cidade
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}