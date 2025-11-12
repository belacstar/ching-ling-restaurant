import { ChefHat, Wine, Star, Users, Clock, MapPin } from 'lucide-react'

export default function Destaques() {
  const destaques = [
    {
      icon: ChefHat,
      title: 'Cozinha Fusion',
      description:
        'Apostamos em receitas que vão além da tradição chinesa e japonesa, misturando sabores e técnicas de outras culturas gastronômicas'
    },
    {
      icon: Wine,
      title: 'Drinks Exclusivos',
      description:
        'Bebidas especiais criadas especialmente para nossos clientes mais exigentes, harmonizando perfeitamente com nossos pratos'
    },
    {
      icon: Star,
      title: 'Experiência Premium',
      description:
        'Oferecemos um ambiente refinado, enriquecido com elementos orientais que conferem um toque especial e sofisticado'
    },
    {
      icon: Users,
      title: 'Atendimento Diferenciado',
      description: 'Nossa equipe é treinada para proporcionar uma experiência única e personalizada a cada cliente'
    },
    {
      icon: Clock,
      title: 'Menu Executivo',
      description: 'Pratos autênticos e de alta qualidade! Combinações únicas com entrada, prato principal e sobremesa'
    },
    {
      icon: MapPin,
      title: 'Local Privilegiado',
      description:
        'Estamos em um ponto estratégico de Barbacena, com fácil acesso e vista privilegiada para quem quer aproveitar a cidade'
    }
  ]

  return (
    <section
      id="destaques"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-[#f6f7fb] via-[#ebedf2] to-[#dfe2e8]"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(255,255,255,0.6), transparent 50%), radial-gradient(circle at 80% 0%, rgba(255,255,255,0.4), transparent 45%), radial-gradient(circle at 50% 80%, rgba(255,255,255,0.7), transparent 55%)'
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.4em] text-red-500 mb-3">Exclusividade</p>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Destaques</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra o que torna o Ching Ling uma experiência gastronômica única
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {destaques.map((destaque, index) => {
            const IconComponent = destaque.icon
            return (
              <div
                key={index}
                className="group relative rounded-3xl border border-white/40 bg-white/70 p-8 shadow-lg ring-1 ring-black/5 backdrop-blur transition duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-2xl"
              >
                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />
                <div className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-red-500/50 to-transparent" />

                <div className="mb-5 flex items-center justify-center">
                  <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-amber-400 text-white shadow-[0_12px_30px_rgba(220,38,38,0.35)] sm:h-14 sm:w-14">
                    <IconComponent size={22} />
                    <div className="absolute inset-0 rounded-2xl border border-white/30" />
                  </div>
                </div>

                <h3 className="mb-3 text-center text-lg font-semibold text-gray-900 sm:text-xl md:text-2xl">{destaque.title}</h3>
                <p className="text-center text-sm leading-relaxed text-gray-600 sm:text-base">
                  {destaque.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
