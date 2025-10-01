import { MessageCircle, Calendar, Wrench, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    title: "Consulta de Disponibilidade",
    description: "Entre em contato via WhatsApp e receba resposta em até 3 minutos",
    step: "01"
  },
  {
    icon: Calendar,
    title: "Agendamento",
    description: "Agendamos o serviço no horário mais conveniente para você",
    step: "02"
  },
  {
    icon: Wrench,
    title: "Execução",
    description: "Técnicos qualificados executam o serviço com ferramentas adequadas",
    step: "03"
  },
  {
    icon: CheckCircle,
    title: "Teste e Qualidade",
    description: "Verificação completa do funcionamento e garantia do serviço",
    step: "04"
  }
];

export const Process = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold">
            Processo de Atendimento
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Como Funciona Nosso Atendimento
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Um processo simples e eficiente para garantir o melhor serviço para você
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div 
                key={index} 
                className="relative group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-sm hover:shadow-md transition-all duration-300 border border-border h-full">
                  {/* Step Number */}
                  <div className="absolute -top-4 -right-4 w-12 h-12 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (hidden on last item and mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/4 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
