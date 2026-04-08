import { Code, FileText, Presentation, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Software Projects',
    description: 'Full-stack web apps, mobile apps, and custom software solutions built with modern technologies.',
    gradient: 'from-[#2196F3] to-[#1976D2]'
  },
  {
    icon: FileText,
    title: 'ATS-Friendly Resumes',
    description: 'Professional resumes optimized for applicant tracking systems to help you land interviews.',
    gradient: 'from-[#FF8008] to-[#FFA726]'
  },
  {
    icon: Presentation,
    title: 'PowerPoint Presentations',
    description: 'Engaging, visually stunning presentations that captivate your audience and convey your message.',
    gradient: 'from-[#2196F3] to-[#00BCD4]'
  },
  {
    icon: BookOpen,
    title: 'Project Reports',
    description: 'Well-researched, professionally formatted reports that meet academic standards and requirements.',
    gradient: 'from-[#FF8008] to-[#FF6B35]'
  }
];

export function Services() {
  return (
    <section id="services" className="relative py-24 px-6 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Professional solutions tailored for students, delivered with excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#2196F3]/50 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-[#2196F3]/20"
              >
                {/* Icon with Gradient Background */}
                <div className={`w-16 h-16 mb-6 rounded-xl bg-gradient-to-br ${service.gradient} p-0.5`}>
                  <div className="w-full h-full bg-[#0B1220] rounded-xl flex items-center justify-center">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-[#2196F3] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 blur-xl`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
