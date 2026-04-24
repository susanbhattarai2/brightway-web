import { motion } from 'framer-motion'
import { MapPin, GraduationCap, DollarSign, Briefcase, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const destinations = [
  {
    name: 'Australia',
    image: '/images/destinations/australia.jpg', // Ensure these paths exist or use placeholders
    description: 'World-renowned education system with excellent post-study work opportunities and a high quality of life.',
    universities: '40+',
    avgTuition: '$20,000 - $45,000',
    workPermit: '2-4 years',
    highlights: ['Top-ranked universities', 'Post-study work visa', 'Multicultural society', 'High standard of living'],
    requirements: ['IELTS 6.5+', 'Academic transcripts', 'Statement of Purpose', 'Financial proof'],
  },
  {
    name: 'United Kingdom',
    image: '/images/destinations/uk.jpg',
    description: 'Historic universities with diverse course options and a rich cultural experience.',
    universities: '50+',
    avgTuition: '£15,000 - £35,000',
    workPermit: '2 years',
    highlights: ['World-class education', 'Shorter course duration', 'Graduate visa route', 'Cultural diversity'],
    requirements: ['IELTS 6.0+', 'Academic transcripts', 'Personal statement', 'Reference letters'],
  },
  {
    name: 'Canada',
    image: '/images/destinations/canada.jpg',
    description: 'Affordable education with clear pathways to permanent residency and a welcoming environment.',
    universities: '30+',
    avgTuition: '$15,000 - $35,000',
    workPermit: '3 years',
    highlights: ['Affordable tuition', 'PGWP available', 'Immigration pathways', 'Safe environment'],
    requirements: ['IELTS 6.5+', 'Academic documents', 'Study permit', 'GIC (for SDS)'],
  },
  {
    name: 'USA',
    image: '/images/destinations/usa.jpg',
    description: 'Top-ranked universities with cutting-edge research facilities and diverse program options.',
    universities: '100+',
    avgTuition: '$25,000 - $60,000',
    workPermit: '1-3 years (OPT)',
    highlights: ['Ivy League options', 'Research opportunities', 'Diverse programs', 'Campus life'],
    requirements: ['TOEFL/IELTS', 'GRE/GMAT (for grad)', 'Academic transcripts', 'Financial documents'],
  },
  {
    name: 'New Zealand',
    image: '/images/destinations/new-zealand.jpg',
    description: 'Quality education in a safe, beautiful environment with excellent work-life balance.',
    universities: '15+',
    avgTuition: '$20,000 - $35,000',
    workPermit: '1-3 years',
    highlights: ['Safe environment', 'Work while studying', 'Post-study work visa', 'Natural beauty'],
    requirements: ['IELTS 6.0+', 'Academic records', 'Financial proof', 'Health insurance'],
  },
  {
    name: 'Japan',
    image: '/images/destinations/japan.jpg',
    description: 'Cutting-edge technology, unique culture, and world-class research opportunities.',
    universities: '20+',
    avgTuition: '$5,000 - $15,000',
    workPermit: 'Available',
    highlights: ['Affordable tuition', 'Technology hub', 'Unique culture', 'Scholarships available'],
    requirements: ['Japanese/English proficiency', 'Academic transcripts', 'Recommendation letters', 'Research plan'],
  },
]

const partners = [
  { name: 'Stanley College', initials: 'SC', color: 'bg-yellow-400' },
  { name: 'Macquarie University', initials: 'MU', color: 'bg-red-600' },
  { name: 'La Trobe University', initials: 'LT', color: 'bg-red-500' },
  { name: 'University of Alberta', initials: 'UA', color: 'bg-green-600' },
  { name: 'Manchester Metropolitan', initials: 'MMU', color: 'bg-purple-600' },
  { name: 'Fleming College', initials: 'FC', color: 'bg-blue-500' },
  { name: 'Algonquin College', initials: 'AC', color: 'bg-green-500' },
  { name: 'Swansea University', initials: 'SU', color: 'bg-blue-700' },
  { name: 'Keele University', initials: 'KU', color: 'bg-red-700' },
  { name: 'University of Niagara', initials: 'UN', color: 'bg-cyan-500' },
  { name: 'Global Academy', initials: 'GA', color: 'bg-orange-500' },
  { name: 'Siam University', initials: 'SU', color: 'bg-pink-600' },
]

// Duplicate for seamless scroll
const allPartners = [...partners, ...partners]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
}

// Helper function for scrolling
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export default function DestinationsPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <section>
        <div className="bg-gradient-to-r from-brand-blue to-blue-900 text-white py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center space-x-2 text-sm mb-4 opacity-90">
              <span>Destinations</span>
              <span>/</span>
              <span className="font-semibold text-brand-red">Overview</span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Choose Your Dream Destination
            </h1>
            <p className="text-lg sm:text-xl max-w-3xl mb-8 text-blue-100">
              Explore top study destinations around the world. We help you find the perfect country and university that matches your academic goals and aspirations.
            </p>
            <button
              onClick={() => scrollToSection('consultation-form')}
              className="bg-brand-red hover:bg-brand-red-dark text-white font-semibold py-3 px-6 rounded-full transition-colors duration-300 flex items-center shadow-md"
            >
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {destinations.map((destination) => (
              <motion.div
                key={destination.name}
                variants={cardVariants}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-gray-100"
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden bg-gray-200">
                  {/* Placeholder background if image fails to load */}
                  <div className="absolute inset-0 bg-gray-200 animate-pulse" />
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 relative z-10"
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.src = 'https://via.placeholder.com/600x400?text=' + destination.name;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />
                  <div className="absolute bottom-4 left-4 z-30">
                    <span className="inline-block bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {destination.universities} Universities
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {destination.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
                    {destination.description}
                  </p>

                  {/* Quick Stats */}
                  {/* <div className="flex items-center justify-between text-xs text-gray-500 mb-4 border-t border-gray-100 pt-4">
                    <div className="flex items-center gap-1">
                      <DollarSign className="w-3 h-3" />
                      <span>Tuition: {destination.highlights}</span>
                    </div>
                  </div> */}

                  <Link to={`/destinations/${destination.name.toLowerCase().replace(' ', '-')}`} className="flex items-center text-blue-900 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Explore Details</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/*patners*/}
      <section className="py-16 lg:py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Proud of <span className="text-brand-blue">100+</span> Elite Universities Worldwide
            </h2>
          </motion.div>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Scrolling container */}
          <div className="flex logo-scroll">
            {allPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-6 flex items-center justify-center"
              >
                <div className="flex items-center gap-3 px-6 py-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                  <div className={`w-12 h-12 ${partner.color} rounded-lg flex items-center justify-center text-white font-bold text-sm`}>
                    {partner.initials}
                  </div>
                  <span className="text-gray-700 font-medium whitespace-nowrap">{partner.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Not Sure Which Destination is Right for You?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Our expert counselors can help you choose the perfect destination based on your academic goals, budget, and career aspirations.
            </p>
            <Link to="/contact">
              <Button className="bg-brand-red text-white hover:bg-brand-red-dark px-8 py-6 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg">
                Get Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}