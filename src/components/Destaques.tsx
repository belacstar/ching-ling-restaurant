import { ChefHat, Wine, Star, Users, Clock, Award } from 'lucide-react';

export default function Destaques() {
  const destaques = [
    {
      icon: ChefHat,
      title: "Cozinha Fusion",
      description: "Apostamos em receitas que vão além da tradição chinesa e japonesa, misturando sabores e técnicas de outras culturas gastronômicas"
    },
    {
      icon: Wine,
      title: "Drinks Exclusivos",
      description: "Bebidas especiais criadas especialmente para nossos clientes mais exigentes, harmonizando perfeitamente com nossos pratos"
    },
    {
      icon: Star,
      title: "Experiência Premium",
      description: "Oferecemos um ambiente refinado, enriquecido com elementos orientais que conferem um toque especial e sofisticado"
    },
    {
      icon: Users,
      title: "Atendimento Diferenciado",
      description: "Nossa equipe é treinada para proporcionar uma experiência única e personalizada a cada cliente"
    },
    {
      icon: Clock,
      title: "Menu Executivo",
      description: "Pratos autênticos e de alta qualidade! Combinações únicas com entrada, prato principal e sobremesa"
    },
    {
      icon: Award,
      title: "O Mais Premiado",
      description: "Com seus diversos diferenciais, o restaurante Ching Ling vem acumulando diversos prêmios de gastronomia asiática na região"
    }
  ];

  return (
    <section id="destaques" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Destaques
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra o que torna o Ching Ling uma experiência gastronômica única
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destaques.map((destaque, index) => {
            const IconComponent = destaque.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-6 mx-auto">
                  <IconComponent size={32} className="text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 text-center mb-4">
                  {destaque.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {destaque.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}