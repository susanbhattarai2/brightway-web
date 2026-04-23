import { motion } from 'framer-motion'

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

export default function Partners() {
  return (
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
  )
}
