import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Users, Globe, BookOpen, Shield } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2000, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      const easeOut = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(easeOut * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isVisible, end, duration])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

const milestones = [
  { year: '2004', title: 'Founded', description: 'Brightway was established in Kathmandu' },
  { year: '2008', title: 'Expansion', description: 'Opened 3 branch offices across Nepal' },
  { year: '2012', title: 'Partnerships', description: 'Partnered with 50+ universities worldwide' },
  { year: '2016', title: 'Milestone', description: 'Placed 5000+ students successfully' },
  { year: '2020', title: 'Innovation', description: 'Launched online counseling services' },
  { year: '2024', title: 'Leader', description: 'Nepal\'s top education consultancy' },
]

const values = [
  { icon: Heart, title: 'Student-First', description: 'We prioritize student success above all else' },
  { icon: Shield, title: 'Integrity', description: 'Honest and transparent in all our dealings' },
  { icon: Award, title: 'Excellence', description: 'Committed to the highest quality service' },
  { icon: Users, title: 'Collaboration', description: 'Working together for student success' },
]

const stats = [
  { icon: Users, value: 10, suffix: 'K+', label: 'Students Placed' },
  { icon: Globe, value: 15, suffix: '+', label: 'Countries' },
  { icon: BookOpen, value: 100, suffix: '+', label: 'Partner Universities' },
  { icon: Award, value: 20, suffix: '+', label: 'Years Experience' },
]

const team = [
  { name: 'Rajesh Sharma', role: 'Founder & CEO', image: '/images/testimonials/student-2.jpg' },
  { name: 'Sunita Gurung', role: 'Head of Counseling', image: '/images/testimonials/student-1.jpg' },
  { name: 'Prakash Adhikari', role: 'Visa Specialist', image: '/images/testimonials/student-4.jpg' },
  { name: 'Anjali Thapa', role: 'Test Prep Coordinator', image: '/images/testimonials/student-3.jpg' },
]

const partners = [
  'University of Melbourne',
  'University of Manchester',
  'University of Toronto',
  'New York University',
  'University of Auckland',
  'Tokyo University',
]

export default function About() {
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
              About Us
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Your Trusted Partner in{' '}
              <span className="text-coral">Global Education</span>
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              For over two decades, Brightway International Education has been guiding Nepali students towards their dreams of studying at world-class universities abroad.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-3xl p-8 lg:p-10"
            >
              <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-coral" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To empower Nepali students with world-class education opportunities by providing expert guidance, personalized counseling, and comprehensive support throughout their study abroad journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 rounded-3xl p-8 lg:p-10"
            >
              <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-coral" />
              </div>
              <h2 className="text-2xl font-bold text-dark mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To be the most trusted education consultancy in Nepal, recognized for our integrity, expertise, and commitment to student success in achieving their global education dreams.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-28 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-10 h-10 text-coral mx-auto mb-4" />
                <div className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  <Counter end={stat.value} suffix={stat.suffix} />
                </div>
                <p className="text-gray-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Story / Timeline */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              Two Decades of Excellence
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-coral/20" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className={`flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 text-center ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <h3 className="text-2xl font-bold text-coral mb-2">{milestone.year}</h3>
                    <h4 className="text-xl font-semibold text-dark mb-2">{milestone.title}</h4>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                  <div className="w-4 h-4 bg-coral rounded-full border-4 border-white shadow-lg z-10" />
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              Our Values
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              What We Stand For
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-8 text-center shadow-card hover:shadow-card-hover transition-shadow"
              >
                <div className="w-14 h-14 bg-coral/10 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-coral" />
                </div>
                <h3 className="text-xl font-bold text-dark mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              Our Team
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              Meet Our Experts
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-48 h-48 rounded-full object-cover mx-auto border-4 border-coral/20"
                  />
                </div>
                <h3 className="text-xl font-bold text-dark mb-1">{member.name}</h3>
                <p className="text-coral">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              Our Partners
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-dark">
              Partner Universities
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-xl p-6 shadow-card text-center"
              >
                <p className="text-lg font-semibold text-dark">{partner}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
