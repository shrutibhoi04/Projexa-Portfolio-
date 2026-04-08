import { Instagram, MessageCircle, Send } from 'lucide-react';

export function Community() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#0B1220] via-[#1a2332] to-[#0B1220]">
      
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2196F3] rounded-full opacity-5 blur-[150px]" />
      </div>
      
      <div className="relative max-w-5xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Join the Projexa Community
        </h2>
        
        {/* Subtext */}
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Connect with students, get updates, and stay ahead with Projexa
        </p>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          
          {/* Instagram */}
          <a
            href="https://instagram.com/projexa.students"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-[#E1306C]/20 to-[#C13584]/20 hover:from-[#E1306C]/30 hover:to-[#C13584]/30 border border-[#E1306C]/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#E1306C]/20"
          >
            <div className="flex items-center gap-3">
              <Instagram className="w-6 h-6 text-[#E1306C]" />
              <div className="text-left">
                <div className="text-white font-bold">Instagram</div>
                <div className="text-sm text-gray-400">@projexa.students</div>
              </div>
            </div>
          </a>

          {/* WhatsApp */}
          <a
            href="https://chat.whatsapp.com/JlY4LAMALg271rhgtcEylZ"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-[#25D366]/20 to-[#128C7E]/20 hover:from-[#25D366]/30 hover:to-[#128C7E]/30 border border-[#25D366]/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#25D366]/20"
          >
            <div className="flex items-center gap-3">
              <MessageCircle className="w-6 h-6 text-[#25D366]" />
              <div className="text-left">
                <div className="text-white font-bold">WhatsApp</div>
                <div className="text-sm text-gray-400">Join Community</div>
              </div>
            </div>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/projexastudents"
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-br from-[#0088cc]/20 to-[#0077b5]/20 hover:from-[#0088cc]/30 hover:to-[#0077b5]/30 border border-[#0088cc]/30 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#0088cc]/20"
          >
            <div className="flex items-center gap-3">
              <Send className="w-6 h-6 text-[#0088cc]" />
              <div className="text-left">
                <div className="text-white font-bold">Telegram</div>
                <div className="text-sm text-gray-400">@projexastudents</div>
              </div>
            </div>
          </a>

        </div>
      </div>
    </section>
  );
}