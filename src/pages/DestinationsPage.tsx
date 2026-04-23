import { motion } from 'framer-motion'
import { MapPin, GraduationCap, DollarSign, Briefcase, CheckCircle, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const destinations = [
  {
    name: 'Australia',
    image: '/images/destinations/australia.jpg',
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

export default function DestinationsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-br from-warm via-white to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-coral/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              Study Destinations
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Choose Your{' '}
              <span className="text-coral">Dream Destination</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              Explore top study destinations around the world. We help you find the perfect country and university that matches your academic goals and aspirations.
            </p>
          </motion.div>
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
            className="space-y-16"
          >
            {destinations.map((destination, index) => (
              <motion.div
                key={destination.name}
                variants={cardVariants}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Image */}
                <div className={`relative ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={destination.image}
                      alt={destination.name}
                      className="w-full h-80 lg:h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-6 left-6">
                      <h2 className="text-3xl font-bold text-white mb-2">{destination.name}</h2>
                      <div className="flex items-center gap-4 text-white/90">
                        <span className="flex items-center gap-1">
                          <GraduationCap className="w-5 h-5" />
                          {destination.universities} Universities
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <p className="text-lg text-gray-600 mb-6">{destination.description}</p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-gray-500 mb-1">
                        <DollarSign className="w-4 h-4" />
                        <span className="text-sm">Avg. Tuition</span>
                      </div>
                      <p className="font-semibold text-dark">{destination.avgTuition}</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4">
                      <div className="flex items-center gap-2 text-gray-500 mb-1">
                        <Briefcase className="w-4 h-4" />
                        <span className="text-sm">Work Permit</span>
                      </div>
                      <p className="font-semibold text-dark">{destination.workPermit}</p>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark mb-3">Highlights</h4>
                    <div className="flex flex-wrap gap-2">
                      {destination.highlights.map((highlight, idx) => (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 bg-coral/10 text-coral text-sm px-3 py-1 rounded-full"
                        >
                          <CheckCircle className="w-3 h-3" />
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Requirements */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-dark mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {destination.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                          <MapPin className="w-4 h-4 text-coral flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/contact">
                    <Button className="bg-coral hover:bg-coral-dark text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 group">
                      Apply for {destination.name}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-coral">
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
              <Button className="bg-white text-coral hover:bg-white/90 px-8 py-6 rounded-full font-semibold text-lg transition-all hover:scale-105">
                Get Free Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
