import { motion } from 'framer-motion'
import { Compass, Building2, FileCheck, BookOpen, Wallet, Plane, CheckCircle, ArrowRight, Phone } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router-dom'

const services = [
  {
    icon: Compass,
    title: 'Career Counseling',
    description: 'Get personalized guidance to choose the right course and university that aligns with your career goals and aspirations.',
    features: [
      'One-on-one counseling sessions',
      'Career path assessment',
      'Course and university selection',
      'Scholarship guidance',
      'Application strategy planning',
    ],
    process: [
      'Initial consultation to understand your goals',
      'Assessment of academic background and interests',
      'Shortlisting suitable courses and universities',
      'Finalizing application strategy',
    ],
    color: 'bg-blue-500',
    lightColor: 'bg-blue-50',
  },
  {
    icon: Building2,
    title: 'University Admission',
    description: 'End-to-end support for your university applications, from documentation to submission and follow-up.',
    features: [
      'Application form filling',
      'SOP and essay writing',
      'Recommendation letters',
      'Document verification',
      'Application tracking',
    ],
    process: [
      'Document collection and verification',
      'Preparing statement of purpose',
      'Arranging recommendation letters',
      'Submitting applications',
      'Following up with universities',
    ],
    color: 'bg-green-500',
    lightColor: 'bg-green-50',
  },
  {
    icon: FileCheck,
    title: 'Visa Assistance',
    description: 'Expert visa counseling with a 97% success rate. We handle all documentation and interview preparation.',
    features: [
      'Visa document preparation',
      'Financial documentation',
      'Interview preparation',
      'Mock visa interviews',
      'Post-visa guidance',
    ],
    process: [
      'Assessing visa requirements',
      'Preparing financial documents',
      'Filling visa application forms',
      'Interview preparation sessions',
      'Visa submission and tracking',
    ],
    color: 'bg-coral',
    lightColor: 'bg-orange-50',
  },
  {
    icon: BookOpen,
    title: 'Test Preparation',
    description: 'Comprehensive coaching for IELTS, PTE, TOEFL, and language proficiency tests by experienced instructors.',
    features: [
      'Expert faculty',
      'Small batch sizes',
      'Mock tests and practice',
      'Study materials provided',
      'Flexible batch timings',
    ],
    process: [
      'Assessment of current level',
      'Customized study plan',
      'Regular classes and practice',
      'Mock tests and feedback',
      'Final preparation before exam',
    ],
    color: 'bg-purple-500',
    lightColor: 'bg-purple-50',
  },
  {
    icon: Wallet,
    title: 'Financial Guidance',
    description: 'Assistance with education loans, scholarships, and financial documentation for your study abroad journey.',
    features: [
      'Education loan assistance',
      'Scholarship applications',
      'Financial documentation',
      'Bank partnerships',
      'Budget planning',
    ],
    process: [
      'Evaluating financial requirements',
      'Exploring loan options',
      'Scholarship search and application',
      'Preparing financial documents',
      'Bank loan processing support',
    ],
    color: 'bg-yellow-500',
    lightColor: 'bg-yellow-50',
  },
  {
    icon: Plane,
    title: 'Pre-Departure Support',
    description: 'Comprehensive orientation including travel arrangements, accommodation, and settling-in support.',
    features: [
      'Travel booking assistance',
      'Accommodation support',
      'Pre-departure orientation',
      'Airport pickup arrangement',
      'Local guidance',
    ],
    process: [
      'Pre-departure briefing session',
      'Travel and accommodation booking',
      'Cultural orientation',
      'Essential checklist guidance',
      'Post-arrival support setup',
    ],
    color: 'bg-teal-500',
    lightColor: 'bg-teal-50',
  },
]

const faqs = [
  {
    question: 'How long does the entire process take?',
    answer: 'The timeline varies depending on the destination and university. Typically, it takes 3-6 months from initial consultation to departure.',
  },
  {
    question: 'Do you guarantee visa approval?',
    answer: 'While we cannot guarantee visa approval, we have a 97% success rate due to our thorough preparation and documentation support.',
  },
  {
    question: 'What are your service charges?',
    answer: 'Our charges vary based on the services you require. We offer free initial consultation to discuss your needs and provide a quote.',
  },
  {
    question: 'Can you help with scholarships?',
    answer: 'Yes, we assist students in finding and applying for scholarships. We maintain updated information on available scholarships at partner universities.',
  },
]

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-dark mb-6">
              Comprehensive{' '}
              <span className="text-coral">Support</span> for Your Journey
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              From career counseling to pre-departure support, we provide end-to-end services to make your study abroad dream a reality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-8 lg:gap-12 items-start ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                  <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-dark mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-8">{service.description}</p>

                  {/* Features */}
                  <div className="mb-8">
                    <h4 className="font-semibold text-dark mb-4">What We Offer</h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-coral flex-shrink-0" />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link to="/contact">
                    <Button className="bg-coral hover:bg-coral-dark text-white px-6 py-3 rounded-full font-medium transition-all hover:scale-105 group">
                      Get Started
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>

                {/* Process Card */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className={`${service.lightColor} rounded-3xl p-8`}>
                    <h4 className="font-semibold text-dark mb-6">Our Process</h4>
                    <div className="space-y-4">
                      {service.process.map((step, idx) => (
                        <div key={idx} className="flex items-start gap-4">
                          <div className={`w-8 h-8 ${service.color} rounded-full flex items-center justify-center flex-shrink-0 text-white font-semibold text-sm`}>
                            {idx + 1}
                          </div>
                          <p className="text-gray-700 pt-1">{step}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block text-coral font-semibold text-sm uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-dark">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="bg-white rounded-2xl p-6 shadow-card"
              >
                <h4 className="font-semibold text-dark mb-2">{faq.question}</h4>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-dark-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and let us help you achieve your study abroad dreams.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact">
                <Button className="bg-coral hover:bg-coral-dark text-white px-8 py-6 rounded-full font-semibold text-lg transition-all hover:scale-105">
                  <Phone className="mr-2 w-5 h-5" />
                  Book Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
