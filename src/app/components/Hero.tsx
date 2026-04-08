import { Rocket, ArrowRight } from 'lucide-react';
import logo from "../assets/projexa.png";

export function Hero() {
  const scrollToForm = () => {
    const formSection = document.getElementById('request-form');
    formSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">

      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1220] via-[#1a2332] to-[#0B1220]" />

      {/* Glow Effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2196F3] rounded-full opacity-10 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#FF8008] rounded-full opacity-10 blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

      {/* 🚀 BACKGROUND LOGO - FINAL POLISH */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <img
          src={logo}
          alt="Projexa Logo Background"
          className="
      w-[200px] sm:w-[260px] md:w-[500px]
      opacity-55 sm:opacity-20 md:opacity-20
      -translate-y-32 sm:-translate-y-12 md:translate-y-0
      object-contain
    "
        />
      </div>
      {/* 🚀 TOP-LEFT LOGO */}
      <div className="absolute top-6 sm:top-8 left-0 z-20 pl-3 sm:pl-4">
        <img
          src={logo}
          alt="Projexa Logo"
          className="h-30 sm:h-15 md:h-20 object-contain"
        />
      </div>


      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-16 md:mt-0">



        {/* Tag */}
        <div className="inline-block mb-6 px-4 py-2 bg-[#2196F3]/10 border border-[#2196F3]/30 rounded-full">
          <span className="text-[#2196F3] font-semibold text-sm tracking-wide">
            STUDENT-FOCUSED PLATFORM
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-white to-gray-300 bg-clip-text text-transparent">
            You panic.
          </span>
          <br />
          <span className="bg-gradient-to-r from-[#2196F3] to-[#FF8008] bg-clip-text text-transparent">
            We build.
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
          Projexa helps students build software projects and complete academic work
          with structured guidance and professional support.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToForm}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#FF8008] to-[#ff9933] text-white font-bold rounded-xl shadow-lg hover:shadow-[#FF8008]/50 hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
          >
            Request Your Work
            <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </button>

          <button
            onClick={scrollToServices}
            className="px-8 py-4 bg-transparent text-white font-bold rounded-xl border-2 border-[#2196F3] hover:bg-[#2196F3]/10 transition-all duration-300 flex items-center gap-2"
          >
            Explore Services
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}