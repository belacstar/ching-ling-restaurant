import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Fale Conosco
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Entre em contato conosco ou visite nosso restaurante
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Informações de Contato */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-400">
                Informações
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-red-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Endereço</p>
                    <p className="text-gray-300">
                      Rua Exemplo, 123 - Centro<br />
                      Belo Horizonte - MG, 30000-000
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="text-red-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Telefones</p>
                    <p className="text-gray-300">
                      (31) 3324-0052 | (31) 3324-0053<br />
                      Delivery: (31) 9999-9999
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="text-red-400 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <p className="font-semibold">Horário de Funcionamento</p>
                    <p className="text-gray-300">
                      Segunda a Quarta: 18h às 00h<br />
                      Quinta a Sábado: 18h às 01h<br />
                      Domingo: 18h às 00h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes Sociais */}
            <div>
              <h3 className="text-2xl font-bold mb-6 text-red-400">
                Siga-nos
              </h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
                >
                  <Instagram size={24} />
                </a>
                <a 
                  href="#" 
                  className="bg-red-600 hover:bg-red-700 p-3 rounded-full transition-colors"
                >
                  <Facebook size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Formulário de Contato */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-red-400">
              Envie uma Mensagem
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Nome"
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
                />
              </div>
              
              <input
                type="tel"
                placeholder="Telefone"
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none"
              />
              
              <textarea
                placeholder="Mensagem"
                rows={5}
                className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-red-400 focus:outline-none resize-none"
              ></textarea>
              
              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-colors"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}