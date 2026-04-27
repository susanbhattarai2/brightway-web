import { MapPin, Phone, Mail, Building2 } from 'lucide-react'
import { Link } from 'react-router-dom'

// --- Data Constants ---

const footerLinks = {
  quickLinks: [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Destinations', href: '/destinations' },
    { name: 'Programs & University', href: '/programs' },
    { name: 'Test Preparation', href: '/test-prep' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Scholarships', href: '/scholarships' },
    { name: 'Events', href: '/events' },
  ],
  services: [
    { name: 'Career Counseling', href: '/services#career' },
    { name: 'Financial Advice', href: '/services#financial' },
    { name: 'Pre-Departure Orientation', href: '/services#pre-departure' },
    { name: 'Test Preparation', href: '/test-prep' },
    { name: 'University Admissions', href: '/services#admission' },
    { name: 'Visa Facilitation', href: '/services#visa' },
  ],
  destinations: [
    { name: 'Australia', href: '/destinations/australia' },
    { name: 'UK', href: '/destinations/uk' },
    { name: 'USA', href: '/destinations/usa' },
    { name: 'Canada', href: '/destinations/canada' },
    { name: 'Europe', href: '/destinations/europe' },
    { name: 'New Zealand', href: '/destinations/new-zealand' },
    { name: 'Dubai', href: '/destinations/dubai' },
    { name: 'Thailand', href: '/destinations/thailand' },
    { name: 'India', href: '/destinations/india' },
  ],
  testPrep: [
    { name: 'IELTS', href: '/test-prep/ielts' },
    { name: 'PTE', href: '/test-prep/pte' },
    { name: 'TOEFL', href: '/test-prep/toefl' },
  ],
  company: [
    { name: 'Contact Us', href: '/contact' },
    { name: 'About Us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms' },
  ],
}

const locations = [
  {
    title: 'Head Office',
    subtitle: 'Bagbazar',
    phone: ['01-4215449', '01-4248779'],
    email: 'info@brightway.com.np',
    address: 'Simko Plaza, Level-1, Bagbazar-28, Kathmandu, Nepal',
  },
  {
    title: 'Branch',
    subtitle: 'Butwal',
    phone: ['071-597296', '9849636051'],
    email: 'butwal@brightway.com.np',
    address: 'Milanchowk, Butwal, Nepal',
  },
  {
    title: 'Branch',
    subtitle: 'Koteshwor',
    phone: ['01-5923194', '9763405512'],
    email: 'koteshwor@brightway.com.np',
    address: 'Koteshwor Chowk, Kathmandu, Nepal',
  },
  {
    title: 'Branch',
    subtitle: 'Banepa',
    phone: ['01-1665831', '9767229368'],
    email: 'banepa@brightway.com.np',
    address: 'Chardobato Chowk, Banepa, Kavre, Nepal',
  },
  {
    title: 'Branch',
    subtitle: 'Biratnagar',
    phone: ['9827302716', '9842028198'],
    email: 'biratnagar@brightway.com.np',
    address: 'Mahendra Chowk, Biratnagar, Nepal',
  },
  {
    title: 'Branch',
    subtitle: 'Surkhet',
    phone: ['083-590829', '9858032729'],
    email: 'surkhet@brightway.com.np',
    address: 'Birendranagar-8,Campus Road, Surkhet, Nepal',
  },
  {
    title: 'Branch',
    subtitle: 'Murgiya',
    phone: ['071-592003', '9860012097'],
    email: 'murgiya@brightway.com.np',
    address: 'Sainamaina -8, Murgiya, Rupandehi, Nepal',
  },
  {
    title: 'Branch',
    subtitle: 'Kirtipur',
    phone: ['9845166652'],
    email: 'kirtipur@brightway.com.np',
    address: 'Pagadobato, Kirtipur, Kathmandu, Nepal',
  }


]

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-brand-blue to-blue-900 text-white pt-16 pb-8 border-t border-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Section: Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 mb-12">
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-200">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-blue-100 hover:text-white hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-200">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-blue-100 hover:text-white hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-200">Destinations</h4>
            <ul className="space-y-2">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-blue-100 hover:text-white hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Test Prep */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-200">Test Prep</h4>
            <ul className="space-y-2">
              {footerLinks.testPrep.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-blue-100 hover:text-white hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-4 uppercase tracking-wide text-blue-200">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link to={link.href} className="text-sm text-blue-100 hover:text-white hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Middle Section: Locations */}
        <div className="bg-blue-800/50 rounded-xl p-6 mb-12 backdrop-blur-sm border border-blue-700/50">
          <h3 className="text-center text-xl font-bold mb-8 text-white uppercase tracking-wider">Our Locations</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {locations.map((loc, idx) => (
              <div key={idx} className="space-y-4">

                {/* 1. Header with Building Icon */}
                <div className="flex items-center gap-3 pb-2 border-b border-blue-700/50">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-brand-blue flex-shrink-0 shadow-lg">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-xs text-white font-bold uppercase tracking-wider block">{loc.title}</span>
                    <span className="font-bold text-white text-lg leading-tight">{loc.subtitle}</span>
                  </div>
                </div>

                {/* Contact Details List */}
                <div className="space-y-3 text-sm text-blue-100">

                  {/* 2. Phone with Phone Icon */}
                  <div className="flex items-start gap-3 group">
                    <Phone className="w-4 h-4 mt-1 text-white flex-shrink-0 group-hover:text-white transition-colors" />
                    <div className="flex flex-col">
                      {loc.phone.map((p, i) => (
                        <span key={i} className="hover:text-white transition-colors cursor-default">{p}</span>
                      ))}
                    </div>
                  </div>

                  {/* 3. Email with Envelope (Mail) Icon */}
                  <div className="flex items-start gap-3 group">
                    <Mail className="w-4 h-4 mt-1 text-white flex-shrink-0 group-hover:text-white transition-colors" />
                    <a href={`mailto:${loc.email}`} className="hover:text-white transition-colors break-all">
                      {loc.email}
                    </a>
                  </div>

                  {/* 4. Address with Pin (MapPin) Icon */}
                  <div className="flex items-start gap-3 group">
                    <MapPin className="w-4 h-4 mt-1 text-white flex-shrink-0 group-hover:text-white transition-colors" />
                    <span className="leading-relaxed">{loc.address}</span>
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section: Accreditation & Copyright */}
        <div className="border-t border-blue-800 pt-8">

          {/* Accreditation Logos Placeholder */}
          <div className="flex flex-wrap justify-center gap-6 mb-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="h-10 w-24 bg-white/10 rounded flex items-center justify-center text-xs">LOGO 1</div>
            <div className="h-10 w-24 bg-white/10 rounded flex items-center justify-center text-xs">LOGO 2</div>
            <div className="h-10 w-24 bg-white/10 rounded flex items-center justify-center text-xs">LOGO 3</div>
            <div className="h-10 w-24 bg-white/10 rounded flex items-center justify-center text-xs">LOGO 4</div>
            <div className="h-10 w-24 bg-white/10 rounded flex items-center justify-center text-xs">LOGO 5</div>
          </div>

          <div className="text-center text-xs text-blue-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Our institution offers worldwide accepted validity certified by IRIN, NAEER, TOEFL, PTE and British Council – ensuring ethical, up-to-date counseling standards. These accreditations validate our commitment to excellence, providing students with internationally accepted qualifications and enhanced career prospects.
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-blue-300">
            <div className="flex items-center gap-2">

              <span>©Brightway International Education. All Rights Reserved.</span>
            </div>

            <div className="flex items-center gap-1">
              <span>Designed and Developed by:</span>
              <span className="font-bold text-white">Agaman Creations</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}