import { Send, Search, Wrench, CheckCircle } from 'lucide-react';

const steps = [
  {
    icon: Send,
    number: '01',
    title: 'Submit Your Requirement',
    description: 'Fill out our simple form with your project details and deadline'
  },
  {
    icon: Search,
    number: '02',
    title: 'We Review',
    description: 'Our team analyzes your requirements and prepares a tailored plan'
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Execution',
    description: 'We build your project with regular updates and quality checks'
  },
  {
    icon: CheckCircle,
    number: '04',
    title: 'Final Delivery',
    description: 'Receive your completed work with documentation and support'
  }
];

export function HowItWorks() {
  return (
    <section className="relative py-24 px-6 bg-[#0B1220]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            How It Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Simple, transparent process from start to finish
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Lines (Desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2196F3]/30 to-transparent" />
          
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative"
              >
                <div className="relative p-8 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm rounded-2xl border border-white/10 hover:border-[#2196F3]/50 transition-all duration-300 group">
                  {/* Number Badge */}
                  <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-gradient-to-br from-[#2196F3] to-[#FF8008] flex items-center justify-center shadow-lg shadow-[#2196F3]/30">
                    <span className="text-2xl font-black text-white">{step.number}</span>
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6 mt-4">
                    <Icon className="w-12 h-12 text-[#2196F3] group-hover:text-[#FF8008] transition-colors" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-white">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
