import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, CheckCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  // Updated FormSubmit endpoint with the NGO owner's email
  const FORM_ENDPOINT = "https://formsubmit.co/dr.kalpanamishra70@gmail.com";

  return (
    <div className="pt-32 bg-white">
      <section className="container mx-auto px-6 mb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Contact Info */}
            <div className="animate-in fade-in slide-in-from-left duration-700">
              <h2 className="text-5xl md:text-7xl font-black mb-10 leading-tight text-brandPurple">Get in <span className="text-brandPurple">Touch</span></h2>
              <p className="text-xl text-gray-500 mb-12 max-w-md leading-relaxed">
                Connect with us to empower more women in Jabalpur and beyond. Reach out to collaborate or support our mission.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-brandPurple/5 flex items-center justify-center text-brandPurple group-hover:bg-brandPurple group-hover:text-white transition-colors duration-300">
                    <MapPin size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-brandPurple">Registered Office</h4>
                    <p className="text-gray-500">3/5, A BLOCK, PHASE 1, DUTT ARCADE, CIVIL LINE, JABALPUR – 482001, Madhya Pradesh, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-brandPurple/5 flex items-center justify-center text-brandPurple group-hover:bg-brandPurple group-hover:text-white transition-colors duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-brandPurple">Call Us</h4>
                    <p className="text-brandPurple font-bold text-lg">+91 99070 87675</p>
                    <p className="text-brandPurple font-bold text-lg">+91 74893 84141</p>
                  </div>
                </div>

                <div className="flex items-start gap-6 group">
                  <div className="w-14 h-14 rounded-2xl bg-brandPurple/5 flex items-center justify-center text-brandPurple group-hover:bg-brandPurple group-hover:text-white transition-colors duration-300">
                    <Mail size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-1 text-brandPurple">Email Us</h4>
                    <p className="text-brandPurple break-all font-medium">dr.kalpanamishra70@gmail.com</p>
                    <p className="text-xs text-gray-400 mt-1 uppercase tracking-tighter">Official NGO Communication</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <a 
                  href="https://wa.me/919907087675" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-black rounded-full hover:scale-105 hover:shadow-lg transition-all duration-300"
                >
                  <MessageSquare size={24} />
                  WhatsApp Us @ 9907087675
                </a>
              </div>
            </div>

            {/* Form */}
            <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-gray-100 brand-shadow lg:translate-y-[-20px]">
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-in fade-in zoom-in duration-500">
                  <div className="w-24 h-24 bg-brandPurple rounded-full flex items-center justify-center mb-8 shadow-lg">
                    <CheckCircle size={48} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-black mb-4 text-brandPurple">Message Sent!</h3>
                  <p className="text-gray-500 text-lg mb-8">
                    Thank you for reaching out to Nayi Soch Humari Kalpna Mahila Mandal. Our team in Jabalpur will get back to you shortly.
                  </p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="text-brandPurple font-bold border-b-2 border-brandPurple hover:text-black hover:border-black transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <>
                  <h3 className="text-3xl font-black mb-8 text-brandPurple">Inquiry Form</h3>
                  <form 
                    action={FORM_ENDPOINT} 
                    method="POST"
                    className="space-y-6"
                  >
                    {/* FormSubmit Configuration */}
                    <input type="hidden" name="_captcha" value="false" />
                    <input type="hidden" name="_template" value="table" />
                    <input type="hidden" name="_subject" value="New Website Inquiry - Jabalpur NGO" />
                    <input type="hidden" name="_next" value="https://Nayisochhamarikalpana.org/#/contact" />

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Name</label>
                        <input 
                          type="text" 
                          name="name"
                          required
                          placeholder="Enter your full name"
                          className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-brandPurple focus:ring-4 focus:ring-brandPurple/5 transition-all placeholder:text-gray-300"
                        />
                      </div>
                      <div className="flex flex-col gap-2">
                        <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Email</label>
                        <input 
                          type="email" 
                          name="email"
                          required
                          placeholder="Enter your email address"
                          className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-brandPurple focus:ring-4 focus:ring-brandPurple/5 transition-all placeholder:text-gray-300"
                        />
                      </div>
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Phone</label>
                      <input 
                        type="tel" 
                        name="phone"
                        required
                        placeholder="Enter your mobile number"
                        className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-brandPurple focus:ring-4 focus:ring-brandPurple/5 transition-all placeholder:text-gray-300"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="text-xs font-black uppercase tracking-widest text-gray-400 ml-2">Message</label>
                      <textarea 
                        name="message"
                        required
                        rows={5}
                        placeholder="Write your message or inquiry here..."
                        className="w-full bg-white border border-gray-200 rounded-2xl py-4 px-6 focus:outline-none focus:border-brandPurple focus:ring-4 focus:ring-brandPurple/5 transition-all placeholder:text-gray-300 resize-none"
                      ></textarea>
                    </div>

                    <button 
                      type="submit"
                      className="w-full py-5 bg-brandPurple text-white font-black text-lg rounded-2xl flex items-center justify-center gap-3 hover:bg-black hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 brand-shadow"
                    >
                      Submit Details <Send size={20} />
                    </button>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="w-full h-[500px] bg-white relative group overflow-hidden">
        <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-white via-transparent to-transparent h-32" />
        <iframe 
          title="NGO Office Location - Civil Line Jabalpur"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3668.2185564856424!2d79.94634287510705!3d23.162232979075354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981ae1767664c1b%3A0x86b026610738d2f6!2sCivil%20Lines%2C%20Jabalpur%2C%20Madhya%20Pradesh%20482001!5e0!3m2!1sen!2sin!4v1709650000000!5m2!1sen!2sin" 
          width="100%" 
          height="100%" 
          style={{ border: 0, filter: 'grayscale(100%) contrast(120%)' }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          className="transition-all duration-700 group-hover:grayscale-0"
        ></iframe>
      </section>
    </div>
  );
};

export default Contact;