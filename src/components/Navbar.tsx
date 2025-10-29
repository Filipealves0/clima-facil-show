import { Button } from "@/components/ui/button";
import { Phone, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
              <Phone className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              +Clim | Climatização
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('inicio')} className="text-foreground hover:text-primary transition-colors font-medium">
              Início
            </button>
            <button onClick={() => scrollToSection('servicos')} className="text-foreground hover:text-primary transition-colors font-medium">
              Serviços
            </button>
            <button onClick={() => scrollToSection('sobre')} className="text-foreground hover:text-primary transition-colors font-medium">
              Sobre
            </button>
            <button onClick={() => scrollToSection('contato')} className="text-foreground hover:text-primary transition-colors font-medium">
              Contato
            </button>
            <Button 
              size="sm" 
              className="bg-secondary hover:bg-secondary-light text-white"
              asChild
            >
              <a href="https://contate.me/maisclim" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Agendar Agora
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 hover:bg-muted rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <button 
              onClick={() => scrollToSection('inicio')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Início
            </button>
            <button 
              onClick={() => scrollToSection('servicos')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Serviços
            </button>
            <button 
              onClick={() => scrollToSection('sobre')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Sobre
            </button>
            <button 
              onClick={() => scrollToSection('contato')} 
              className="block w-full text-left px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >
              Contato
            </button>
            <Button 
              size="sm" 
              className="w-full bg-secondary hover:bg-secondary-light text-white"
              asChild
            >
              <a href="https://wa.me/5584994358723" target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                Agendar Agora
              </a>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
