import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, Facebook, Twitter, Instagram, Linkedin, Youtube, Building2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    office: ''
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', subject: '', message: '', office: '' });
      }, 5000);
    }
  };

  // Updated with actual Brightway office data
  const offices = [
    {
      name: 'Head Office',
      location: 'Bagbazar',
      address: 'Simko Plaza, Level-1, Bagbazar-28, Kathmandu, Nepal',
      phones: ['01-4215449', '01-4248779'],
      email: 'info@brightway.com.np',
      hours: 'Sun-Fri: 10:00 AM - 6:00 PM',
      isHead: true
    },
    {
      name: 'Branch',
      location: 'Butwal',
      address: 'Milanchowk, Butwal, Nepal',
      phones: ['071-597296', '9849636051'],
      email: 'butwal@brightway.com.np',
      hours: 'Sun-Fri: 10:00 AM - 6:00 PM',
      isHead: false
    },
    {
      name: 'Branch',
      location: 'Koteshwor',
      address: 'Koteshwor Chowk, Kathmandu, Nepal',
      phones: ['01-5923194', '9763405512'],
      email: 'koteshwor@brightway.com.np',
      hours: 'Sun-Fri: 10:00 AM - 6:00 PM',
      isHead: false
    },
    {
      name: 'Branch',
      location: 'Banepa',
      address: 'Chardobato Chowk, Banepa, Kavre, Nepal',
      phones: ['01-1665831', '9767229368'],
      email: 'banepa@brightway.com.np',
      hours: 'Sun-Fri: 10:00 AM - 6:00 PM',
      isHead: false
    },
    {
      name: 'Branch',
      location: 'Biratnagar',
      address: 'Mahendra Chowk, Biratnagar, Nepal',
      phones: ['9827302716', '9842028198'],
      email: 'biratnagar@brightway.com.np',
      hours: 'Sun-Fri: 10:00 AM - 6:00 PM',
      isHead: false
    },
    {
      name: 'Branch',
      location: 'Surkhet',
      address: 'Birendranagar-8, Campus Road, Surkhet, Nepal',
      phones: ['083-590829', '9858032729'],
      email: 'surkhet@brightway.com.np',
      hours: 'Sun-Fri: 10:00 AM - 6:00 PM',
      isHead: false
    },
    {
      name: 'Branch',
      location: 'Murgiya',
      address: 'Sainamaina -8, Murgiya, Rupandehi, Nepal',
      phones: ['071-592003', '9860012097'],
      email: 'murgiya@brightway.com.np',
      hours: 'Sun-Fri: 10:00 AM - 6:00 PM',
      isHead: false
    },
    {
      name: 'Branch',
      location: 'Kirtipur',
      address: 'Pagadobato, Kirtipur, Kathmandu, Nepal',
      phones: ['9845166652'],
      email: 'kirtipur@brightway.com.np',
      hours: 'Sun-Fri: 10:00 AM - 6:00 PM',
      isHead: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Have questions about studying abroad? Our expert counselors are ready to guide you every step of the way.
          </p>
        </div>
      </div>

      {/* Quick Contact Info Bar */}
      <div className="bg-white shadow-md -mt-8 relative z-10 mx-4 sm:mx-8 lg:mx-16 rounded-lg border-t-4 border-brand-red">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
          <div className="flex items-center justify-center p-6 gap-3">
            <Phone className="w-6 h-6 text-brand-blue" />
            <div>
              <p className="text-sm text-gray-500">Call Us</p>
              <p className="font-semibold text-gray-900">01-4215449</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 gap-3">
            <Mail className="w-6 h-6 text-brand-blue" />
            <div>
              <p className="text-sm text-gray-500">Email Us</p>
              <p className="font-semibold text-gray-900">info@brightway.com.np</p>
            </div>
          </div>
          <div className="flex items-center justify-center p-6 gap-3">
            <Clock className="w-6 h-6 text-brand-blue" />
            <div>
              <p className="text-sm text-gray-500">Office Hours</p>
              <p className="font-semibold text-gray-900">Sun-Fri: 10AM-6PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center animate-fade-in">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent Successfully!</h3>
                  <p className="text-green-700">Thank you for contacting Brightway. Our counseling team will reach out to you within 24 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-brand-red ring-1 ring-brand-red' : 'border-gray-300'} focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all`}
                        placeholder="Your full name"
                      />
                      {errors.name && <p className="mt-1 text-sm text-brand-red">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-brand-red ring-1 ring-brand-red' : 'border-gray-300'} focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all`}
                        placeholder="your.email@example.com"
                      />
                      {errors.email && <p className="mt-1 text-sm text-brand-red">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number *</label>
                      <div className="flex">
                        <span className="inline-flex items-center px-3 py-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-lg text-sm font-medium">+977</span>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className={`flex-1 px-4 py-3 rounded-r-lg border ${errors.phone ? 'border-brand-red ring-1 ring-brand-red' : 'border-gray-300'} focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all`}
                          placeholder="98XXXXXXXX"
                        />
                      </div>
                      {errors.phone && <p className="mt-1 text-sm text-brand-red">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Branch</label>
                      <select
                        name="office"
                        value={formData.office}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all bg-white"
                      >
                        <option value="">Select a branch</option>
                        <option value="bagbazar">Bagbazar (Head Office)</option>
                        <option value="butwal">Butwal</option>
                        <option value="koteshwor">Koteshwor</option>
                        <option value="banepa">Banepa</option>
                        <option value="biratnagar">Biratnagar</option>
                        <option value="surkhet">Surkhet</option>
                        <option value="murgiya">Murgiya</option>
                        <option value="kirtipur">Kirtipur</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-brand-blue focus:border-transparent outline-none transition-all"
                      placeholder="How can we help you?"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows="5"
                      className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-brand-red ring-1 ring-brand-red' : 'border-gray-300'} focus:ring-2 focus:ring-brand-red focus:border-transparent outline-none transition-all resize-none`}
                      placeholder="Tell us about your study abroad plans, preferred destination, or any questions you have..."
                    ></textarea>
                    {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-900 hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                  
                  <p className="text-xs text-gray-400 text-center">
                    By submitting, you agree to our Privacy Policy and consent to be contacted by Brightway counselors.
                  </p>
                </form>
              )}
            </div>

            {/* Map Section - Head Office */}
            <div className="mt-8 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
              <div className="p-4 border-b border-gray-100 bg-gray-50">
                <h3 className="font-bold text-gray-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-blue" />
                  Head Office Location
                </h3>
                <p className="text-sm text-gray-600 mt-1">Simko Plaza, Level-1, Bagbazar-28, Kathmandu</p>
              </div>
              <div className="h-80 w-full bg-gray-100 flex items-center justify-center">
                {/* Replace with actual Google Maps embed */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.1234567890123!2d85.32456789012345!3d27.712345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjfCsDQyJzQ0LjQiTiA4NcKwMTknMzYuMCJF!5e0!3m2!1sen!2snp!4v1234567890123!5m2!1sen!2snp"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Brightway Head Office"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Sidebar - Office Information */}
          <div className="space-y-6">
            <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">
              <h3 className="text-xl font-bold text-grey-900 mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-brand-blue" />
                Our Locations
              </h3>
              <div className="space-y-6 max-h-[800px] overflow-y-auto pr-2 custom-scrollbar">
                {offices.map((office, index) => (
                  <div 
                    key={index} 
                    className={`border-b border-gray-200 pb-6 last:border-0 last:pb-0 ${office.isHead ? 'bg-blue-50 -mx-2 px-4 py-4 rounded-lg border-l-4 border-brand-blue' : ''}`}
                  >
                    <div className="flex items-start justify-between mb-2">
                      <h4 className={`font-bold ${office.isHead ? 'text-grey-900' : 'text-gray-900'}`}>
                        {office.name} {office.isHead && '⭐'}
                      </h4>
                      <span className="text-xs font-semibold text-white bg-brand-red px-2 py-1 rounded">
                        {office.location}
                      </span>
                    </div>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <MapPin className="w-4 h-4 text-brand-blue mt-0.5 flex-shrink-0" />
                        <p className="text-grey-700 leading-relaxed">
                          {office.address}
                          </p>
                      </div>
                      
                      <div className="flex items-center gap-2 flex-wrap">
                        <Phone className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <div className="flex flex-wrap gap-x-3 gap-y-1">
                          {office.phones.map((p, i) => (
                            <a 
                              key={i} 
                              href={`tel:${p.replace('-', '')}`} 
                              className="text-gray-700 hover:text-brand-red font-medium transition-colors"
                            >
                              {p}
                            </a>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4 text-brand-blue flex-shrink-0" />
                        <a 
                          href={`mailto:${office.email}`} 
                          className="text-gray-700 hover:text-brand-red font-medium transition-colors break-all"
                        >
                          {office.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-blue-900 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <p className="text-blue-100 text-sm mb-6">Stay updated with study abroad tips, scholarship alerts, and success stories.</p>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-yellow-500 hover:text-blue-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-yellow-500 hover:text-blue-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-yellow-500 hover:text-blue-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-white/10 hover:bg-yellow-500 hover:text-blue-900 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group">
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Quick Section */}
      <div className="bg-blue-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900">Frequently Asked Questions</h3>
            <p className="text-gray-600 mt-2">Quick answers to common questions</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { q: 'How do I book a free consultation?', a: 'Simply fill out the contact form above or call our head office. A counselor will contact you within 24 hours to schedule your session.' },
              { q: 'Which branch should I visit?', a: 'Visit the branch nearest to you. All our offices provide the same quality counseling services. Head Office in Bagbazar handles complex cases.' },
              { q: 'What documents do I need?', a: 'For initial consultation, just bring your academic transcripts and passport. We\'ll guide you through the complete documentation process.' }
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-sm text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
