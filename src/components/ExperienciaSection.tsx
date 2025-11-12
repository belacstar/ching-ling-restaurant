'use client'

import { useState } from 'react'
import Link from 'next/link'
import Logo from '@/components/Logo'

export default function ExperienciaSection() {
    const [showPhone, setShowPhone] = useState(false)
    return (
        <section id="experiencia" className="py-20 bg-gradient-to-br from-red-900 to-black text-white relative overflow-hidden">
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
                        <Logo
                            alt="Ching Ling Logo"
                            width={120}
                            height={120}
                            className="mx-auto opacity-90"
                            priority
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

                    {/* CTA */}
                    <div className="flex flex-col items-center gap-6">
                        <button
                            type="button"
                            onClick={() => setShowPhone((prev) => !prev)}
                            className={`px-10 py-4 rounded-lg font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg border-2 ${
                                showPhone
                                    ? 'bg-red-600 text-white border-red-600 shadow-[0_20px_40px_rgba(220,38,38,0.35)]'
                                    : 'bg-white text-red-900 border-transparent hover:bg-gray-100'
                            }`}
                        >
                            ENTRE EM CONTATO
                        </button>

                        {showPhone && (
                            <Link
                                href="tel:+553233622492"
                                className="text-3xl font-bold tracking-wide text-white"
                            >
                                (32) 3362-2492
                            </Link>
                        )}
                    </div>

                    {/* Additional Info */}
                    <div className="mt-12 grid grid-cols-1 gap-8 text-center md:grid-cols-3">
                        <div className="space-y-4 rounded-2xl bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
                            <h3 className="text-xl font-bold mb-2">Horário</h3>
                            <p className="opacity-90">
                                Segunda a Domingo<br />
                                18h às 23h
                            </p>
                        </div>

                        <div className="space-y-4 rounded-2xl bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10 md:order-none order-3">
                            <h3 className="text-xl font-bold mb-2">Localização</h3>
                            <a
                                href="https://www.google.com/maps/place/Loja+A+Restaurante+Ching+Ling+-+R.+Visc.+de+Caranda%C3%AD,+168+-+Centro,+Barbacena+-+MG,+36200-000"
                                target="_blank"
                                rel="noreferrer"
                                className="opacity-90 hover:text-red-300 transition-colors inline-block leading-relaxed"
                            >
                                Loja A Restaurante Ching Ling<br />
                                R. Visc. de Carandaí, 168 - Centro<br />
                                Barbacena - MG, 36200-000
                            </a>
                            <div className="overflow-hidden rounded-xl border border-white/10 shadow-inner">
                                <iframe
                                    title="Mapa Restaurante Ching Ling"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.481440389777!2d-43.77118282400622!3d-21.22820548048458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x989b67f1c8aa191%3A0x3436630ef9a9331a!2sLoja%20A%20Restaurante%20Ching%20Ling!5e0!3m2!1spt-BR!2sbr!4v1738286400000!5m2!1spt-BR!2sbr"
                                    width="100%"
                                    height="200"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full"
                                />
                            </div>
                        </div>

                        <div className="space-y-4 rounded-2xl bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.35)] ring-1 ring-white/10">
                            <h3 className="text-xl font-bold mb-2">Delivery</h3>
                            <p className="opacity-90">
                                (32) 3362-2492<br />
                                Atendimento das 18h às 23h
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
