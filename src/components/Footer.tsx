import Image from 'next/image';
import Link from 'next/link';
import { Phone, MapPin, Instagram, Facebook, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Image
                src="/logo-ching.png"
                alt="Ching Ling"
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              A melhor experiência da culinária chinesa em Belo Horizonte.
              Ambiente sofisticado, pratos autênticos e atendimento diferenciado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/chinglingbh"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/chinglingbh"
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
                <Link href="#cardapio" className="text-gray-300 hover:text-red-400 transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gray-300 hover:text-red-400 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#cardapio" className="text-gray-300 hover:text-red-400 transition-colors">
                  Cardápio
                </Link>
              </li>
              <li>
                <Link href="#galeria" className="text-gray-300 hover:text-red-400 transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="#contato" className="text-gray-300 hover:text-red-400 transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-red-400 transition-colors">
                  Reservas
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
                    Rua Exemplo, 123 - Centro<br />
                    Belo Horizonte - MG
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Phone className="text-red-400 mt-1 flex-shrink-0" size={18} />
                <div>
                  <p className="text-gray-300 text-sm">
                    (31) 3324-0052<br />
                    Delivery: (31) 9999-9999
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
            <p className="text-gray-400 text-sm">
              Segunda a Domingo: 18h às 00h
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}