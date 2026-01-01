
import React, { useState } from 'react';
import {
  ArrowRight,
  Users,
  Zap,
  Briefcase,
  Award,
  ShoppingBag,
  Heart,
  PlayCircle,
  Calendar,
  MapPin,
  Phone,
  X,
  Maximize2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { INITIATIVES, IMPACT_STATS, TESTIMONIALS, UPCOMING_EVENTS, NEWS_IMAGES } from '../constants';

const Home: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users size={24} />;
      case 'Zap': return <Zap size={24} />;
      case 'Briefcase': return <Briefcase size={24} />;
      case 'Award': return <Award size={24} />;
      case 'ShoppingBag': return <ShoppingBag size={24} />;
      case 'Heart': return <Heart size={24} />;
      default: return <Users size={24} />;
    }
  };

  return (
    <div className="w-full">
      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-lemonGreen transition-colors z-50">
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-transparent z-10" />
          <img
            src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop"
            alt="Village women working together"
            className="w-full h-full object-cover object-center scale-105 animate-[pulse_10s_infinite]"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1.5 bg-lemonGreen/20 text-black text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-lemonGreen/30 mb-8 animate-bounce">
              Empowering 10,000+ Rural Women
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-black leading-[0.9] mb-8">
              Building Future <br />
              <span className="text-transparent stroke-black stroke-2" style={{ WebkitTextStroke: '2px black' }}>Through</span> <br />
              <span className="bg-lemonGreen px-2">Empowerment</span>
            </h1>
            <p className="text-xl text-gray-600 mb-10 max-w-xl leading-relaxed">
              We provide the tools, training, and confidence to help Indian village women transform into entrepreneurs and community leaders.
            </p>
            <div className="flex flex-wrap gap-5">
              <Link to="/contact" className="px-10 py-5 bg-lemonGreen text-black font-bold text-lg rounded-full flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300 lemon-shadow">
                Start Supporting <ArrowRight size={20} />
              </Link>
              <Link to="/about" className="px-10 py-5 bg-white border-2 border-black text-black font-bold text-lg rounded-full flex items-center gap-3 hover:bg-black hover:text-white transition-all duration-300">
                Learn More <PlayCircle size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            {IMPACT_STATS.map((stat, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                <div className="relative mb-4">
                  <div className="w-24 h-24 rounded-full border-4 border-lemonGreen flex items-center justify-center group-hover:bg-lemonGreen transition-colors duration-500">
                    <span className="text-3xl font-black text-black">{stat.value}</span>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-black rounded-full" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-gray-500">{stat.label}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Key Events Section */}
      <section className="py-24 bg-white border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">
              Exhibitions & Platforms
            </span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Our Key <span className="text-[#CCFF00]">Events</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Milestone exhibitions supported by the Ministry of MSME, fostering women entrepreneurship and self-reliance in Madhya Pradesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16">
            {UPCOMING_EVENTS.map((event) => (
              <div
                key={event.id}
                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500"
              >

                {/* Banner Image Container with exact ratio */}
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "468/312" }}>
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-contain group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>

                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-2 mb-5 text-xs font-bold text-[#CCFF00] uppercase tracking-tighter">
                    <Award size={16} />
                    <span>Official Partner: {event.support}</span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-black mb-5 group-hover:text-[#CCFF00] transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-gray-500 mb-10 leading-relaxed text-lg">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center text-[#CCFF00] shrink-0">
                        <Calendar size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Schedule</p>
                        <p className="text-sm font-bold">{event.date} {event.time && `| ${event.time}`}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#CCFF00]/10 rounded-xl flex items-center justify-center text-[#CCFF00] shrink-0">
                        <MapPin size={18} />
                      </div>
                      <div>
                        <p className="text-xs font-black text-gray-400 uppercase tracking-widest">Venue</p>
                        <p className="text-sm font-bold line-clamp-2">{event.venue}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 mb-10 p-5 bg-gray-50 rounded-2xl border-l-4 border-[#CCFF00]">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Phone size={14} />
                      <span className="text-[10px] font-black uppercase tracking-widest">Support Line</span>
                    </div>
                    <p className="font-bold text-lg">{event.contacts.join(" | ")}</p>
                  </div>

                  <Link to="/contact" className="inline-flex items-center gap-3 font-black text-sm uppercase tracking-[0.2em] border-b-2 border-[#CCFF00] pb-1 hover:gap-6 transition-all">
                    Register For Event <ArrowRight size={18} />
                  </Link>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>


      {/* News & Updates Section (Image Grid with Lightbox) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-400 mb-2 block">Latest From Field</span>
            <h2 className="text-4xl md:text-5xl font-black mb-6">News & <span className="text-lemonGreen">Updates</span></h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Visual stories of training workshops, handmade products, and cultural leadership programs.</p>
          </div>

          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {NEWS_IMAGES.map((img, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-3xl cursor-pointer break-inside-avoid shadow-sm active:scale-[0.98] transition-all"
                onClick={() => setSelectedImage(img)}
              >
                <img
                  src={img}
                  loading="lazy"
                  alt={`Update ${idx + 1}`}
                  className="w-full h-auto block object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-lemonGreen/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-black shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <Maximize2 size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Our Core Initiatives</h2>
            <div className="w-24 h-2 bg-lemonGreen mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {INITIATIVES.map((item) => (
              <div key={item.id} className="bg-white p-10 rounded-3xl border border-gray-100 hover:border-lemonGreen hover-lemon-glow transition-all duration-300 group">
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-black mb-8 group-hover:bg-lemonGreen transition-colors duration-300">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-500 leading-relaxed mb-8">
                  {item.description}
                </p>
                <Link to="/contact" className="font-bold flex items-center gap-2 group-hover:text-lemonGreen transition-colors">
                  Get Involved <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-lemonGreen/5">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black mb-6">Voices Of Change</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Hear from the women whose lives have been transformed through our initiatives.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((test) => (
              <div key={test.id} className="bg-white p-10 rounded-3xl shadow-sm border border-black/5 flex flex-col items-center text-center">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-20 h-20 rounded-full object-cover mb-6 ring-4 ring-lemonGreen/30"
                />
                <p className="text-gray-600 italic mb-8 leading-relaxed">"{test.content}"</p>
                <div>
                  <h4 className="font-bold text-lg">{test.name}</h4>
                  <p className="text-sm font-bold text-lemonGreen uppercase tracking-widest">{test.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-black text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-lemonGreen/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight">
            Ready to make a <br /> <span className="text-lemonGreen">Real Difference?</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="px-12 py-5 bg-lemonGreen text-black font-extrabold text-xl rounded-full hover:scale-105 transition-transform lemon-shadow">
              Volunteer with Us
            </Link>
            <Link to="/contact" className="px-12 py-5 border-2 border-white text-white font-extrabold text-xl rounded-full hover:bg-white hover:text-black transition-all">
              Donate Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
