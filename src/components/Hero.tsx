import { Button } from "@/components/ui/button";
import { Phone, Clock, Shield, CheckCircle2 } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-primary-dark to-primary px-4">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center space-y-8 animate-fade-in">
          {/* Badge */}
          <div className="inline-block">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium">
              <CheckCircle2 className="w-4 h-4" />
              Climatização Profissional
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            Seu Parceiro para
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary-light to-secondary">
              Climatização Completa
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Instalação, Manutenção Preventiva e Corretiva, Limpeza e Higienização e Carga de Gás
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button 
              size="lg" 
              className="bg-secondary hover:bg-secondary-light text-white shadow-[0_8px_24px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.4)] transition-all duration-300 px-8 py-6 text-lg rounded-xl group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 

              className="border-2 border-white/30 text-white hover:bg-white/10 backdrop-blur-sm px-8 py-6 text-lg rounded-xl"
            >
              (83) 98630-0683
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 text-white">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Clock className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">Pontualidade</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <Shield className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">Garantia</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-white">
              <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <span className="text-lg font-medium">Transparência</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-16 md:h-24 fill-background" viewBox="0 0 1440 120" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" />
        </svg>
      </div>
    </section>
  );
};
