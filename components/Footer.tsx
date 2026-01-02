import React from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Heart, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-20 pb-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-12">
        <div className="col-span-1 md:col-span-1">
          <Link to="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 flex items-center justify-center">
            <img
              src="/assets/logo/Nayi-Soch-Humari-Kalpna.png"
              alt="Nayi Soch Humari Kalpna Logo"
              className="w-10 h-10 object-contain"
            />
          </div>
            <div>
              <h1 className="font-bold text-lg leading-tight">Nayi Soch Humari Kalpna</h1>
              <p className="text-[10px] uppercase tracking-widest text-lemonGreen font-semibold">Mahila Mandal</p>
            </div>
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Empowering the backbone of rural India through skills, leadership, and community welfare since 2010.
          </p>
          <div className="flex gap-4">
  {[
    { Icon: Instagram, link: "https://www.instagram.com/nayisochhamarikalpana/" },
    { Icon: Facebook, link: "#" },
    { Icon: Youtube, link: "https://www.youtube.com/@nayisochhamarikalpana5718" },
  ].map((item, i) => (
    <a
      key={i}
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-brandPurple hover:text-white hover:border-brandPurple transition-all"
    >
      <item.Icon size={18} />
    </a>
  ))}
</div>

        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Quick Links</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-brandPurple transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-brandPurple transition-colors">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-brandPurple transition-colors">Contact Us</Link></li>
            <li><a href="https://Nayisochhamarikalpana.org" className="hover:text-brandPurple transition-colors">Nayisochhamarikalpana.org</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-white shrink-0" />
              <span>3/5, A BLOCK, PHASE 1, DUTT ARCADE, CIVIL LINE, JABALPUR – 482001, Madhya Pradesh, India</span>
            </li>
            <li className="flex flex-col gap-2">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-white shrink-0" />
                <span>+91 9907087675</span>
              </div>
              <div className="flex items-center gap-3 ml-7">
                <span>+91 7489384141</span>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-white shrink-0" />
              <span className="break-all">dr.kalpanamishra70@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-6">Newsletter</h4>
          <p className="text-sm text-gray-400 mb-4">Stay updated with our stories of change.</p>
          <form className="relative">
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-white/10 border border-white/20 rounded-lg py-3 px-4 text-sm focus:outline-none focus:border-brandPurple transition-colors"
            />
            <button className="absolute right-2 top-2 bottom-2 px-4 bg-brandPurple text-white font-bold text-xs rounded-md">
              Join
            </button>
          </form>
        </div>
      </div>
      
      <div className="container mx-auto px-6 pt-10 flex flex-col md:row justify-between items-center gap-4 text-xs text-gray-500 font-medium tracking-wider text-center">
        <p>&copy; {new Date().getFullYear()} Nayi Soch Humari Kalpna Mahila Mandal. Registered in Jabalpur, MP.</p>
        <div className="flex items-center gap-1">
          Made with <Heart size={12} className="text-red-500 fill-red-500" /> for the women of India.
        </div>
      </div>
    </footer>
  );
};

export default Footer;