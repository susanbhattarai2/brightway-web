import { useState, useEffect } from 'react';
import { ArrowRight, Check, Menu, X, MapPin, GraduationCap, Briefcase, DollarSign } from 'lucide-react';

export default function Japan() {
    const [activeSection, setActiveSection] = useState('why-japan');

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        destination: 'Japan',
        level: 'Undergraduate',
        office: 'Select'
    });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showDisclaimer, setShowDisclaimer] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                destination: 'Japan',
                level: 'Undergraduate',
                office: 'Select'
            });
        }, 3000);
    };

    const sections = [
        { id: 'why-japan', title: 'Why Japan?', icon: <MapPin className="w-4 h-4" /> },
        { id: 'universities', title: 'Top Universities', icon: <GraduationCap className="w-4 h-4" /> },
        { id: 'courses', title: 'Popular Courses', icon: <Briefcase className="w-4 h-4" /> },
        { id: 'visa', title: 'Visa Process', icon: <Check className="w-4 h-4" /> },
        { id: 'cost', title: 'Cost of Living', icon: <DollarSign className="w-4 h-4" /> },
        { id: 'work-rights', title: 'Work Rights', icon: <MapPin className="w-4 h-4" /> },
    ];

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 140;
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            setActiveSection(id);
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + 150;

            for (const section of sections) {
                const element = document.getElementById(section.id);
                if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight) > scrollPosition) {
                    setActiveSection(section.id);
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen bg-white">

            {/* Hero Section */}
            <div className="bg-gradient-to-r from-red-700 via-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="flex items-center space-x-2 text-sm mb-4 opacity-90">
                        <span>Destinations</span>
                        <span>/</span>
                        <span className="text-brand-red font-semibold">Japan</span>
                    </div>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Study in Japan
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mb-8 text-red-100">
                        A unique blend of ancient tradition and futuristic innovation. Experience world-class technology in the heart of Asia.
                    </p>
                    <button
                        onClick={() => scrollToSection('consultation-form')}
                        className="bg-brand-red hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 flex items-center shadow-md"
                    >
                        Book Free Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                </div>
            </div>

            {/* Sticky Navigation Tabs */}
            <div className="bg-white border-b border-gray-200 shadow-sm hidden lg:block sticky top-[64px] z-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-6 py-4 overflow-x-auto no-scrollbar">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className={`pb-2 text-sm font-medium transition-colors duration-200 whitespace-nowrap flex items-center gap-2 ${activeSection === section.id
                                        ? 'text-brand-blue border-b-2 border-brand-blue'
                                        : 'text-gray-700 hover:text-brand-blue'
                                    }`}
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Nav Toggle */}
            <div className="lg:hidden bg-white border-b border-gray-200 shadow-sm sticky top-[64px] z-40">
                <div className="px-4 py-3 flex justify-between items-center">
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-700">
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                    <span className="font-medium text-gray-700">Explore Japan</span>
                    <div className="w-8"></div>
                </div>
                {isMenuOpen && (
                    <div className="bg-white border-t border-gray-200 py-2 px-4 absolute w-full left-0 shadow-lg">
                        {sections.map((section) => (
                            <button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                className="block w-full text-left px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-50 border-b border-gray-100 last:border-0"
                            >
                                {section.title}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            {/* Main Content Layout */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">

                    {/* LEFT COLUMN: Long Scrolling Content */}
                    <div className="lg:col-span-2 space-y-16">

                        {/* Section 1: Why Japan */}
                        <section id="why-japan" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-6 h-6 text-brand-blue" />
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Why Choose Japan?</h2>
                            </div>
                            <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop" alt="Japan" className="w-full h-64 object-cover rounded-lg mb-6" />
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Japan is a global leader in technology, engineering, and design. Beyond its high-tech industry, Japan offers a rich cultural experience, safe cities, and a high quality of life.
                            </p>
                            <ul className="list-disc pl-5 space-y-2 text-gray-700">
                                <li>Cutting-edge technology and research intensive courses</li>
                                <li>Generous scholarships like MEXT available</li>
                                <li>Safe, clean, and efficient living environment</li>
                                <li>Unique cultural immersion and language opportunities</li>
                            </ul>
                        </section>

                        {/* Section 2: Universities */}
                        <section id="universities" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-4">
                                <GraduationCap className="w-6 h-6 text-brand-blue" />
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Top Universities</h2>
                            </div>
                            <p className="text-gray-700 mb-4">Home to prestigious national and private universities known for high academic standards.</p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {['University of Tokyo', 'Kyoto University', 'Osaka University', 'Waseda University', 'Tokyo Institute of Technology'].map((uni, i) => (
                                    <div key={i} className="p-4 border rounded-lg bg-gray-50 font-semibold text-gray-700">{uni}</div>
                                ))}
                            </div>
                        </section>

                        {/* Section 3: Courses */}
                        <section id="courses" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-4">
                                <Briefcase className="w-6 h-6 text-brand-blue" />
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Popular Courses</h2>
                            </div>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {[
                                    { t: 'Robotics & AI', d: 'Global leader' },
                                    { t: 'Engineering', d: 'Technical excellence' },
                                    { t: 'Japanese Studies', d: 'Cultural immersion' },
                                    { t: 'Game Design', d: 'Creative industry' },
                                    { t: 'Animation', d: 'World renown' }
                                ].map((c, i) => (
                                    <div key={i} className="p-4 border rounded-lg hover:shadow-md transition-shadow">
                                        <h4 className="font-bold text-brand-blue">{c.t}</h4>
                                        <p className="text-sm text-gray-500">{c.d}</p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Section 4: Visa */}
                        <section id="visa" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-4">
                                <Check className="w-6 h-6 text-brand-blue" />
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Student Visa Process</h2>
                            </div>
                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                <p className="text-gray-700 mb-4">We assist you in obtaining the Certificate of Eligibility (COE).</p>
                                <div className="space-y-2">
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-blue rounded-full"></div><span className="text-sm text-gray-700">Admission Letter from School/Uni</span></div>
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-blue rounded-full"></div><span className="text-sm text-gray-700">Certificate of Eligibility (COE)</span></div>
                                    <div className="flex items-center gap-2"><div className="w-2 h-2 bg-brand-blue rounded-full"></div><span className="text-sm text-gray-700">Final Visa Stamp from Embassy</span></div>
                                </div>
                            </div>
                        </section>

                        {/* Section 5: Cost */}
                        <section id="cost" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-4">
                                <DollarSign className="w-6 h-6 text-brand-blue" />
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Cost of Living</h2>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-6">
                                <div className="border p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Tuition Fees</h4>
                                    <p className="text-sm text-gray-600">¥500,000 - ¥2,000,000 / year</p>
                                </div>
                                <div className="border p-4 rounded-lg">
                                    <h4 className="font-bold mb-2">Living Costs</h4>
                                    <p className="text-sm text-gray-600">Approx. ¥100,000 - ¥150,000 / month</p>
                                </div>
                            </div>
                        </section>

                        {/* Section 6: Work Rights */}
                        <section id="work-rights" className="scroll-mt-32">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-6 h-6 text-brand-blue" />
                                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Work Rights</h2>
                            </div>
                            <div className="grid sm:grid-cols-1 gap-4">
                                <div className="bg-brand-blue text-white p-6 rounded-lg">
                                    <h3 className="text-2xl font-bold">28 Hrs</h3>
                                    <p className="text-sm opacity-90">Per week with a work permit (Shikakugai katsudo kyoka)</p>
                                </div>
                            </div>
                            <p className="mt-4 text-gray-700">International students can work part-time in various sectors, provided they don't work in adult entertainment industries. During long breaks, the limit increases to 8 hours per day.</p>
                        </section>

                    </div>

                    {/* RIGHT COLUMN: Sticky Form */}
                    <div className="lg:col-span-1">
                        <div id="consultation-form" className="bg-white rounded-lg shadow-lg border border-gray-100 p-6 lg:sticky lg:top-[140px]">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Book a Free Consultation</h3>

                            {isSubmitted ? (
                                <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-md">
                                    <div className="flex items-center">
                                        <Check className="h-5 w-5 text-green-500 mr-2" />
                                        <p className="text-green-700 text-sm">Request submitted!</p>
                                    </div>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div>
                                        <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleInputChange} required className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue outline-none" />
                                    </div>
                                    <div>
                                        <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleInputChange} required className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-brand-blue outline-none" />
                                    </div>
                                    <div className="flex">
                                        <span className="inline-flex items-center px-3 py-2.5 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md text-sm">+977</span>
                                        <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleInputChange} required className="flex-1 px-3 py-2.5 border border-gray-300 rounded-r-md text-sm focus:ring-2 focus:ring-brand-blue outline-none" />
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <select name="level" value={formData.level} onChange={handleInputChange} className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm bg-white focus:ring-2 focus:ring-brand-blue outline-none">
                                            <option>Undergraduate</option>
                                            <option>Postgraduate</option>
                                            <option>VET/Diploma</option>
                                        </select>
                                        <select name="office" value={formData.office} onChange={handleInputChange} required className="w-full px-3 py-2.5 border border-gray-300 rounded-md text-sm bg-white focus:ring-2 focus:ring-brand-blue outline-none">
                                            <option>Select Office</option>
                                            <option>Kathmandu</option>
                                            <option>Pokhara</option>
                                        </select>
                                    </div>
                                    <div className="flex items-start pt-2">
                                        <input id="disclaimer" type="checkbox" className="h-4 w-4 mt-1 text-brand-blue border-gray-300 rounded" onChange={(e) => setShowDisclaimer(e.target.checked)} />
                                        <label htmlFor="disclaimer" className="ml-2 text-xs text-gray-500">I agree to the <a href="#" className="text-brand-blue underline">Privacy Policy</a>.</label>
                                    </div>
                                    <button type="submit" disabled={!showDisclaimer} className={`w-full py-3 px-4 rounded-md text-white font-bold text-sm uppercase tracking-wide transition-colors ${showDisclaimer ? 'bg-brand-blue hover:bg-blue-800' : 'bg-gray-300 cursor-not-allowed'}`}>
                                        Submit Enquiry
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
