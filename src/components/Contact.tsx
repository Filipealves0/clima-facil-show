import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Fale Conosco
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Estamos prontos para atender você. Entre em contato e solicite seu orçamento!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Telefone / WhatsApp</h3>
                  <p className="text-muted-foreground mb-2">Atendimento rápido via WhatsApp</p>
                  <a 
                    href="tel:+5584994358723" 
                    className="text-secondary font-semibold text-lg hover:underline"
                  >
                    (84) 99435-8723
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">E-mail</h3>
                  <p className="text-muted-foreground mb-2">Envie sua mensagem</p>
                  <a 
                    href="mailto:contato@climatizacao.com.br" 
                    className="text-primary font-semibold hover:underline"
                  >
                    contato@climatizacao.com.br
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Localização</h3>
                  <p className="text-muted-foreground">
                    Atendemos Natal/RN e região metropolitana
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-secondary/10">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2 text-foreground">Horário de Atendimento</h3>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 8h às 18h
                    <br />
                    Sábado: 8h às 13h
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Card */}
          <div className="bg-gradient-to-br from-primary via-primary-dark to-primary-dark rounded-2xl p-8 md:p-12 text-white shadow-lg flex flex-col justify-center">
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Solicite seu Orçamento Gratuito
                </h3>
                <p className="text-white/90 text-lg leading-relaxed">
                  Entre em contato agora mesmo via WhatsApp e receba um atendimento personalizado em até 3 minutos!
                </p>
              </div>

              <div className="space-y-4">
                <Button 
                  size="lg" 
                  className="w-full bg-secondary hover:bg-secondary-light text-white shadow-[0_8px_24px_rgba(16,185,129,0.3)] hover:shadow-[0_12px_32px_rgba(16,185,129,0.4)] transition-all duration-300 py-6 text-lg rounded-xl group"
                  asChild
                >
                  <a href="https://wa.me/5584994358723" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                    WhatsApp: (84) 99435-8723
                  </a>
                </Button>

                <div className="text-center text-white/70 text-sm">
                  Resposta rápida garantida!
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-light">3min</div>
                  <div className="text-sm text-white/70">Tempo de resposta</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-light">24/7</div>
                  <div className="text-sm text-white/70">Emergências</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary-light">100%</div>
                  <div className="text-sm text-white/70">Satisfação</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
