import Link from 'next/link';
import { Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import Logo from '@/components/Logo';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Logo
                alt="Ching Ling"
                width={120}
                height={60}
                className="object-contain"
                priority
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A melhor experiência da culinária chinesa em Barbacena.
              Ambiente sofisticado, pratos autênticos e atendimento diferenciado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/restaurantechingling/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.facebook.com/chinglingbarbacena"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Acesso Rápido */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-red-400">
              Acesso Rápido
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="#destaques" className="text-gray-300 hover:text-red-400 transition-colors">
                  Destaques
                </Link>
              </li>
              <li>
                <Link href="#cardapio-chines" className="text-gray-300 hover:text-red-400 transition-colors">
                  Cardápio Chinês
                </Link>
              </li>
              <li>
                <Link href="#cardapio-japones" className="text-gray-300 hover:text-red-400 transition-colors">
                  Cardápio Japonês
                </Link>
              </li>
              <li>
                <Link href="#cardapio-bebidas" className="text-gray-300 hover:text-red-400 transition-colors">
                  Cardápio Bebidas
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gray-300 hover:text-red-400 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#experiencia" className="text-gray-300 hover:text-red-400 transition-colors">
                  Experiência
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-red-400">
              Contato
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-red-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">
                    Loja A Restaurante Ching Ling<br />
                    R. Visc. de Carandaí, 168 - Centro<br />
                    Barbacena - MG, 36200-000
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="text-red-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">
                    (32) 3362-2492
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Ching Ling Restaurant. Todos os direitos reservados.
            </p>
            <a
              href="https://www.linkedin.com/in/isabela-camara-/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 text-sm hover:text-red-400 transition-colors"
            >
              Desenvolvido por Isabela Camara
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
