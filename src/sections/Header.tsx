import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, Facebook, Instagram, Twitter, Youtube, ChevronDown, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { href, Link, useLocation } from 'react-router-dom'
import logo from '../images/2.png'
import {
  getSettings
} from '../api/homepageapi'

const settingsData = await getSettings();
console.log('final setting data', settingsData);

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  {
    name: 'Services',
    href: '/services',
    dropdown: [
      { name: 'Career Counseling', href: '/services' },
      { name: 'University Admission', href: '/services' },
      { name: 'Visa Assistance', href: '/services' },
      { name: 'Test Preparation', href: '/test-preparation' },
      { name: 'Financial Guidance', href: '/services' },
    ]
  },
  {
    name: 'Study Destinations',
    href: '/destinations',
    dropdown: [
      { name: 'Australia', href: '/destinations' },
      { name: 'United Kingdom', href: '/destinations' },
      { name: 'Canada', href: '/destinations' },
      { name: 'USA', href: '/destinations' },
      { name: 'New Zealand', href: '/destinations' },
      { name: 'Japan', href: '/destinations' },
      { name: 'South Korea', href: './destinations' }
    ]
  },
  {
    name: 'Test Preparation', href: '/test-preparation',
    dropdown: [
      { name: 'IELTS', href: '/test-preparation' },
      { name: 'PTE', href: '/test-preparation' },
      { name: 'TOEFL', href: '/test-preparation' },
      { name: 'SAT', href: '/test-preparation' },

    ]
  },
]

const topLinks = [
  { name: 'Blogs', href: '/about' },
  { name: 'Events', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'FAQs', href: '/about' },
  { name: 'Mock Test', href: '/test-preparation' },
  { name: 'Student Resources', href: '/services' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isActive = (href: string) => {
    if (href === '/') {
      return location.pathname === '/'
    }
    return location.pathname.startsWith(href)
  }

  const getLink = (name: string) => {
      return settingsData.social_media_link?.find(
          (item: any) => item.name.toLowerCase() === name.toLowerCase()
      )?.link || '#';
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10">
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              <a
                href={getLink('Facebook')}
                target="_blank"
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>

              <a
                href={getLink('Instagram')}
                target="_blank"
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              <a
                href={getLink('Twitter')}
                target="_blank"
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <Twitter className="w-3.5 h-3.5" />
              </a>

              <a
                href={getLink('TikTok')}
                target="_blank"
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5"
                >
                  <path d="M12.75 2c.38 2.72 2.45 4.8 5.17 5.17v2.6a7.74 7.74 0 0 1-3.82-1.02v5.42a5.83 5.83 0 1 1-5.83-5.83c.26 0 .52.02.77.05v2.64a3.2 3.2 0 1 0 2.94 3.19V2h.77z"/>
                </svg>
              </a>

              <a
                href={getLink('YouTube')}
                target="_blank"
                className="w-7 h-7 rounded-full border border-gray-300 flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>

            </div>

            {/* Quick Links */}
            <div className="hidden md:flex items-center gap-6">
              {topLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="text-xs text-gray-600 hover:text-brand-blue transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`sticky top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : 'border-b border-gray-100'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* {logo} */}
            <Link to="/" className="flex items-center group">
              <img
                src={settingsData.site_logo}
                alt="Brightway International Education"
                className="h-12 w-auto object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative"
                  onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={link.href}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors ${isActive(link.href) ? 'text-brand-blue' : 'text-gray-700 hover:text-brand-blue'
                      }`}
                  >
                    {link.name}
                    {link.dropdown && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown */}
                  {link.dropdown && activeDropdown === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 bg-white shadow-lg rounded-lg py-2 min-w-48 z-50 border border-gray-100"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-brand-blue transition-colors"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/contact">
                <Button className="bg-white text-brand-blue border-2 border-brand-blue hover:bg-brand-blue hover:text-white px-6 py-2 rounded-md font-medium transition-all">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="lg:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] bg-white">
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-2 py-4 border-b">
                    <div className="w-10 h-10 rounded-full border-2 border-brand-blue flex items-center justify-center">
                      <span className="text-brand-blue font-bold text-xs">BIE</span>
                    </div>
                    <div>
                      <span className="font-black text-brand-blue text-sm block">BRIGHTWAY</span>
                      <span className="text-xs text-brand-red block">EDUCATION</span>
                    </div>
                  </div>
                  <nav className="flex flex-col gap-2 py-6">
                    {navLinks.map((link) => (
                      <Link
                        key={link.name}
                        to={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-base font-medium py-2 transition-colors ${isActive(link.href) ? 'text-brand-blue' : 'text-gray-700 hover:text-brand-blue'
                          }`}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </nav>
                  <div className="mt-auto pb-6">
                    <Link to="/contact" onClick={() => setIsOpen(false)}>
                      <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-3 rounded-md font-medium">
                        <Phone className="w-4 h-4 mr-2" />
                        Contact Us
                      </Button>
                    </Link>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div >
      </motion.header >
    </>
  )
}
