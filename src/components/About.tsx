import { Award, Users, Clock, ThumbsUp } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "500+",
    label: "Clientes Satisfeitos"
  },
  {
    icon: Clock,
    value: "10+",
    label: "Anos de Experiência"
  },
  {
    icon: Award,
    value: "1000+",
    label: "Serviços Realizados"
  },
  {
    icon: ThumbsUp,
    value: "98%",
    label: "Satisfação"
  }
];

export const About = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary via-primary-dark to-primary-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-semibold">
            Sobre Nós
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Especialistas em Climatização
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
            Somos uma empresa especializada em climatização, oferecendo serviços de instalação, manutenção e higienização de aparelhos de ar-condicionado com excelência e profissionalismo.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div 
                key={index} 
                className="text-center group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/20">
                    <Icon className="w-8 h-8 text-secondary" />
                  </div>
                </div>
                <div className="text-4xl font-bold mb-2 text-secondary-light">
                  {stat.value}
                </div>
                <div className="text-white/80 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>

        {/* Content */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Nossa Missão</h3>
              <p className="text-white/90 leading-relaxed">
                Proporcionar conforto térmico com serviços de qualidade, garantindo a satisfação dos nossos clientes através de profissionalismo, pontualidade e transparência em todos os atendimentos.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Nossos Valores</h3>
              <ul className="space-y-3 text-white/90">
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span>Comprometimento com a qualidade e excelência</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span>Atendimento transparente e honesto</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award className="w-5 h-5 text-secondary flex-shrink-0 mt-1" />
                  <span>Respeito aos prazos e pontualidade</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
