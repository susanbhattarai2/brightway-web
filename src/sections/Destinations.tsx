import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const destinations = [
  {
    name: 'Australia',
    description: 'World-renowned education system with post-study work opportunities',
    image: '/images/destinations/australia.jpg',
    universities: '40+ Universities',
  },
  {
    name: 'United Kingdom',
    description: 'Historic universities with diverse course options',
    image: '/images/destinations/uk.jpg',
    universities: '50+ Universities',
  },
  {
    name: 'Canada',
    description: 'Affordable education with immigration pathways',
    image: '/images/destinations/canada.jpg',
    universities: '30+ Universities',
  },
  {
    name: 'USA',
    description: 'Top-ranked universities with research opportunities',
    image: '/images/destinations/usa.jpg',
    universities: '100+ Universities',
  },
  {
    name: 'New Zealand',
    description: 'Quality education in a safe environment',
    image: '/images/destinations/new-zealand.jpg',
    universities: '15+ Universities',
  },
  {
    name: 'Japan',
    description: 'Cutting-edge technology and culture',
    image: '/images/destinations/japan.jpg',
    universities: '20+ Universities',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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

export default function Destinations() {
  return (
    <section id="destinations" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-wider mb-4">
            Study Destinations
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Top Study <span className="text-brand-blue">Destinations</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose from world-class universities in popular destinations around the globe
          </p>
        </motion.div>

        {/* Destinations Grid */}
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
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {destination.universities}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-blue transition-colors">
                  {destination.name}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {destination.description}
                </p>
                <Link to="/destinations" className="flex items-center text-brand-blue font-semibold text-sm group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
