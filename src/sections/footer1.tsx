import React from 'react'

const footer1 = () => {
    return (
    import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react'
    import { Link } from 'react-router-dom'

    const quickLinks = [
        { name: 'About Us', href: '/about' },
        { name: 'Study Destinations', href: '/destinations' },
        { name: 'Services', href: '/services' },
        { name: 'Test Preparation', href: '/test-preparation' },
        { name: 'Contact', href: '/contact' },
    ]

    const services = [
        'Career Counseling',
        'University Admission',
        'Visa Assistance',
        'Test Preparation',
        'Financial Guidance',
        'Pre-Departure Support',
    ]

    export default function Footer() {
        return (
            <footer className="bg-gray-900 text-white">
                {/* Main Footer */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Company Info */}
                        <div className="sm:col-span-2 lg:col-span-1">
                            <Link to="/" className="flex items-center gap-3 mb-6">
                                <div className="w-12 h-12 rounded-full border-2 border-brand-blue flex items-center justify-center">
                                    <span className="text-brand-blue font-bold text-sm">BIE</span>
                                </div>
                                <div>
                                    <span className="text-lg font-black text-white leading-tight block">BRIGHTWAY</span>
                                    <span className="text-xs text-brand-red font-medium tracking-wider block">INTERNATIONAL EDUCATION</span>
                                </div>
                            </Link>
                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Your trusted partner for studying abroad. 20+ years of excellence in education consultancy helping Nepali students achieve their dreams.
                            </p>
                            <div className="flex items-center gap-3">
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-brand-blue transition-colors"
                                >
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            to={link.href}
                                            className="text-gray-400 hover:text-brand-blue transition-colors text-sm"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Services */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
                            <ul className="space-y-3">
                                {services.map((service) => (
                                    <li key={service}>
                                        <span className="text-gray-400 text-sm">{service}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                                    <p className="text-gray-400 text-sm">
                                        Simko Plaza, Level -1<br />
                                        Bagbazar-28, Kathmandu<br />
                                        Nepal
                                    </p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-5 h-5 text-brand-red flex-shrink-0" />
                                    <a href="mailto:info@brightway.com.np" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">
                                        info@brightway.com.np
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Phone className="w-5 h-5 text-brand-red flex-shrink-0" />
                                    <a href="tel:+977-1-4XXXXXX" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">
                                        +977-1-4XXXXXX
                                    </a>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-gray-400 text-sm">
                                    <span className="text-white font-medium">Working Hours:</span><br />
                                    Sun - Fri: 6:00 AM - 6:00 PM
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                            <p className="text-gray-400 text-sm text-center sm:text-left">
                                © 2024 Brightway International Education. All Rights Reserved.
                            </p>
                            <div className="flex items-center gap-6">
                                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-400 hover:text-brand-blue transition-colors text-sm">
                                    Terms of Service
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


            </footer>
        )
    }

  )
}

export default footer1