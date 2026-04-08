import { Instagram, MessageCircle, Send, Mail, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative py-16 px-6 bg-gradient-to-br from-[#0B1220] via-[#1a2332] to-[#0B1220] border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-[#2196F3]" />
              <h3 className="text-3xl font-black bg-gradient-to-r from-[#2196F3] to-[#FF8008] bg-clip-text text-transparent">
                Projexa
              </h3>
            </div>
            <p className="text-gray-400 leading-relaxed mb-4">
              Build. Create. Stand out.
            </p>
            <p className="text-gray-500 text-sm">
              Empowering students with professional solutions for their academic and career needs.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="text-gray-400 hover:text-[#2196F3] transition-colors">
                  Our Services
                </a>
              </li>
              <li>
                <a href="#request-form" className="text-gray-400 hover:text-[#2196F3] transition-colors">
                  Request Work
                </a>
              </li>
              <li>
                <a href="https://instagram.com/projexa.students" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#2196F3] transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <a 
                href="mailto:projexa.students@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-[#2196F3] transition-colors"
              >
                <Mail className="w-5 h-5" />
                projexa.students@gmail.com
              </a>
              
              <div className="flex items-center gap-3 pt-4">
                <a
                  href="https://instagram.com/projexa.students"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#E1306C]/20 border border-white/10 hover:border-[#E1306C]/50 rounded-lg flex items-center justify-center transition-all group"
                >
                  <Instagram className="w-5 h-5 text-gray-400 group-hover:text-[#E1306C] transition-colors" />
                </a>
                
                <a
                  href="https://chat.whatsapp.com/JlY4LAMALg271rhgtcEylZ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#25D366]/20 border border-white/10 hover:border-[#25D366]/50 rounded-lg flex items-center justify-center transition-all group"
                >
                  <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-[#25D366] transition-colors" />
                </a>
                
                <a
                  href="https://t.me/projexastudents"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/5 hover:bg-[#0088cc]/20 border border-white/10 hover:border-[#0088cc]/50 rounded-lg flex items-center justify-center transition-all group"
                >
                  <Send className="w-5 h-5 text-gray-400 group-hover:text-[#0088cc] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © 2026 Projexa. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm">
              Made with <span className="text-[#FF8008]">❤️</span> for students
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
