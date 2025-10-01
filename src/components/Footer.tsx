import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">Climatização Profissional</h3>
            <p className="text-white/80 mb-4">
              Especialistas em instalação, manutenção e higienização de sistemas de climatização.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Serviços</h4>
            <ul className="space-y-2 text-white/80">
              <li className="hover:text-secondary transition-colors cursor-pointer">Instalação</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Manutenção</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Higienização</li>
              <li className="hover:text-secondary transition-colors cursor-pointer">Contratos PMOC</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contato</h4>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+5584994358723" className="hover:text-secondary transition-colors">
                  (84) 99435-8723
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:contato@climatizacao.com.br" className="hover:text-secondary transition-colors">
                  contato@climatizacao.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary flex-shrink-0 mt-1" />
                <span>Natal/RN e Região Metropolitana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-white/70 text-sm">
            © {currentYear} Climatização Profissional. Todos os direitos reservados.
          </div>
          <div className="flex gap-4">
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="#" 
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-secondary flex items-center justify-center transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
