import { Wrench, Calendar, Sparkles, FileCheck, Check } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Wrench,
    title: "Instalação",
    description: "Instalação seguindo todas as normas dos fabricantes com garantia de 1 ano na mão de obra.",
    features: [
      "Normas técnicas",
      "Garantia 1 ano",
      "Equipamentos certificados"
    ],
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: Calendar,
    title: "Manutenção",
    description: "Manutenção preventiva e corretiva com laudos prescritos e contratos PMOC.",
    features: [
      "Preventiva",
      "Corretiva",
      "Laudos técnicos"
    ],
    color: "from-secondary to-secondary-light"
  },
  {
    icon: Sparkles,
    title: "Higienização",
    description: "Método inovador com bolsa coletora para maior eficiência e rapidez no serviço.",
    features: [
      "Bolsa coletora",
      "Método inovador",
      "Desconto múltiplos aparelhos"
    ],
    color: "from-cyan-500 to-cyan-600"
  },
  {
    icon: FileCheck,
    title: "Contratos PMOC",
    description: "Planos de manutenção para empresas com garantia e proteção dos equipamentos.",
    features: [
      "Empresarial",
      "Proteção garantida",
      "Laudos técnicos"
    ],
    color: "from-purple-500 to-purple-600"
  }
];

export const Services = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold">
            Soluções Completas
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em climatização para residências, comércios e indústrias
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card 
                key={index} 
                className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20 group"
              >
                {/* Icon with gradient background */}
                <div className="mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground">
                      <Check className="w-5 h-5 text-secondary flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
