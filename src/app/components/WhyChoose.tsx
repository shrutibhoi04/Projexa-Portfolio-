import { Target, Trophy, Users, MessageCircle } from 'lucide-react';

const reasons = [
  {
    icon: Target,
    title: 'Structured Guidance',
    description: 'Clear roadmaps and methodical approach to every project'
  },
  {
    icon: Trophy,
    title: 'Professional Output',
    description: 'Industry-standard quality that stands out'
  },
  {
    icon: Users,
    title: 'Student-Focused',
    description: 'Built specifically for student needs and deadlines'
  },
  {
    icon: MessageCircle,
    title: 'Reliable Communication',
    description: 'Regular updates and responsive support throughout'
  }
];

export function WhyChoose() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#0B1220] via-[#162136] to-[#0B1220]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Why Choose Projexa?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We're not just another service—we're your partner in academic success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="text-center group"
              >
                {/* Icon Container */}
                <div className="relative mx-auto w-24 h-24 mb-6">
                  {/* Outer Glow Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#2196F3] to-[#FF8008] opacity-20 blur-xl group-hover:opacity-40 transition-opacity" />
                  
                  {/* Icon Background */}
                  <div className="relative w-full h-full rounded-full bg-gradient-to-br from-[#2196F3]/20 to-[#FF8008]/20 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {reason.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
