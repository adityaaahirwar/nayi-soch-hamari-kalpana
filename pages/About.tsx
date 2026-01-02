import React, { useState } from 'react';
import { 
  Target, 
  Eye, 
  Users2, 
  ShieldCheck, 
  ArrowRight, 
  Camera, 
  Maximize2, 
  Award, 
  Calendar, 
  MapPin, 
  Phone,
  X
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { TEAM, UPCOMING_EVENTS, NEWS_IMAGES } from '../constants';

const About: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="w-full bg-white">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-brandPurple transition-colors z-50">
            <X size={40} />
          </button>
          <img 
            src={selectedImage} 
            alt="Full Preview" 
            className="max-w-full max-h-full object-contain rounded-xl shadow-2xl animate-in zoom-in duration-300"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Hero Header */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden bg-white">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop" 
            alt="Village women leadership"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <nav className="flex justify-center items-center gap-2 mb-4 text-white font-bold text-xs md:text-sm uppercase tracking-widest">
            <Link to="/" className="hover:text-brandPurple transition-colors">Home</Link>
            <ArrowRight size={14} />
            <span className="text-brandPurple">About Us</span>
          </nav>
          <h1 className="text-4xl md:text-8xl font-black text-white leading-tight">
            Our <span className="text-brandPurple">Story</span>
          </h1>
          <p className="text-white/80 text-base md:text-xl max-w-2xl mx-auto mt-4 font-medium px-4">
            Founded by the people, for the people. A decade of transforming lives in rural India.
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10" />
      </section>

      {/* Intro Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 relative z-20 -mt-8 bg-white rounded-t-[2.5rem] md:rounded-t-[3rem]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-6xl font-black mb-6 md:mb-8 leading-tight text-brandPurple">Who We Are</h2>
          <div className="w-16 md:w-24 h-1.5 md:h-2 bg-brandPurple mx-auto rounded-full mb-8 md:mb-10" />
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-10 md:mb-12">
            Nayi Soch Humari Kalpna Mahila Mandal is more than just an NGO. It is a movement started by a group of dedicated village women who believed that self-reliance is the first step toward true liberation.
          </p>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-gray-100 brand-hover-glow transition-all group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-brandPurple/10 rounded-2xl flex items-center justify-center text-brandPurple mb-6 md:mb-8 group-hover:bg-brandPurple group-hover:text-white transition-colors">
                <Target size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-brandPurple">Our Mission</h3>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                To transform rural landscapes by equipping every woman with skills that translate into economic independence.
              </p>
            </div>
            <div className="bg-white p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-sm border border-gray-100 brand-hover-glow transition-all group">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-brandPurple/10 rounded-2xl flex items-center justify-center text-brandPurple mb-6 md:mb-8 group-hover:bg-brandPurple group-hover:text-white transition-colors">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6 text-brandPurple">Our Vision</h3>
              <p className="text-gray-500 text-base md:text-lg leading-relaxed">
                A nation where village borders do not limit a woman's dreams, powered by the leadership and entrepreneurship of its women.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Key Events Section */}
      <section className="py-24 bg-white overflow-hidden border-y border-gray-50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/3">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-brandPurple rounded flex items-center justify-center text-white">
                   <Award size={20} />
                </div>
                <span className="text-xs font-black uppercase tracking-widest text-gray-400">Major Milestones</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-black mb-6 leading-tight text-brandPurple">Our Key <span className="text-brandPurple">Events</span></h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                Our Swayam Exhibitions in Jabalpur and Narsinghpur are dedicated to village entrepreneurship and handmade products.
              </p>
              <div className="flex flex-col gap-4">
                 <div className="p-5 bg-white rounded-2xl border-l-4 border-brandPurple brand-shadow">
                    <p className="font-bold text-base text-brandPurple">MSME Supported</p>
                    <p className="text-sm text-gray-500">Milestone programs empowering rural women innovation.</p>
                 </div>
                 <div className="p-5 bg-white rounded-2xl border-l-4 border-brandPurple brand-shadow">
                    <p className="font-bold text-base text-brandPurple">Economic Growth</p>
                    <p className="text-sm text-gray-500">Creating self-reliance through handmade exhibitions.</p>
                 </div>
              </div>
            </div>
            
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-8">
              {UPCOMING_EVENTS.map((event) => (
                <div key={event.id} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 card-deep-shadow transition-colors group">
                  <div className="flex justify-between items-start mb-6">
                    <span className="px-4 py-1.5 bg-brandPurple text-white font-black text-xs uppercase tracking-widest rounded-full">
                      {event.locationBadge}
                    </span>
                    <Calendar size={24} className="text-gray-300 group-hover:text-brandPurple transition-colors" />
                  </div>
                  <h4 className="text-2xl font-black mb-4 leading-tight text-brandPurple">{event.title}</h4>
                  <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                      <MapPin size={18} className="text-brandPurple shrink-0" />
                      <span>{event.venue}</span>
                    </div>
                    <div className="flex items-start gap-3 text-sm text-gray-500 font-medium">
                      <Phone size={18} className="text-brandPurple shrink-0" />
                      <span>{event.contacts.join(' | ')}</span>
                    </div>
                  </div>
                  <Link to="/contact" className="text-xs font-black uppercase tracking-[0.2em] flex items-center gap-2 text-brandPurple hover:gap-4 transition-all">
                    Join Event <ArrowRight size={16} />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Updates & Progress</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-brandPurple">News & <span className="text-brandPurple">Updates</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Click any image to view moments of transformation and cultural leadership.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {NEWS_IMAGES.map((img, idx) => (
              <div 
                key={idx} 
                className="relative group aspect-square overflow-hidden rounded-3xl cursor-pointer shadow-sm active:scale-95 transition-all"
                onClick={() => setSelectedImage(img)}
              >
                <img 
                  src={img} 
                  loading="lazy"
                  alt={`Update ${idx + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-brandPurple/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                   <Maximize2 size={32} className="text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-6xl font-black mb-6 text-brandPurple">The Heart of Our NGO</h2>
            <p className="text-gray-500 max-w-2xl mx-auto text-lg">Leading with empathy, courage, and a vision for a better tomorrow.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {TEAM.map((member, i) => (
              <div key={i} className="group flex flex-col items-center text-center">
                <div className="relative mb-8 w-full aspect-square overflow-hidden rounded-[2.5rem] bg-white border border-gray-100 brand-shadow">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>
                <h4 className="text-2xl font-black mb-1 text-brandPurple">{member.name}</h4>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact CTA Section */}
      <section className="pb-24 pt-8 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-[3rem] md:rounded-[4rem] p-10 md:p-20 overflow-hidden relative border border-gray-100 brand-shadow">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brandPurple/5 blur-[100px] rounded-full" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-black text-brandPurple mb-8">Decade of <span className="text-brandPurple">Impact</span></h2>
                <div className="space-y-6">
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 shrink-0 text-brandPurple"><ShieldCheck size={24} /></div>
                    <p className="text-gray-600 text-lg">Awarded as the "Best Women Self-Help Group" in Jabalpur (2018).</p>
                  </div>
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 shrink-0 text-brandPurple"><Users2 size={24} /></div>
                    <p className="text-gray-600 text-lg">Empowering village women through handmade programs and MSME support.</p>
                  </div>
                </div>
                <div className="mt-12">
                  <Link to="/contact" className="px-10 py-5 bg-brandPurple text-white font-black text-lg rounded-full inline-flex items-center gap-3 hover:bg-black transition-all">
                    Support the Mission <ArrowRight size={20} />
                  </Link>
                </div>
              </div>
              <div className="hidden md:block">
                 <img src={NEWS_IMAGES[4]} className="rounded-3xl shadow-[30px_-30px_0px_#270B3E]" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;