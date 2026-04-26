import React from 'react';
import { MapPin, Clock, Phone, Facebook, Instagram, Youtube, MessageCircle, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[hsl(var(--secondary))] text-white relative overflow-hidden pt-16">
      {/* Decorative top wave */}
      <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-r from-[hsl(var(--primary))] via-[hsl(var(--sunny))] to-[hsl(var(--highlight))]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-playful">
                <span className="text-3xl">🌟</span>
              </div>
              <div>
                <span className="text-2xl font-extrabold tracking-tight text-white drop-shadow-sm">Bright Kids</span>
                <p className="text-sm font-bold text-[hsl(var(--sunny))]">By Mamta Singh</p>
              </div>
            </div>
            <p className="text-base font-medium leading-relaxed mb-6 text-white/90">
              Learning with love, care and success. Building strong foundations for your child's bright, colorful future!
            </p>
            <div className="inline-flex items-center gap-2 bg-[hsl(var(--primary))] text-white px-4 py-2 rounded-full font-bold text-sm shadow-md">
              <Heart className="w-4 h-4 fill-white" />
              15+ Years of Excellence
            </div>
          </div>

          <div>
            <span className="font-extrabold text-xl mb-6 block text-[hsl(var(--sunny))]">Quick Links</span>
            <ul className="space-y-3 font-semibold">
              <li><a href="#about" className="hover:text-[hsl(var(--sunny))] hover:translate-x-2 transition-all inline-block">About Teacher</a></li>
              <li><a href="#classes" className="hover:text-[hsl(var(--sunny))] hover:translate-x-2 transition-all inline-block">Class Details</a></li>
              <li><a href="#subjects" className="hover:text-[hsl(var(--sunny))] hover:translate-x-2 transition-all inline-block">Subjects We Teach</a></li>
              <li><a href="#testimonials" className="hover:text-[hsl(var(--sunny))] hover:translate-x-2 transition-all inline-block">Happy Parents</a></li>
              <li><a href="#faq" className="hover:text-[hsl(var(--sunny))] hover:translate-x-2 transition-all inline-block">FAQ</a></li>
            </ul>
          </div>

          <div>
            <span className="font-extrabold text-xl mb-6 block text-[hsl(var(--sunny))]">Get in Touch</span>
            <ul className="space-y-4 font-semibold">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-[hsl(var(--sunny))]" />
                <span>Kanpur, Uttar Pradesh</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-[hsl(var(--sunny))]" />
                <span>Daily: 5:00 PM - 6:00 PM</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[hsl(var(--sunny))]" />
                <span className="text-lg">+91-7753888040</span>
              </li>
              <li>
                <a 
                  href="https://wa.me/917753888040?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Bright%20Kids%20Classes" 
                  target="_blank" 
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 bg-[hsl(var(--whatsapp))] hover:brightness-110 text-white px-6 py-3 rounded-xl transition-all duration-300 shadow-[0_4px_10px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_15px_rgba(37,211,102,0.5)] hover:translate-y-[-2px] group mt-2 font-bold"
                >
                  <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
            
            <div className="flex gap-4 mt-8">
              <a href="#" className="w-10 h-10 bg-white text-[hsl(var(--secondary))] rounded-xl flex items-center justify-center hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-300 shadow-sm" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-[hsl(var(--secondary))] rounded-xl flex items-center justify-center hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-300 shadow-sm" aria-label="Instagram">
               <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white text-[hsl(var(--secondary))] rounded-xl flex items-center justify-center hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-300 shadow-sm" aria-label="YouTube">
                 <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white/20 mt-12 pt-8 text-center">
          <p className="font-semibold text-white/90">
            © 2026 Bright Kids Classes. All rights reserved.
          </p>
          <div className="flex justify-center gap-6 mt-4 text-sm font-medium text-white/75">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
