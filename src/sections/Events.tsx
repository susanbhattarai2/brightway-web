import { motion } from 'framer-motion'
import { Calendar, MapPin, Clock, ArrowRight, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const events = [
  {
    title: 'Study in Australia Webinar',
    date: 'April 15, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Online (Zoom)',
    description: 'Learn about top Australian universities, scholarship opportunities, and visa requirements.',
    attendees: 150,
    image: '/images/destinations/australia.jpg',
    category: 'Webinar',
  },
  {
    title: 'UK Education Fair 2024',
    date: 'April 22, 2024',
    time: '10:00 AM - 6:00 PM',
    location: 'Brightway Office, Kathmandu',
    description: 'Meet representatives from 20+ UK universities. On-spot application assessment available.',
    attendees: 300,
    image: '/images/destinations/uk.jpg',
    category: 'Fair',
  },
  {
    title: 'IELTS Masterclass',
    date: 'April 28, 2024',
    time: '9:00 AM - 1:00 PM',
    location: 'Brightway Learning Center',
    description: 'Intensive workshop covering all IELTS modules with expert tips and practice tests.',
    attendees: 80,
    image: '/images/hero-student.jpg',
    category: 'Workshop',
  },
]

const pastEvents = [
  {
    title: 'Canada Study Visa Seminar',
    date: 'March 10, 2024',
    attendees: 200,
  },
  {
    title: 'USA University Application Workshop',
    date: 'February 25, 2024',
    attendees: 120,
  },
  {
    title: 'Scholarship Guidance Session',
    date: 'February 15, 2024',
    attendees: 180,
  },
]

export default function Events() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-brand-red font-semibold text-sm uppercase tracking-wider mb-4">
            Events & Webinars
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Upcoming <span className="text-brand-blue">Events</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join our events and webinars to learn more about studying abroad. Connect with university representatives and get your questions answered.
          </p>
        </motion.div>

        {/* Upcoming Events */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white rounded-3xl overflow-hidden shadow-card hover:shadow-card-hover transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-brand-blue text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-blue transition-colors">
                  {event.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {event.description}
                </p>

                {/* Event Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-brand-red" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Clock className="w-4 h-4 text-brand-red" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-brand-red" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Users className="w-4 h-4 text-brand-red" />
                    <span>{event.attendees}+ registered</span>
                  </div>
                </div>

                <Link to="/contact">
                  <Button className="w-full bg-brand-blue hover:bg-brand-blue-dark text-white py-2 rounded-lg font-medium transition-all hover:scale-[1.02] group">
                    Register Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Past Events */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl p-8 shadow-card"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Past Events</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">{event.title}</h4>
                  <p className="text-sm text-gray-500 mb-1">{event.date}</p>
                  <p className="text-sm text-brand-red">{event.attendees}+ attendees</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Want to stay updated on our upcoming events?</p>
          <Link to="/contact">
            <Button className="bg-brand-red hover:bg-brand-red-dark text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105">
              Subscribe to Event Updates
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
